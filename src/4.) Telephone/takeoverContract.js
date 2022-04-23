require('dotenv').config({path:'../.env'})
const HDWalletProvider = require("@truffle/hdwallet-provider")
const Web3 = require('web3')

let web3 = new Web3(new HDWalletProvider([process.env.PRIVATE_KEY_1, process.env.PRIVATE_KEY_2, process.env.PRIVATE_KEY_3],process.env.RINKEBY_URL))


const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"changeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
const address = '0xb713c9dC69E1192C2e904e27980Fb4d833d6Aa45'

const contract = new web3.eth.Contract(abi, address)

let main = async () => {
    let accounts = await web3.eth.getAccounts()
    console.log(accounts[0])
    let contractOwner = await contract.methods.owner().call()
    console.log(contractOwner)
    await contract.methods.changeOwner('0x1320237FF602A0fcDFaCE1A42530C7E9Bf84ceF1').send({from:accounts[2]})
    let newOwner = await contract.methods.owner().call()
    console.log(newOwner)
    process.exit()
}
main()
