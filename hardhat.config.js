require('@nomiclabs/hardhat-waffle');
require("dotenv").config({ path: ".env" });

module.exports = {
  solidity: '0.8.1',
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_ALCHEMY_API_KEY_URL,
      accounts: [process.env.RINKEBY_PRIVATE_KEY],
    },
    goerli: {
      url: process.env.GOERLI_ALCHEMY_API_KEY_URL,
      accounts: [process.env.GOERLI_PRIVATE_KEY],
    },
    mumbai: {
      url: process.env.MUMBAI_ALCHEMY_API_KEY_URL,
      accounts: [process.env.MUMBAI_PRIVATE_KEY],
    },
    matic: {
      url: process.env.MATIC_ALCHEMY_API_KEY_URL,
      accounts: [process.env.MATIC_PRIVATE_KEY],
    },
  },
};
