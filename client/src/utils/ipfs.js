// utils/ipfs.js

export async function uploadToPinata(name, file) {
	const formData = new FormData();
	formData.append('file', file);
	formData.append('pinataMetadata', JSON.stringify({ name: name }));

	try {
		const res = await fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`,
			},
			body: formData,
		});

		const response = await res.json();
		return getFileURI(response.IpfsHash);
	} catch (error) {
		console.log(error);
	}
}

export async function uploadMetadata(metaData) {
	try {
		const res = await fetch('https://api.pinata.cloud/pinning/pinJSONToIPFS', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`,
			},
			body: metaData,
		});

		const response = await res.json();
		return getFileURI(response.IpfsHash);
	} catch (error) {
		console.log(error);
	}
}

export const getFileURI = (CID) => {
	const file = `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${CID}`;
	console.log(CID, file);

	return file;
};
