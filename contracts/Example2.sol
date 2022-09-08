// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.1;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

contract Example2 is ERC721URIStorage {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  constructor() ERC721 ("Example2", "EXAMPLE") {
    console.log("Mint NFT contract");
  }

  function mintNFT() public {
    uint256 newItemId = _tokenIds.current();

    _safeMint(msg.sender, newItemId);

    // json keeper link
    _setTokenURI(newItemId, "https://api.jsonbin.it/bins/wgAHBjzW");

    _tokenIds.increment();
    console.log("An NFT w/ ID %s has been minted to %s", newItemId, msg.sender);
  }
}
