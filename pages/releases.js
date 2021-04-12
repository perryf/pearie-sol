import { useEffect, useState } from 'react'
import Layout from '../components/layout'
import styles from '../styles/pages/releases.module.css'

export default function Releases() {
	const [loaded, setLoaded] = useState(false)
	let mounted = false

	useEffect(() => {
		mounted = true
		return () => (mounted = false)
	}, [])

	return (
		<Layout location="releases">
			<div
				className={styles.releasesPage}
				style={{
					animationPlayState: loaded ? 'running' : 'paused'
				}}
			>
				<span />
				<div className={styles.iframeBox}>
					{!loaded && (
						<div className={styles.loader}>Patience is a virtue...</div>
					)}

					<iframe
						style={{
							visibility: loaded ? 'visible' : 'hidden',
							border: 0,
							width: '350px',
							height: '470px'
						}}
						src="https://bandcamp.com/EmbeddedPlayer/album=797557584/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
						seamless
						onLoad={() => {
							if (mounted) setLoaded(true)
						}}
						title="pearie sol s/t tape"
						id="bandCampEmbed"
					>
						<a href="https://peariesol.bandcamp.com/album/pearie-sol">
							pearie sol by pearie sol
						</a>
					</iframe>
				</div>
				<a
					href="http://sisterpolygonrecords.bigcartel.com/"
					className={styles.coolLink}
				>
					<span className={styles.sisterPoly}>
						Available on Sister Polygon Records
					</span>
				</a>
			</div>
		</Layout>
	)
}
