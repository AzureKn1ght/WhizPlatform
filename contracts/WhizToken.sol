// SPDX-License-Identifier: MPL-2.0-no-copyleft-exception
pragma solidity ^0.8.7;
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol"; 

contract WhizToken is ERC20 {
    
    constructor () ERC20("Whiz Token", "WHIZ") 
    { 
        _mint(msg.sender, 1000000 * (10 ** uint256(decimals())));
    } 
        
} 