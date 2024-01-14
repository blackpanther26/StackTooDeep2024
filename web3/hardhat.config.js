require("@matterlabs/hardhat-zksync-solc");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  zksolc: {
    version: "1.3.9",
    compilerSource: "binary",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {
    zksync_testnet: {
      url: "https://zksync2-testnet.zksync.dev",
      ethNetwork: "goerli",
      chainId: 280,
      zksync: true,
    },
    zksync_mainnet: {
      url: "https://zksync2-mainnet.zksync.io/",
      ethNetwork: "mainnet",
      chainId: 324,
      zksync: true,
    },
    sepolia:{
      url: "https://eth-sepolia.g.alchemy.com/v2/QbOXFyMKng0XbcBq9_FQI--KLr0Ui3xy",
      ethNetwork: "sepolia",
      chainId: 11155111,
      zksync: false,
      accounts:['c1b78573498b63dd724c6fbd2e4875d1fc98095d39edf50b17d3eff1d95f28bb']
    }
  },
  paths: {
    artifacts: "./artifacts-zk",
    cache: "./cache-zk",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

//0xefC69d293B7f5CCc00fa7235de9972e8c8Fc1377
//0xefC69d293B7f5CCc00fa7235de9972e8c8Fc1377