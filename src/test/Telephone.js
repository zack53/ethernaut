//https://trufflesuite.com/docs/truffle/getting-started/interacting-with-your-contracts.html
//The link above is a good resource for everything related to truffle contracts.

//Creates a truffe contract from compiled artifacts.
const { network, config, web3 } = require('hardhat')
const Telephone = artifacts.require("TelephoneAttack")
const { contract_telephone_address, contract_telephone_abi } = config.EVMAddresses[network.name]

const telephoneTargetContract = new web3.eth.Contract(contract_telephone_abi,contract_telephone_address)

// Vanilla Mocha test. Increased compatibility with tools that integrate Mocha.
describe("Telephone contract", function () {
  let accounts
  let telephone
  before(async function () {
    accounts = await web3.eth.getAccounts()
    //Checks to see if the first account has ETH
    let balance = await web3.eth.getBalance(accounts[0])
    assert.notEqual(balance, 0)
    //deploy contract
    telephone = await Telephone.new(contract_telephone_address)
  })

  it("Should deploy with the correct address", async function () {
    assert.equal(await telephone.targetContract(), contract_telephone_address)
  })

  it("Should set new owner", async function () {
    await telephone.changeTargetOwner(accounts[0])
    assert.equal(await telephoneTargetContract.methods.owner().call(),accounts[0])
  })

  
})