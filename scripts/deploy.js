const hre = require('hardhat')
const { getContractFactory } = require('hardhat/types')

async function main() {
  const BuyMeACoffee = await hre.ethers.getContractFactory("BuyMeACoffee");

  const deployBuyMeACoffee = await BuyMeACoffee.deploy();

  await deployBuyMeACoffee.deployed();

  console.log(`Buy Me A Coffee is deployed to ${deployBuyMeACoffee.address}`);

  //Buy Me A Coffee is deployed it 0x5FbDB2315678afecb367f032d93F642f64180aa3
}

main()
.then(() =>process.exit(0)
).catch((err) => {
    console.error(err);
    process.exit(1)
});