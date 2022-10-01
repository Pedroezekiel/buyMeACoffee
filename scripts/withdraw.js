const hre = require("hardhat")
const abi = require("../artifacts/contracts/BuyMeACoffee.sol/BuyMeACoffee.json")

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
    const buyMeACoffee = new hre.ethers.Contract(contractAddress, contractAbi, signer)
    
    console.log("current balance of owner: ", await getBalance(provider, signer.address),"ETH");
    const contractBalance = await getBalance(provider, buyMeACoffee.address)
    console.log("current balance of contract: ", await getBalance(provider, buyMeACoffee.address), "ETH");

    if (contractBalance !=="0.0") {
      console.log("withdrawing funds..");
      const withdrawTxn = await buyMeACoffee.withdrawTips();
      await withdrawTxn.wait()
    } else{
      console.log("No funds to withdraw");
    }
    console.log("current balance of owner: ", await getBalance(provider, signer.address), "ETH");

}

main()
.then(()=> process.exit(0))
.catch((error)=>{
  console.error(error),
  process.exit(1)
});