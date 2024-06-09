// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import { PlaceStruct } from "./helpers/Struct.sol";

import "@openzeppelin/contracts/utils/Counters.sol";
// import "./MoneyRouter.sol";

contract BoardGame {
    using Counters for Counters.Counter;
    Counters.Counter public gameId;
    mapping(uint256 => string[10][10]) public boards;
    mapping(uint256 => mapping(address => uint8[2])) public userLocation;
    mapping(uint256 => uint256) public startTime;
    mapping(uint256 => mapping(address => string)) public userColor;
    mapping(uint256 => mapping(string => address[])) public listOfColorUser;

    uint256 PLAYTIME = 420; // 420s Each game has 7 minutes
    string RED="#ef4444";
    string YELLOW="#fde047";
    string BLUE="#3b82f6";

    event Placed(uint256 gameId, address user, uint256 x, uint256 y, string color);

    // constructor(address owner) MoneyRouter(owner){}

    function place(uint256 _gameId, PlaceStruct calldata input) external {
        require(stringCompare(input.color, RED) || stringCompare(input.color, YELLOW) || stringCompare(input.color, BLUE), "This color is not allowed");
        require(canPlace(_gameId), "User already place");
        require(startTime[_gameId] + PLAYTIME > block.number, "The game is not ready to play");
        boards[_gameId][input.x][input.y] = input.color;
        userLocation[_gameId][msg.sender][0]= input.x;
        userLocation[_gameId][msg.sender][1]= input.y;
        userColor[_gameId][msg.sender] = input.color;
        listOfColorUser[_gameId][input.color].push(msg.sender);
        emit Placed(_gameId, msg.sender, input.x, input.y, input.color);
    }

    function changeColor(uint256 _gameId, string memory _color) external {
        require(stringCompare(_color, RED) || stringCompare(_color, YELLOW) || stringCompare(_color, BLUE), "This color is not allowed");
        require(startTime[_gameId] + PLAYTIME > block.number, "The game is not ready to play");
        require(!canPlace(_gameId), "User has no color yet");
        require(!stringCompare(userColor[_gameId][msg.sender], _color), "User cannot choice same color with current color");
        boards[_gameId][userLocation[_gameId][msg.sender][0]][userLocation[_gameId][msg.sender][1]] = _color;
        listOfColorUser[_gameId][_color].push(msg.sender);
        removeAddress(_gameId, _color, msg.sender);
        emit Placed(_gameId, msg.sender, userLocation[_gameId][msg.sender][0], userLocation[_gameId][msg.sender][1], _color);
    }

    function getWinningColor(uint256 _gameId) public view returns (string memory) {
        uint256 redNumber= listOfColorUser[_gameId][RED].length;
        uint256 blueNumber= listOfColorUser[_gameId][BLUE].length;
        uint256 yellowNumber= listOfColorUser[_gameId][YELLOW].length;

        if(redNumber < yellowNumber) { // Red < Yellow
            if(redNumber < blueNumber) { // Red < Blue
                return RED;
            } else if(redNumber > blueNumber){ // Red > Blue
                return BLUE;
            } else {
                return "no_one";
            }
        } else if(redNumber > yellowNumber) { // Red > Yellow
            if(yellowNumber < blueNumber) { // Yellow < Blue
                return YELLOW;
            } else if(yellowNumber > blueNumber){ // Yellow > Blue
                return BLUE;
            } else {
                return "no_one";
            }
        } else { // Red == Yellow
            if(redNumber <= blueNumber) { // Red < BLUE or Red == BLUE
                return "no_one";
            } else {
                return BLUE;
            }
        }
    }

    function isUserWin(uint256 _gameId) external view returns(bool) {
        if(stringCompare(userColor[_gameId][msg.sender], getWinningColor(_gameId))){
            return true;
        } else {
            return false;
        }
    }

    function canPlace(uint256 _gameId) public view returns(bool) {
        return stringCompare(userColor[_gameId][msg.sender], "");
    }

    function stringCompare(string memory _string1, string memory _string2) public pure returns(bool) {
        return keccak256(abi.encodePacked(_string1)) == keccak256(abi.encodePacked(_string2));
    }

    function newGame() external {
        startTime[gameId.current()] = block.number;
        gameId.increment();
    }

    function getBoard(uint256 _gameId) external view returns (string[10][10] memory) {
        return boards[_gameId];
    }

    function removeAddress(uint256 _gameId, string memory _color, address _addressToRemove) public {
        uint index = findAddress(_gameId, _color, _addressToRemove);
        require(index < listOfColorUser[_gameId][_color].length, "Address not found");
        // replace the last item
        listOfColorUser[_gameId][_color][index] = listOfColorUser[_gameId][_color][listOfColorUser[_gameId][_color].length - 1];
        // delete last element
        listOfColorUser[_gameId][_color].pop();
    }

    function findAddress(uint256 _gameId, string memory _color, address _address) internal view returns (uint) {
        address[] memory addresses = listOfColorUser[_gameId][_color];
        for (uint i = 0; i < addresses.length; i++) {
            if (addresses[i] == _address) {
                return i;
            }
        }
        // if not found return array length
        return addresses.length;
    }
}
