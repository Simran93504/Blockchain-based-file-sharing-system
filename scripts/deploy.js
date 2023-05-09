const { ethers } = require("hardhat");

async function main() {
  const Upload = await ethers.getContractFactory("Upload");
  const upload = await Upload.deploy();

  const provider = ethers.provider;
  console.log(await provider.send("eth_syncing", []));
  const network = await provider.getNetwork();
  const latestBlockNumber = await provider.getBlockNumber();
  const latestBlock = await provider.getBlock(latestBlockNumber);

  console.log(`Latest block number: ${latestBlockNumber}`);
  console.log(`Latest block timestamp: ${latestBlock.timestamp}`);

  await upload.deployed();
  console.log("Library deployed to:", upload.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
