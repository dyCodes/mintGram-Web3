const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('PicNftMinter', function () {
	//
	it('Should get balance', async function () {
		const PicNftMinter = await ethers.getContractFactory('PicNftMinter');
		const picNftMinter = await PicNftMinter.deploy();
		await picNftMinter.deployed();

		const recipient = '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC';

		let bal = await picNftMinter.balanceOf(recipient);
		expect(bal).to.equal(0);
	});
});
