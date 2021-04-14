import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { baseUrl, photos, flyers } from '../constants'
import Layout from '../components/layout'
import styles from '../styles/pages/media.module.css'

export default function Media() {
	const [alleyLoaded, setAlleyLoaded] = useState(false)
	const [loveLoaded, setLoveLoaded] = useState(false)
	const componentIsMounted = useRef(true)
	useEffect(() => {
		return () => (componentIsMounted.current = false)
	}, [])
	// useEffect(() => {
	// 	const fetchData = {
	// 		method: 'GET',
	// 		mode: 'no-cors',
	// 		headers: { 'Content-Type': 'application/json' },
	//     Host: 'pearie-sol-images.s3.amazonaws.com'
	// 	}

	// 	const testLink =
	// 		'http://s3.us-east-1.amazonaws.com/pearie-sol-images/photos'

	// 	fetch(testLink, fetchData)
	// 		.then(res => {
	//       console.log(res)
	// 			return res.json()
	// 		})
	// 		.then(json => {
	// 			setPic(pic)
	// 			console.log(json)
	// 		})
	// 		.catch(err => {
	// 			console.log(err)
	// 		})
	// }, [])

	return (
		<Layout location="media">
			<div className={styles.mediaPage}>
				<div>
					<h2 className={styles.mediaHeading}>Videos</h2>
					<div className={styles.videoBox}>
						{!loveLoaded && (
							<p className={styles.loader}>Patience is a virtue...</p>
						)}
						<iframe
							className={styles.iframeVideo}
							style={{ display: loveLoaded ? 'initial' : 'none' }}
							onLoad={() => {
								if (componentIsMounted.current) setLoveLoaded(true)
							}}
							// width="560"
							// height="315"
							src="https://www.youtube.com/embed/tc2T5ZdKBF4"
							frameBorder="1"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							title="love is for the loving video"
						/>
						{!alleyLoaded && (
							<p className={styles.loader}>Patience is a virtue...</p>
						)}
						<iframe
							className={styles.iframeVideo}
							style={{ display: alleyLoaded ? 'initial' : 'none' }}
							onLoad={() => {
								if (componentIsMounted.current) setAlleyLoaded(true)
							}}
							// width="560"
							// height="315"
							src="https://www.youtube.com/embed/XO7ZyiLq_dg"
							frameBorder="1"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							title="alley video"
						/>
					</div>
				</div>
				<div>
					<h2 className={styles.mediaHeading}>Photos</h2>
					<div className={styles.imageGallery}>
						{photos
							.filter(p => {
								if (p.size !== 'small') return false
								if (p.src === 'small-sitting-flamingo-sideways.jpg') {
									return false
								}
								if (p.src === 'small-standing-sad.jpg') {
									return false
								}
								return true
							})
							.map(photo => {
								return (
									<Image
										key={photo.src}
										src={`${baseUrl}/${photo.folder}/${photo.src}`}
										loader={({ src }) => src}
										alt="pearie sol photo"
										width={photo.width || 360}
										height={photo.height || 240}
										className={styles.mediaPhoto}
									/>
								)
							})}
					</div>
				</div>

				<div>
					<h2 className={styles.mediaHeading}>Flyers</h2>
					<div className={styles.imageGallery}>
						{flyers
							.filter(p => p.size === 'small')
							.map(photo => {
								return (
									<Image
										key={photo.src}
										src={`${baseUrl}/${photo.folder}/${photo.src}`}
										loader={({ src }) => src}
										alt="pearie sol flyer"
										width={photo.width || 360}
										height={photo.height || 240}
										className={styles.mediaPhoto}
									/>
								)
							})}
					</div>
				</div>
			</div>
		</Layout>
	)
}
