// utils/fetchNFTs.js
import { ethers } from 'ethers';

export async function fetchMyNFTs(provider) {
	const { contract, provider } = useWeb3();

	const signer = provider.getSigner();
	const tokenCount = await contract.count();
	const nfts = [];

	for (let i = 0; i < tokenCount; i++) {
		const tokenURI = await contract.tokenURI(i);
		const owner = await contract.ownerOf(i);
		nfts.push({ tokenId: i, tokenURI, owner });
	}

	const signerAddress = await signer.getAddress();
	return nfts.filter((nft) => nft.owner === signerAddress);
}

export async function fetchAllNFTs() {
	const { contract } = useWeb3();

	const [tokenIds, uris] = await contract.getAllNFTs();
	return tokenIds.map((tokenId, index) => ({ tokenId, tokenURI: uris[index] }));
}
