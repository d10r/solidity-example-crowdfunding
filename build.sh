#!/bin/bash -e

CONTRACT=`tr -d "\n\r" < contract.sol`
echo "contractSource = '${CONTRACT}';" > contract.js
