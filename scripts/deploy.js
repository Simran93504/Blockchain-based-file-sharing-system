const hre = require("hardhat");

async function main() {
  const Upload = await hre.ethers.getContractFactory("Upload");
  const upload = await Upload.deploy();
<<<<<<< HEAD
  const provider = ethers.provider;
  await provider.send("eth_syncing", []);

 
  
=======

>>>>>>> d734102c6856ac2a91abd0baa7ec6561b6e70d52
  await upload.deployed();

  console.log("Library deployed to:", upload.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
<<<<<<< HEAD
});
=======
});
>>>>>>> d734102c6856ac2a91abd0baa7ec6561b6e70d52
