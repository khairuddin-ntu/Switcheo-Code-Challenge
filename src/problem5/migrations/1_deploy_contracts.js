const ConvertLib = artifacts.require("ConvertLib");
const EVM = artifacts.require("EVM");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(EVM);
};
