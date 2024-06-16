import '@/styles/index.css';
import { Poppins } from 'next/font/google';
import { Web3Provider } from '@/context/Web3Provider';
import Head from 'next/head';

const font = Poppins({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] });

export default function App({ Component, pageProps }) {
	return (
		<div className={font.className}>
			<Head>
				<title>MintGram App - Camp Network</title>
				{/* <link rel='icon' href='/icon.png' type='image/PNG' /> */}
			</Head>

			<Web3Provider>
				<Component {...pageProps} />
			</Web3Provider>
		</div>
	);
}
