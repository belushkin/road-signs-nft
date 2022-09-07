// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.1;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

// We need to import the helper functions from the contract that we copy/pasted.
import { Base64 } from "./libraries/Base64.sol";

contract RoadSignsNFT is ERC721URIStorage, Ownable {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  string baseSvg = "<svg width='800' height='800' fill='none' xmlns='http://www.w3.org/2000/svg'><style>.base { font-family: Lato,sans-serif; margin:100px;}</style><g><rect width='100%' height='100%' fill='none'/> <rect x='";

  constructor() ERC721 ("AllRoads2Ukraine", "RFT") {
    console.log("Mint NFT contract");
  }

  function mintNFT(string memory city, uint x, uint width) public onlyOwner {
    uint256 newItemId = _tokenIds.current();

    string memory finalSvg = string(abi.encodePacked(
      baseSvg, 
      Strings.toString(x), 
      "' y='350' width='",
      Strings.toString(width), 
      "' height='102' rx='19' fill='white'/><rect x='",
      Strings.toString(x), 
      "' y='350' width='",
      Strings.toString(width),
      "' height='102' rx='19' stroke='black' stroke-width='6'/><text x='400' y='420' fill='black' font-size='60' font-weight='bold' class='base' text-anchor='middle'>",
      city, 
      "</text></g></svg>"
    ));

    // Get all the JSON metadata in place and base64 encode it.
    // https://i.imgur.com/f0Wg3M3.jpeg
    string memory json = Base64.encode(bytes(string(abi.encodePacked(
      '{"name": "',
        city,
        '", "attributes":[{"trait_type": "Country", "value": "UKRAINE"}, {"trait_type": "Status", "value": "OCCUPIED"}]',
        ', "description": "Road sign of russian occupied city/village in Ukraine", "image": "data:image/svg+xml;base64,',
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
