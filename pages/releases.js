import { useEffect, useState } from 'react'
import Layout from '../components/layout'
import styles from '../styles/pages/releases.module.css'

export default function Releases() {
	const [loadedST, setLoadedST] = useState(false)
	const [loadedRealHappiness, setLoadedRealHappiness] = useState(false)
	let componentIsMounted = true

	useEffect(() => {
		return () => {
			componentIsMounted = false
		}
	}, [])

	return (
		<Layout location="releases">
			<div
				className={styles.releasesPage}
				style={{
					animationPlayState: loadedST ? 'running' : 'paused'
				}}
			>
				<div className={styles.iframeBox}>
					{!loadedRealHappiness && (
						<div className={styles.loader}>Patience is a virtue...</div>
					)}
					<iframe
						style={{ border: 0, width: '350px', height: '470px' }}
						src="https://bandcamp.com/EmbeddedPlayer/album=3036115136/size=large/bgcol=333333/linkcol=e55e10/tracklist=false/transparent=true/"
						seamless
						onLoad={() => {
							if (componentIsMounted) setLoadedRealHappiness(true)
						}}
						title="Real Happiness"
						id="bandCampEmbedRealHappiness"
					>
						<a href="https://hhbtm.bandcamp.com/album/real-happiness">
							Real Happiness by Pearie Sol
						</a>
					</iframe>
				</div>
				<a
					href="https://www.hhbtm.com/product/pearie-sol-real-happiness/"
					className={styles.coolLink}
				>
					<p className={styles.releaseLink}>
						Available on Happy Happy Birthday To Me Records
					</p>
				</a>

				<div className={styles.iframeBox}>
					{!loadedST && (
						<div className={styles.loader}>Patience is a virtue...</div>
					)}

					<iframe
						style={{
							visibility: loadedST ? 'visible' : 'hidden',
							border: 0,
							width: '350px',
							height: '470px'
						}}
						src="https://bandcamp.com/EmbeddedPlayer/album=797557584/size=large/bgcol=333333/linkcol=cccccc/tracklist=false/transparent=true/"
						seamless
						onLoad={() => {
							if (componentIsMounted) setLoadedST(true)
						}}
						title="pearie sol s/t tape"
						id="bandCampEmbedST"
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
					<p className={styles.releaseLink}>
						Available on Sister Polygon Records
					</p>
				</a>
			</div>
		</Layout>
	)
}
