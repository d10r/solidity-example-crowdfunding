var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
web3.eth.defaultAccount = web3.eth.coinbase;

var compiled = web3.eth.compile.solidity(contractSource);

var code = compiled.code;
var abi = compiled.info.abiDefinition;

var greeting = "HoHo Universe!";

var greeterContract = web3.eth.contract(abi);

console.log(web3.eth.estimateGas({data: code}));

var greeter = greeterContract.new(greeting, {
    data: code,
    gas: 300000,
}, function(err, contract) {
    if (err) {
        console.error('there was an error: ' + err);
        return;
    }

    if (!contract.address) {
        console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
    } else {
        console.log("Contract mined! Address: " + contract.address);
        console.log(contract);
    }
});

function greet() {
    console.log(greeter.greet());
}

function kill() {
    console.log(greeter.kill());
}

function isKilled() {
    console.log(web3.eth.getCode(greeter.address));
}
