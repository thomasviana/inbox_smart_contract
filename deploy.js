// deploy code will go here

const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'above until eight camp flip worry clap mule burst grace sand sheriff',
    'https://rinkeby.infura.io/v3/94dd1f4b955a494b996257784ac11121'
);

const web3 = new Web3(provider);