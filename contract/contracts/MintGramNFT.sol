// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MintGramNFT is ERC721, ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;
    mapping(string => uint8) existingURIs;

    constructor(
        address initialOwner
    ) ERC721("MintGramNFT", "MGNFT") Ownable(initialOwner) {}

    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    function tokenURI(
        uint256 tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function mintNFT(
        address recipient,
        string memory metadataURI
    ) public payable returns (uint256) {
        require(existingURIs[metadataURI] != 1, "NFT already minted!");

        uint256 tokenId = _nextTokenId++;
        existingURIs[metadataURI] = 1;

        _mint(recipient, tokenId);
        _setTokenURI(tokenId, metadataURI);

        return tokenId;
    }

    function count() public view returns (uint256) {
        return _nextTokenId;
    }

    function getAllNFTs()
        public
        view
        returns (uint256[] memory, string[] memory)
    {
        uint256 tokenCount = _nextTokenId;
        uint256[] memory tokenIds = new uint256[](tokenCount);
        string[] memory uris = new string[](tokenCount);

        for (uint256 i = 0; i < tokenCount; i++) {
            tokenIds[i] = i;
            uris[i] = tokenURI(i);
        }

        return (tokenIds, uris);
    }
}
