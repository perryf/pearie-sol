import Head from 'next/head'

export default function HTMLHead() {
	return (
		<Head>
			<link rel="icon" href="/favicon.ico" />
			<meta charset="utf-8" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, shrink-to-fit=no"
			/>
			<meta name="description" content="Pearie Sol music" />
			<link rel="apple-touch-icon" href="/pearie-sol-icon.png" />
			<meta name="theme-color" content="#333F63" />
			<link rel="manifest" href="/manifest.json" />
			<link rel="shortcut icon" href="/favicon.ico" />
			<link
				href="https://fonts.googleapis.com/css?family=Fredoka+One&effect=fire-animation|3d|neon|distressed"
				rel="stylesheet"
			/>
			<link
				href="https://fonts.googleapis.com/css?family=Nosifer|Pinyon+Script|Sancreek|Rubik|Macondo+Swash+Caps|Fredoka+One"
				rel="stylesheet"
			/>
		</Head>
	)
}
