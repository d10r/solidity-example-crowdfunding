var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
web3.eth.defaultAccount = web3.eth.coinbase;

var compiled = web3.eth.compile.solidity(contractSource);

var code = compiled.code;
var abi = compiled.info.abiDefinition;

var greeting = "HoHo Universe!";

var greeterContract = web3.eth.contract(abi);

var greeter = greeterContract.new(1, 20, 100, {
    data: code,
    gas: 900000,
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
        // var events = contract.allEvents(function(error, log) {
        //     if (!error)
        //         console.log(log);
        // });
    }
});

function submit() {
    greeter.submitProject.sendTransaction("yay", "whatever", {
        from: web3.eth.accounts[Math.random() * 3 | 1],
        value: 100,
        gas: 600000,
    });
}

function support() {
    greeter.supportProject.sendTransaction(web3.eth.accounts[Math.random() * 3 | 1], {
        value: 100,
        gas: 150000,
    });
}

function showprojects() {
    console.log(greeter.projects());
}

function finish() {
    console.log(greeter.finish());
    console.log(web3.eth.getCode(greeter.address));
}
