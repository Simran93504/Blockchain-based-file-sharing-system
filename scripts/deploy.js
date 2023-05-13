const { ethers } = require("hardhat");

async function main() {
  const Upload = await ethers.getContractFactory("Upload");
  const upload = await Upload.deploy();

  const networkName = "sepolia";
  const provider = new ethers.providers.JsonRpcProvider(
    "https://eth-sepolia.g.alchemy.com/v2/demo"
  );
  const signer = new ethers.Wallet(
    "YOUR PRIVATE KEY OF METAMASK",
    provider
  ); // Replace with your own private key
  const connectedUpload = upload.connect(signer);
  console.log(await provider.send("eth_syncing", []));
  const network = await provider.getNetwork();
  const latestBlockNumber = await provider.getBlockNumber();
  const latestBlock = await provider.getBlock(latestBlockNumber);

  console.log(`Latest block number: ${latestBlockNumber}`);
  console.log(`Latest block timestamp: ${latestBlock.timestamp}`);

  await connectedUpload.deployed();
  console.log("Library deployed to:", connectedUpload.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});