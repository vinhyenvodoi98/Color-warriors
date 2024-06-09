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
    mapping(uint256 => mapping(string => uint256)) public colorCount;

    uint256 PLAYTIME = 420; // 420s Each game has 7 minutes
    string RED="#ef4444";
    string YELLOW="#fde047";
    string BLUE="#3b82f6";

    event Placed(uint256 gameId, address user, uint256 x, uint256 y, string color);

    // constructor(address owner) MoneyRouter(owner){}

    function place(uint256 _gameId, PlaceStruct calldata input) external {
        require(stringCompare(input.color, RED) || stringCompare(input.color, YELLOW) || stringCompare(input.color, BLUE), "This color is not allowed");
        require(startTime[_gameId] + PLAYTIME > block.number, "The game is not ready to play");
        boards[_gameId][input.x][input.y] = input.color;
        userLocation[_gameId][msg.sender][0]= input.x;
        userLocation[_gameId][msg.sender][1]= input.y;
        userColor[_gameId][msg.sender] = input.color;
        colorCount[_gameId][input.color] += 1;
        emit Placed(_gameId, msg.sender, input.x, input.y, input.color);
    }

    function changeColor(uint256 _gameId, string memory _color) external {
        require(stringCompare(_color, RED) || stringCompare(_color, YELLOW) || stringCompare(_color, BLUE), "This color is not allowed");
        require(startTime[_gameId] + PLAYTIME > block.number, "The game is not ready to play");
        require(!stringCompare(userColor[_gameId][msg.sender], ""), "User has no color yet");
        boards[_gameId][userLocation[_gameId][msg.sender][0]][userLocation[_gameId][msg.sender][1]] = _color;
        colorCount[_gameId][_color] += 1;
        colorCount[_gameId][userColor[_gameId][msg.sender]] -= 1;
        emit Placed(_gameId, msg.sender, userLocation[_gameId][msg.sender][0], userLocation[_gameId][msg.sender][1], _color);
    }

    function getWinningColor(uint256 _gameId) public view returns (string memory) {
        if(colorCount[_gameId][RED] < colorCount[_gameId][YELLOW]) { // Red < Yellow
            if(colorCount[_gameId][RED] < colorCount[_gameId][BLUE]) { // Red < Blue
                return RED;
            } else if(colorCount[_gameId][RED] > colorCount[_gameId][BLUE]){ // Red > Blue
                return BLUE;
            } else {
                return "no_one";
            }
        } else if(colorCount[_gameId][RED] > colorCount[_gameId][YELLOW]) { // Red > Yellow
            if(colorCount[_gameId][YELLOW] < colorCount[_gameId][BLUE]) { // Yellow < Blue
                return YELLOW;
            } else if(colorCount[_gameId][YELLOW] > colorCount[_gameId][BLUE]){ // Yellow > Blue
                return BLUE;
            } else {
                return "no_one";
            }
        } else { // Red == Yellow
            if(colorCount[_gameId][RED] <= colorCount[_gameId][BLUE]) { // Red < BLUE or Red == BLUE
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
}
