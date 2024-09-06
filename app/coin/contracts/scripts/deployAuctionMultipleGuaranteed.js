async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const AuctionMultipleGuaranteed = await ethers.getContractFactory("AuctionMultipleGuaranteed");
  const auctionMultipleGuaranteed = await AuctionMultipleGuaranteed.deploy(
    ethers.utils.parseEther("1"),   // _price
    "Auction Multiple Guaranteed", // _description
    Math.floor(Date.now() / 1000) + 86400, // _timestampEnd (24 hours from now)
    "0x258e98b00622Ecc19bD305490daFb5258559faAb",     // _beneficiary (replace with a valid address)
    10, // _howMany
    2, // _howManyGuaranteed
    ethers.utils.parseEther("0.5")  // _priceGuaranteed
  );

  console.log("AuctionMultipleGuaranteed contract deployed to:", auctionMultipleGuaranteed.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
