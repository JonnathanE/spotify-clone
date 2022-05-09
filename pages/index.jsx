import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Spotify Clone</title>
				<meta name='description' content='Clone of Spotify' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.main}>
				<h1 className='text-3xl font-bold underline'>Hello world!</h1>
				{/* Sidebar */}
				{/* Center */}
			</main>
			<div>{/* Player */}</div>
		</div>
	);
}
