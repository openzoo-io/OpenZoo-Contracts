require('dotenv').config();
require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-truffle5');
require("@nomiclabs/hardhat-etherscan");
require('hardhat-gas-reporter');
require('solidity-coverage');
require('@nomiclabs/hardhat-solhint');
require('hardhat-contract-sizer');
require('@openzeppelin/hardhat-upgrades');

const PRIVATE_KEY = process.env.PK;

module.exports = {
  solidity: {
    version: '0.6.12',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: 'byzantium',
    },
  },
  gasReporter: {
    currency: 'USD',
    enabled: false,
    gasPrice: 50,
  },
  networks: {
    // mainnet: {
    //   url: `https://rpcapi.fantom.network`,
    //   chainId: 250,
    //   accounts: [`0x${PRIVATE_KEY}`]
    // },
    testnet: {
      url: `https://gwan-ssl.wandevs.org:46891`,
      chainId: 999,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    // ropsten: {
    //   url: `https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
    //   chainId: 3,
    //   accounts: [`0x${PRIVATE_KEY}`],
    // },
    // coverage: {
    //   url: 'http://localhost:8555',
    // },
    
    localhost: {
      url: `http://127.0.0.1:8545`
    },
  },
  etherscan: {
    apiKey: '46DD6NK19R2AZQQIJIY1FXR85HKM2XSNBE'
  }
};
