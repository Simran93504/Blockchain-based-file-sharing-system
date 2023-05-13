// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
pragma abicoder v2;

contract Upload {
  
  struct Access{
     address user; 
     bool access; //true or false
  }
    struct FileInfo {
     string url;
     string fileType;
     string fileName;
  }
  
  mapping(address => FileInfo[]) files;
  mapping(address=>mapping(address=>bool)) ownership;
  mapping(address=>Access[]) accessList;
  mapping(address=>mapping(address=>bool)) previousData;

   function add(address user, string memory url, string memory fileType , string memory fileName) external {
      files[user].push(FileInfo(url, fileType,fileName));
  }

  function allow(address user) external {//def
      ownership[msg.sender][user]=true; 
      if(previousData[msg.sender][user]){
         for(uint i=0;i<accessList[msg.sender].length;i++){
             if(accessList[msg.sender][i].user==user){
                  accessList[msg.sender][i].access=true; 
             }
         }
      }else{
          accessList[msg.sender].push(Access(user,true));  
          previousData[msg.sender][user]=true;  
      }
    
  }
  function disallow(address user) public{
      ownership[msg.sender][user]=false;
      for(uint i=0;i<accessList[msg.sender].length;i++){
          if(accessList[msg.sender][i].user==user){ 
              accessList[msg.sender][i].access=false;  
          }
      }
  }

  function display(address user) external view returns (FileInfo[] memory) {
      require(user == msg.sender || ownership[user][msg.sender], "You don't have access");
      return files[user];
  }


  function shareAccess() public view returns(Access[] memory){
      return accessList[msg.sender];
  }
}