import { getProviders, signIn } from 'next-auth/react';

const Login = ({ providers }) => {
	return (
		<div className='flex flex-col justify-center items-center w-full min-h-screen bg-black'>
			<img
				src='https://links.papareact.com/9xl'
				alt='spotify logo'
				className='w-52 mb-5'
			/>

			{Object.values(providers).map(provider => (
				<div key={provider.name}>
					<button
						className='bg-[#18D860] text-white p-5 rounded-full'
						onClick={() => signIn(provider.id, { callbackUrl: '/' })}
					>
						Login with {provider.name}
					</button>
				</div>
			))}
		</div>
	);
};

export default Login;

export async function getServerSideProps() {
	const providers = await getProviders();

	return {
		props: {
			providers,
		},
	};
}
