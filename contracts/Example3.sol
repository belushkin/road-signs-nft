// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.1;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

// We need to import the helper functions from the contract that we copy/pasted.
import { Base64 } from "./libraries/Base64.sol";

contract Example3 is ERC721URIStorage, Ownable {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  string baseSvg = "<svg xmlns='http://www.w3.org/2000/svg'><g><rect x='0' y='0' width='100' height='100' fill='red'></rect><text x='0' y='50' font-family='Verdana' font-size='35' fill='blue'>";

  constructor() ERC721 ("Example3", "EXAMPLE") {
    console.log("Mint NFT contract");
  }

  function mintNFT(string memory txt) public onlyOwner {
    uint256 newItemId = _tokenIds.current();

    string memory finalSvg = string(abi.encodePacked(
      baseSvg, 
      txt, 
      "</text></g></svg>"
    ));

    // Get all the JSON metadata in place and base64 encode it.
    string memory json = Base64.encode(bytes(string(abi.encodePacked(
      '{"name": "',
        txt,
        '", "attributes":[{"trait_type": "Shape", "value": "Elipse"}, {"trait_type": "Status", "value": "enabled"}]',
        ', "description": "Yellow elipse", "image": "data:image/svg+xml;base64,',
        Base64.encode(bytes(finalSvg)),
      '"}'
    ))));

    string memory finalTokenUri = string(abi.encodePacked("data:application/json;base64,", json));

    console.log("\n--------------------");
    console.log(finalTokenUri);
    console.log("--------------------\n");

    _safeMint(msg.sender, newItemId);

    // json keeper link
    _setTokenURI(newItemId, finalTokenUri);

    _tokenIds.increment();
    console.log("An NFT w/ ID %s has been minted to %s", newItemId, msg.sender);
  }
}
