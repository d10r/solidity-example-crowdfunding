pragma solidity ^0.4.6;

contract greeter {
    address owner;
    string greeting;
    function kill() { if (msg.sender == owner) selfdestruct(owner); }
    function greeter(string _greeting) public {
        owner = msg.sender;
        greeting = _greeting;
    }
    function greet() constant returns (string) {
        return greeting;
    }
}
