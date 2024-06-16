import HomeLayout from '@/components/Layout/HomeLayout';
import { useEffect, useState } from 'react';

export default function Home() {
	const [nfts, setNfts] = useState([]);

	useEffect(() => {
		const fetchNFTs = async () => {
			//
		};

		fetchNFTs();
	}, []);

	return (
		<HomeLayout>
			<main id='content'>
				<div className='hero bg-neutral-900'>
					<div className='max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24'>
						<div className='md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center'>
							<div>
								<blockquote>
									<p className='font-medium text-xl text-white md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal'>
										To say that switching to Preline has been life-changing is an understatement. My business
										has tripled since then.
									</p>
								</blockquote>
							</div>

							<div className='hidden md:block mb-24 md:mb-0'>
								<img
									className='rounded-xl'
									src='https://images.unsplash.com/photo-1671725501928-b7d85698ccd8?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
									alt='Image Description'
								/>
							</div>
							{/* End Col */}
						</div>
					</div>
				</div>

				<div className='bg-neutral-800'>
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
