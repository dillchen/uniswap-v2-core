const UniswapV2Factory = artifacts.require("UniswapV2Factory");

const FEE_TO_SETTER_ADDRESS = "0x0000000000000000000000000000000000000000"

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(UniswapV2Factory, FEE_TO_SETTER_ADDRESS, { from: accounts[0], gas: 50000000 });
};
