const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory('Example3');
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();

  console.log("Contract deployed to:", nftContract.address);

  // Wait for it to be mined.
  let txn = await nftContract.mintNFT("Non-fiction")
  await txn.wait()

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
