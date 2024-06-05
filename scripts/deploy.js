async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const Epicentre-Of-Joy = await ethers.getContractFactory("Epicentre-Of-Joy");
  const myNFT = await Epicentre-Of-Joy.deploy();
  console.log("Contract deployed to address:", myNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
