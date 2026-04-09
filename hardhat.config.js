require("@nomiclabs/hardhat-waffle");
require("@nomicfoundation/hardhat-verify");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

const privateKeys = process.env.PRIVATE_KEYS || "";

module.exports = {
  solidity: "0.8.9",
  networks: {
    localhost: {},
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: privateKeys.split(","),
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  sourcify: {
    enabled: false,
  },
};
