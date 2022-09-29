// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// Import this file to use console.log
import "hardhat/console.sol";

contract BuyMeACoffee {
    event Newemo(
    address indexed from,
    uint256 time,
    string name,
    string message
    );
   struct Memo{
    address from;
    uint256 time;
    string name;
    string message;
   }
   Memo[] memos;

   address payable owner;

   constructor(){
    owner = payable(msg.sender);
   }

   function getMemos() public view returns(Memo[] memory){
    return memos;
   }

   function buyCoffee(string memory _name, string memory _message) public payable{
    memos.push(Memo(
        msg.sender,
        block.timestamp,
        _name,
        _message

    ));
    emit Newemo(msg.sender, block.timestamp, _name, _message);

   }
   function withdrawTips() public{
    require(owner.send(address(this).balance));
   }


}
