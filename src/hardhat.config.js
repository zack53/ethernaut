require("@nomiclabs/hardhat-truffle5")
require("@nomiclabs/hardhat-ethers")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()

module.exports = {
  solidity: {
    version: "0.8.10",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000
      }
    }
  },
  networks: {
    hardhat: {
      forking: {
        url: process.env.RINKEBY_URL,
      },
      accounts: [{ privateKey: process.env.PRIVATE_KEY_1, balance: '1000000000000000000000' }, { privateKey: process.env.PRIVATE_KEY_2, balance: '1000000000000000000000' }, { privateKey: process.env.PRIVATE_KEY_3, balance: '1000000000000000000000' }]
    },
    rinkeby: {
      url: process.env.RINKEBY_URL,
      accounts: [process.env.PRIVATE_KEY_1, process.env.PRIVATE_KEY_2, process.env.PRIVATE_KEY_3]
    },
    mumbai: {
      url: process.env.MUMBAI_URL,
      accounts: [process.env.PRIVATE_KEY_1, process.env.PRIVATE_KEY_2, process.env.PRIVATE_KEY_3]
    },
    polygon_mainnet: {
      url: process.env.POLYGON_MAINNET_URL,
      accounts: [process.env.PRIVATE_KEY_1, process.env.PRIVATE_KEY_2, process.env.PRIVATE_KEY_3]
    },
    eth_mainnet: {
      url: process.env.ETH_MAINNET_URL,
      accounts: [process.env.PRIVATE_KEY_1, process.env.PRIVATE_KEY_2, process.env.PRIVATE_KEY_3]
    }
  },
  etherscan: {
    apiKey: process.env.ETH_SCAN_API_KEY
  },
  EVMAddresses: {
    rinkeby: {
      contract_telephone_address: "0x8a9d3e6a6EF170586a69350e4BA5e17Db621367E",
      contract_telephone_abi: [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"changeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
    },
    hardhat: {
      contract_telephone_address: "0x8a9d3e6a6EF170586a69350e4BA5e17Db621367E",
      contract_telephone_abi: [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"changeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
    },
    localhost: {
      contract_telephone_address: "0x8a9d3e6a6EF170586a69350e4BA5e17Db621367E",
      contract_telephone_abi: [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"changeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
    }
  }
}