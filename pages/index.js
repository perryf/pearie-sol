import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<Layout location="home">
			<Head>
				<title>{siteTitle}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header>
				<p>Let me introduce myself, wait never mind</p>
			</header>

			<main className={styles.main}>
				<h1 className={styles.title}>Pearie Sol</h1>
			</main>

			<footer className={styles.footer}>made by Pearie Sol</footer>
		</Layout>
	)
}
