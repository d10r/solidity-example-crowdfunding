# solidity-example-crowdfunding

A small example Ethereum Smart Contract with Solidity

## Setup

* install solc
* run `docker run -d -p 8545:8545 harshjv/testrpc`
* open index.html

## Contract

**Winner Takes all Crowdfunding**

* Create contract with minimum entry fee, deadline for project proposals and deadline for campaign
* People can enter their projects with a name, url and the entry fee until the project proposal deadline 
* After project proposal deadline, other people can "vote" with ether for the projects they want to support until the campaign deadline
* When the proposal deadline is reached, the campaign can be finished and the Project with the most funds overall receives all the funds entered in the campaign

