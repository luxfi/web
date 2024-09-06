// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "./Auction.sol";

contract AuctionMultiple is Auction {
    uint256 public constant LIMIT = 2000;
    uint256 public constant HEAD = 120000000 * 1e18;
    uint256 public constant TAIL = 0;
    uint256 public lastBidID = 0;
    uint256 public acceptedBids = 0;
    uint256 public howMany;

    struct Bid {
        uint256 prev;
        uint256 next;
        uint256 value;
        address contributor;
    }

    mapping(uint256 => Bid) public multipleBids;
    mapping(address => uint256) public contributors;

    event LogNumber(uint256 number);
    event LogText(string text);
    event LogAddress(address addr);

    constructor(
        uint256 _price,
        string memory _description,
        uint256 _timestampEnd,
        address _beneficiary,
        uint256 _howMany
    ) Auction(_price, _description, _timestampEnd, _beneficiary) {
        require(
            _howMany > 1,
            "This auction is suited to multiple items. With 1 item only - use different code. Or remove this 'require' - you've been warned"
        );
        howMany = _howMany;

        multipleBids[HEAD] = Bid({
            prev: TAIL,
            next: TAIL,
            value: HEAD,
            contributor: address(0)
        });
        multipleBids[TAIL] = Bid({
            prev: HEAD,
            next: HEAD,
            value: TAIL,
            contributor: address(0)
        });
    }

    receive() external payable virtual override {
        if (msg.value == 0) {
            refund();
        } else {
            bid();
        }
    }

    function bid() public payable {
        require(
            block.timestamp < timestampEnd,
            "cannot bid after the auction ends"
        );

        uint256 myBidId = contributors[msg.sender];
        uint256 insertionBidId;

        if (myBidId > 0) {
            Bid storage existingBid = multipleBids[myBidId];
            existingBid.value += msg.value;

            if (existingBid.value > multipleBids[existingBid.next].value) {
                insertionBidId = searchInsertionPoint(
                    existingBid.value,
                    existingBid.next
                );

                multipleBids[existingBid.prev].next = existingBid.next;
                multipleBids[existingBid.next].prev = existingBid.prev;

                existingBid.prev = insertionBidId;
                existingBid.next = multipleBids[insertionBidId].next;

                multipleBids[multipleBids[insertionBidId].next].prev = myBidId;
                multipleBids[insertionBidId].next = myBidId;
            }
        } else {
            require(
                msg.value >= price,
                "Not much sense sending less than the price, likely an error"
            );
            require(
                lastBidID < LIMIT,
                "Due to blockGas limit we limit number of people in the auction to 2000"
            );

            lastBidID++;
            acceptedBids++;

            insertionBidId = searchInsertionPoint(msg.value, TAIL);

            contributors[msg.sender] = lastBidID;

            multipleBids[lastBidID] = Bid({
                prev: insertionBidId,
                next: multipleBids[insertionBidId].next,
                value: msg.value,
                contributor: msg.sender
            });

            multipleBids[multipleBids[insertionBidId].next].prev = lastBidID;
            multipleBids[insertionBidId].next = lastBidID;
        }
    }

    function searchInsertionPoint(
        uint256 _contribution,
        uint256 _startSearch
    ) public view returns (uint256 insertionPoint) {
        require(
            _contribution > multipleBids[_startSearch].value,
            "your contribution and _startSearch does not make sense, it will search in a wrong direction"
        );

        Bid memory lowerBid = multipleBids[_startSearch];
        Bid memory higherBid;

        while (true) {
            higherBid = multipleBids[lowerBid.next];

            if (_contribution < higherBid.value) {
                return higherBid.prev;
            } else {
                lowerBid = higherBid;
            }
        }
    }

    function getPosition(address addr) public view returns (uint256) {
        uint256 bidId = contributors[addr];
        require(
            bidId != 0,
            "cannot ask for a position of a guy who is not on the list"
        );
        uint256 position = 1;

        Bid memory currentBid = multipleBids[HEAD];

        while (currentBid.prev != bidId) {
            currentBid = multipleBids[currentBid.prev];
            position++;
        }
        return position;
    }

    function getPosition() public view returns (uint256) {
        return getPosition(msg.sender);
    }

    function refund() public override {
        refund(msg.sender);
    }

    function refundOnBehalf(address addr) public onlyOwner {
        refund(addr);
    }

    function refund(address addr) private {
        uint256 bidId = contributors[addr];
        require(
            bidId > 0,
            "the guy with this address does not exist, makes no sense to withdraw"
        );
        uint256 position = getPosition(addr);
        require(
            position > howMany,
            "only the non-winning multipleBids can be withdrawn"
        );

        Bid memory thisBid = multipleBids[bidId];
        multipleBids[thisBid.prev].next = thisBid.next;
        multipleBids[thisBid.next].prev = thisBid.prev;

        delete multipleBids[bidId];
        delete contributors[addr];

        acceptedBids--;
        emit Refund(addr, thisBid.value, block.timestamp);
        payable(addr).transfer(thisBid.value);
    }

    function finalize() public virtual override ended onlyOwner {
        require(
            finalized == false,
            "auction already finalized, can withdraw only once"
        );
        finalized = true;

        uint256 sumContributions = 0;
        uint256 counter = 0;
        Bid memory currentBid = multipleBids[HEAD];
        while (counter++ < howMany && currentBid.prev != TAIL) {
            currentBid = multipleBids[currentBid.prev];
            sumContributions += currentBid.value;
        }

        payable(beneficiary).transfer(sumContributions);
    }
}