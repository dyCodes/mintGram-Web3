const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('MintGramNFT', function () {
	//
	it('Should get balance', async function () {
		const MintGramNFT = await ethers.getContractFactory('MintGramNFT');
		const mintGramNFT = await MintGramNFT.deploy();
		await mintGramNFT.deployed();

		const recipient = '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC';

		let bal = await mintGramNFT.balanceOf(recipient);
		expect(bal).to.equal(0);
	});
});
