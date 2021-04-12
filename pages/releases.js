import { useState } from 'react'
import Layout from '../components/layout'
import styles from '../styles/pages/releases.module.css'

const mounted = true

export default function Releases() {
	const [loaded, setLoaded] = useState(false)

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
						className={styles.iframePlayer}
						style={{
							visibility: loaded ? 'visible' : 'hidden',
							animationPlayState: loaded ? 'running' : 'paused'
						}}
						onLoad={() => {
							if (mounted) setLoaded(true)
						}}
						id="bandCampEmbed"
						title="pearie sol s/t tape"
						src="https://bandcamp.com/EmbeddedPlayer/album=797557584/size=large/bgcol=333333/linkcol=20B2AA/minimal=true/transparent=true/"
						seamless
					>
						<a href="http://peariesol.bandcamp.com/album/pearie-sol">
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
