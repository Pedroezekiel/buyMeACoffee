require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const GOERLI_URL = process.env.GOERLI_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks:{
    goerli:{
      url:GOERLI_URL,
      accounts:[PRIVATE_KEY]
    }

  }
};
//Buy Me A Coffee is deployed to 0xf2293EB15DfcEAB910e225981578675351b5172C
