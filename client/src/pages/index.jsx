import HomeLayout from '@/components/HomeLayout';
import { Spinner } from '@/components/Layout/Spinner';
import { useWeb3 } from '@/context/Web3Provider';
import { uploadMetadata, uploadToPinata } from '@/utils/ipfs';
import { mintNFT } from '@/utils/mintNFT';
import { useEffect, useState } from 'react';
import swal from 'sweetalert';

export default function Home() {
	// const { getProvider } = useWeb3();
	const [nfts, setNfts] = useState([]);
	const [uploadedImage, setUploadedImage] = useState(null);
	const [loadingRequest, setLoadingRequest] = useState(false);

	useEffect(() => {
		const fetchNFTs = async () => {
			//
		};

		fetchNFTs();
	}, []);

	const handleMint = async (el) => {
		el.preventDefault();
		setLoadingRequest(true);

		const name = el.target.name.value;
		const image = el.target.image.files[0];

		try {
			const imageURI = await uploadToPinata(name, image);
			console.log('imageURI', imageURI);

			let metaData = JSON.stringify({
				name: name,
				description: 'A NFT minted on PicMint!',
				image: imageURI,
			});

			const MetaDataURI = await uploadMetadata(metaData);
			console.log('URI', MetaDataURI);

			const transaction = await mintNFT(MetaDataURI);
			console.log('transaction', transaction);

			if (transaction?.hash) {
				swal('Successful!', 'NFT minted successfully!', 'success', {
					buttons: {
						catch: {
							text: 'View Transaction',
							value: 'view',
						},
						cancel: 'Okay',
					},
				}).then((value) => {
					const url = process.env.NEXT_PUBLIC_ETHERSCAN_URL + transaction?.hash;
					value === 'view' && window.open(url, '_blank').focus();
				});

				// Reset form and uploaded image
				el.target.reset();
				setUploadedImage(null);
			}
		} catch (error) {
			console.log(error);
			swal('Error!', 'An error occurred, please try again!', 'error');
		} finally {
			setLoadingRequest(false);
		}
	};

	return (
		<HomeLayout>
			<main id='content'>
				<div className='hero bg-neutral-900'>
					<div className='max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24'>
						<div className='md:grid md:grid-cols-2 md:gap-10 lg:gap-28 md:items-center'>
							<div>
								<p className='mb-5 font-medium text-xl text-white md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal'>
									Save your favourite moments to the blockchain!
								</p>

								<form className='max-w-sm py-2' onSubmit={handleMint}>
									<div className='pb-5'>
										<label
											htmlFor='name'
											className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
											Name
										</label>
										<input
											type='text'
											id='name'
											className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
											placeholder='OPL X 0G X CAMP Hackathon'
											required
										/>
									</div>

									<div className='pb-5'>
										<div>
											<label
												className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
												htmlFor='image'>
												Upload file
											</label>
											<input
												className='p-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none '
												required
												id='image'
												type='file'
												onChange={(el) => setUploadedImage(URL.createObjectURL(el.target.files[0]))}
											/>
											<p className='mt-1 text-[13px] text-gray-500 dark:text-gray-300' id='image_help'>
												SVG, PNG, JPG or GIF (MAX. 2MB).
											</p>
										</div>
									</div>

									<button
										className='w-2/3 group justify-center inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none cursor-pointer'
										type='submit'
										onClick={() => {}}>
										{loadingRequest && <Spinner />}
										<span className='mx-1'>Upload</span>
									</button>

									{/* <div className='pb-4'>
										<label
											htmlFor='first_name'
											className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
											First name
										</label>
										<input
											type='text'
											id='first_name'
											className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
											placeholder='John'
											required
										/>
									</div> */}
								</form>
							</div>

							<div className='p-3 block mb-24 md:mb-0 bg-gray-300 rounded-md'>
								<img
									className='w-full'
									src={uploadedImage ? uploadedImage : '/upload_placeholder.png'}
									alt='Image Description'
								/>
							</div>
						</div>
					</div>
				</div>

				<div id='explore' className='bg-neutral-800'>
					<div className='max-w-5xl px-4 xl:px-0 py-24 mx-auto'>
						<div className='max-w-3xl mb-10 lg:mb-14'>
							<h2 className='text-white font-semibold text-2xl md:text-4xl md:leading-tight'>Explore</h2>
							{/* <p className='mt-1 text-neutral-400'>
									Global brands see measurable success when they collaborate with us. From higher conversion
									and payment approval rates to faster processing speeds. Discover their stories here.
								</p> */}
						</div>

						<div className=''>
							<div className='grid grid-cols-2 sm:grid-cols-4 gap-2'>
								<div className='space-y-2'>
									<img
										className='w-full object-cover'
										src='https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
										alt='Image Description'
									/>
									<img
										className='w-full object-cover'
										src='https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80'
										alt='Image Description'
									/>
									<img
										className='w-full object-cover'
										src='https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
										alt='Image Description'
									/>
								</div>
								<div className='space-y-2'>
									<img
										className='w-full object-cover'
										src='https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'
										alt='Image Description'
									/>
									<img
										className='w-full object-cover'
										src='https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
										alt='Image Description'
									/>
									<img
										className='w-full object-cover'
										src='https://images.unsplash.com/photo-1669824774762-65ddf29bee56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
										alt='Image Description'
									/>
								</div>
								<div className='space-y-2'>
									<img
										className='w-full object-cover'
										src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
										alt='Image Description'
									/>
									<img
										className='w-full object-cover'
										src='https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'
										alt='Image Description'
									/>
									<img
										className='w-full object-cover'
										src='https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
										alt='Image Description'
									/>
								</div>
								<div className='space-y-2'>
									<img
										className='w-full object-cover'
										src='https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80'
										alt='Image Description'
									/>
									<img
										className='w-full object-cover'
										src='https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3465&q=80'
										alt='Image Description'
									/>
									<img
										className='w-full object-cover'
										src='https://images.unsplash.com/photo-1668863699009-1e3b4118675d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80'
										alt='Image Description'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</HomeLayout>
	);
}
