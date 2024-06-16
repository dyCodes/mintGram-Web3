import '@/styles/index.css';
import { Poppins } from 'next/font/google';
import Head from 'next/head';

const font = Poppins({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] });

export default function App({ Component, pageProps }) {
	return (
		<div className={font.className}>
			<Head>
				<title>PicMint App - Camp Network</title>
				{/* <link rel='icon' href='/icon.png' type='image/PNG' /> */}
			</Head>

			<Component {...pageProps} />
		</div>
	);
}
