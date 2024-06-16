import { createContext, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';

const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
	const [accounts, setAccounts] = useState([]);
	const [provider, setProvider] = useState(null);
	const isConnected = Boolean(accounts[0]);

	useEffect(() => {
		if (window.ethereum) {
			window.ethereum.request({ method: 'eth_accounts' }).then((accounts) => {
				if (accounts.length) setAccounts(accounts);
			});

			window.ethereum.on('accountsChanged', (accounts) => {
				if (accounts.length) setAccounts(accounts);
				else setAccounts([]);
			});

			const provider = new ethers.BrowserProvider(window.ethereum);
			setProvider(provider);
		}
	}, []);

	const connectWallet = async () => {
		if (!window.ethereum) return;

		const accounts = await window.ethereum.request({
			method: 'eth_requestAccounts',
		});
		setAccounts(accounts);
	};

	return (
		<Web3Context.Provider value={{ accounts, setAccounts, isConnected, provider, connectWallet }}>
			{children}
		</Web3Context.Provider>
	);
};

export const useWeb3 = () => {
	return useContext(Web3Context);
};
