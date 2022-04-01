var TodoList = artifacts.require("./Activity.sol");

module.exports = function(deployer) {
  deployer.deploy(Activity);
};
