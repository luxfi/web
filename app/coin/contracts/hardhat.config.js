require("@nomicfoundation/hardhat-toolbox");
require("hardhat-contract-sizer");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const INFRUA_API_KEY = "c0fc965275044e4db9aab4b55ef3aef8"
const PRIVATE_KEY = "baeca670320c0bd2033e2c33b48d44407113cb501fcbe2858fb386146bcdea6d";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    }
  },
  mocha: {
    timeout: 8000000,
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/" + INFRUA_API_KEY,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
  },
  gasReporter: {
    enabled: true,
    currency: 'USD'
  },
  paths: {
    sources: "./contracts",
    artifacts: "./src/artifacts"
  },
  etherscan: {
    apiKey: "G1FSX921TK9VTUP6P7SWF83FJQXZF4GMX4",
  }
};
