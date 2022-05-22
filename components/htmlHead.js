import Head from 'next/head'

const siteTitle = 'Pearie Sol'

export default function HTMLHead() {
	return (
		<Head>
			<title>{siteTitle}</title>
			<meta charSet="utf-8" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, shrink-to-fit=no"
			/>
			<meta name="description" content="Pearie Sol music" />
			<meta name="theme-color" content="#333F63" />
			<link rel="apple-touch-icon" href="/pearie-sol-icon.png" />
			<link rel="icon" href="/favicon.ico" />
			<link rel="manifest" href="/manifest.json" />
			<link rel="shortcut icon" href="/favicon.ico" />
		</Head>
	)
}
