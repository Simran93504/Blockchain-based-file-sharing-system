require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/demo",
      chainId: 11155111,
      gasPrice: 100000,
      accounts: [
        "5227c1ca0e347ba332c5fc12e2ac6621a2df7591ff77cbd2a967d32bc0034028"
      ]
    },
    hardhat: {
      chainId: 1337,
    },
  },
  paths: {
    artifacts: "./peer/src/artifacts",
  },
  resolve: {
    fallback: {
      path: require.resolve("path-browserify"),
    },
  },
};