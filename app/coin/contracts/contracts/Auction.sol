// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Auction {
    string public description;
    string public instructions; // will be used for delivery address or email
    uint public price;
    bool public initialPrice = true; // at first asking price is OK, then +25% required
    uint public timestampEnd;
    address public beneficiary;
    bool public finalized = false;

    address public owner;
    address public winner;
    mapping(address => uint) public bids;
    address[] public accountsList; // so we can iterate: https://ethereum.stackexchange.com/questions/13167/are-there-well-solved-and-simple-storage-patterns-for-solidity

    uint public increaseTimeIfBidBeforeEnd = 24 * 60 * 60; // Naming things: https://www.instagram.com/p/BSa_O5zjh8X/
    uint public increaseTimeBy = 24 * 60 * 60;

    event BidEvent(
        address indexed winner,
        uint indexed price,
        uint indexed timestamp
    );
    event Refund(address indexed addr, uint value, uint timestamp);

    modifier onlyOwner() {
        require(owner == msg.sender, "only owner");
        _;
    }

    modifier onlyWinner() {
        require(winner == msg.sender, "only winner");
        _;
    }

    modifier ended() {
        require(block.timestamp > timestampEnd, "not ended yet");
        _;
    }

    function setDescription(string memory _description) public onlyOwner {
        description = _description;
    }

    function setInstructions(
        string memory _instructions
    ) public ended onlyWinner {
        instructions = _instructions;
    }

    constructor(
        uint _price,
        string memory _description,
        uint _timestampEnd,
        address _beneficiary
    ) {
        require(
            _timestampEnd > block.timestamp,
            "end of the auction must be in the future"
        );
        owner = msg.sender;
        price = _price;
        description = _description;
        timestampEnd = _timestampEnd;
        beneficiary = _beneficiary;
    }

    receive() external virtual payable {
        if (msg.value == 0) {
            refund();
            return;
        }

        require(block.timestamp < timestampEnd, "auction has ended");

        if (bids[msg.sender] > 0) {
            bids[msg.sender] += msg.value;
        } else {
            bids[msg.sender] = msg.value;
            accountsList.push(msg.sender);
        }

        if (initialPrice) {
            require(
                bids[msg.sender] >= price,
                "bid too low, minimum is the initial price"
            );
        } else {
            require(
                bids[msg.sender] >= ((price * 5) / 4),
                "bid too low, minimum 25% increment"
            );
        }

        if (block.timestamp > timestampEnd - increaseTimeIfBidBeforeEnd) {
            timestampEnd = block.timestamp + increaseTimeBy;
        }

        initialPrice = false;
        price = bids[msg.sender];
        winner = msg.sender;
        emit BidEvent(winner, price, block.timestamp);
    }

    function finalize() virtual public ended onlyOwner {
        require(!finalized, "can withdraw only once");
        require(!initialPrice, "can withdraw only if there were bids");

        finalized = true;
        payable(beneficiary).transfer(price);
    }

    function refundContributors() public ended onlyOwner {
        bids[winner] = 0; // setting it to zero that in the refund loop it is skipped
        for (uint i = 0; i < accountsList.length; i++) {
            if (bids[accountsList[i]] > 0) {
                uint refundValue = bids[accountsList[i]];
                bids[accountsList[i]] = 0;
                payable(accountsList[i]).transfer(refundValue);
            }
        }
    }

    function refund() virtual public {
        require(msg.sender != winner, "winner cannot refund");
        require(
            bids[msg.sender] > 0,
            "refunds only allowed if you sent something"
        );

        uint refundValue = bids[msg.sender];
        bids[msg.sender] = 0; // reentrancy fix, setting to zero first
        payable(msg.sender).transfer(refundValue);

        emit Refund(msg.sender, refundValue, block.timestamp);
    }
}
