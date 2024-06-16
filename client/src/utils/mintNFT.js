import { useWeb3 } from '@/context/Web3Provider';
import { ethers } from 'ethers';
import PicNftMinter from '../PicNftMinter.json';
import { contractAddress } from '../../config/contract';

export const mintNFT = async (metadataURI) => {
	const { provider } = useWeb3();

	const signer = provider.getSigner();
	const contract = new ethers.Contract(contractAddress, PicNftMinter.abi, signer);

	try {
		const transaction = await contract.mintNFT(await signer.getAddress(), metadataURI);
		await transaction.wait();
		return transaction;
	} catch (error) {
		console.log(error);
	}
};
