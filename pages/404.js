import Link from 'next/link'

export default function Custom404() {
	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>Four 👏 Oh 👏 Four</h1>

			<Link href="/">
				<p
					style={{ color: 'skyblue', cursor: 'help' }}
				>{`<- Back to civilization`}</p>
			</Link>
		</div>
	)
}
