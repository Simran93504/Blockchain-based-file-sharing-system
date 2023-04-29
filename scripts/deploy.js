const hre = require("hardhat");

async function main() {
  const Upload = await hre.ethers.getContractFactory("Upload");
  const upload = await Upload.deploy();
  const provider = ethers.provider;
  await provider.send("eth_syncing", []);

  const network = await provider.getNetwork();
  // console.log(provider);
  console.log(`Latest block number: ${network.blockNumber}`);
  console.log(`Latest block timestamp: ${network.timestamp}`);
  await upload.deployed();

  console.log("Library deployed to:", upload.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
