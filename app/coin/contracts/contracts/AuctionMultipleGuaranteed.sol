// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "./AuctionMultiple.sol";

// For instance: offering limited "Early Bird" tickets that are guaranteed
contract AuctionMultipleGuaranteed is AuctionMultiple {
    uint public howManyGuaranteed;
    uint public priceGuaranteed;
    address[] public guaranteedContributors;
    mapping(address => uint) public guaranteedContributions;

    event GuaranteedBid(address addr, uint value);

    constructor(
        uint _price,
        string memory _description,
        uint _timestampEnd,
        address _beneficiary,
        uint _howMany,
        uint _howManyGuaranteed,
        uint _priceGuaranteed
    )
        AuctionMultiple(
            _price,
            _description,
            _timestampEnd,
            _beneficiary,
            _howMany
        )
    {
        require(
            _howMany >= _howManyGuaranteed,
            "The number of guaranteed items should be less or equal than total items. If equal = fixed price sell, kind of OK with me"
        );
        require(
            _priceGuaranteed > 0,
            "Guaranteed price must be greater than zero"
        );

        howManyGuaranteed = _howManyGuaranteed;
        priceGuaranteed = _priceGuaranteed;
    }

    receive() external payable override {
        if (msg.value == 0) {
            refund();
        } else {
            require(
                block.timestamp < timestampEnd,
                "cannot bid after the auction ends"
            );
            require(
                guaranteedContributions[msg.sender] == 0,
                "already a guaranteed contributor, cannot more than once"
            );

            if (msg.value >= priceGuaranteed && howManyGuaranteed > 0) {
                guaranteedContributors.push(msg.sender);
                guaranteedContributions[msg.sender] = msg.value;
                howManyGuaranteed--;
                howMany--;
                emit GuaranteedBid(msg.sender, msg.value);
            } else {
                bid();
            }
        }
    }

    function finalize() public override ended onlyOwner {
        require(
            !finalized,
            "auction already finalized, can withdraw only once"
        );
        finalized = true;

        uint sumContributions = 0;
        uint counter = 0;
        Bid memory currentBid = multipleBids[HEAD];
        while (counter++ < howMany && currentBid.prev != TAIL) {
            currentBid = multipleBids[currentBid.prev];
            sumContributions += currentBid.value;
        }

        for (uint i = 0; i < guaranteedContributors.length; i++) {
            sumContributions += guaranteedContributions[
                guaranteedContributors[i]
            ];
        }

        (bool success, ) = beneficiary.call{value: sumContributions}("");
        require(success, "Transfer failed.");
    }
}
