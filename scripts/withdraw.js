const hre = require("hardhat")
const abi = require("../artifacts/contracts/BuyMeACoffee.json")

async function getBalance(provider, address){
    const balanceBigInt = await provider.getBalance(address)
    return hre.ethers.utils.formatEther(balanceBigInt)
}

async function main(){
    const contractAddress = "0xf2293EB15DfcEAB910e225981578675351b5172C";
    const contractAbi = abi.abi;

    const provider = new hre.ethers.providers.AlchemyProvider(
      "goerli",
      process.env.GOERLI_API_KEY
    );

    const signer = new hre.ethers.Wallet(process.env.PRIVATE_KEY, provider)
    

}