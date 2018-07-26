var WorglCoin = artifacts.require("./WorglCoin.sol");
var Verifier = artifacts.require("./Verifier.sol");

tokenValue = 1000;
tokenBalance = 1000;
module.exports = function(deployer) {
  deployer.deploy(Verifier);
  deployer.link(Verifier, WorglCoin);
  deployer.deploy(WorglCoin, tokenValue, tokenBalance);
};
