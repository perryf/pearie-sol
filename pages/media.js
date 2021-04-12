import { useEffect, useState } from 'react'
import Image from 'next/image'
import { baseUrl, photos, flyers } from '../constants'
import Layout from '../components/layout'
import styles from '../styles/pages/media.module.css'

const mounted = true

const picLink =
	'https://pearie-sol-images.s3.amazonaws.com/photos/small-standing-sweatshirt.jpg'

export default function Media() {
	const [alleyLoaded, setAlleyLoaded] = useState(false)
	const [loveLoaded, setLoveLoaded] = useState(false)

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
							style={{ display: loveLoaded ? 'initial' : 'none' }}
							onLoad={() => {
								if (mounted) setLoveLoaded(true)
							}}
							width="560"
							height="315"
							src="https://www.youtube.com/embed/tc2T5ZdKBF4"
							frameBorder="1"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							title="alley video"
						/>
						{!alleyLoaded && (
							<p className={styles.loader}>Patience is a virtue...</p>
						)}
						<iframe
							style={{ display: alleyLoaded ? 'initial' : 'none' }}
							onLoad={() => {
								if (mounted) setAlleyLoaded(true)
							}}
							width="560"
							height="315"
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
							.filter(p => p.size === 'small')
							.map(photo => {
								return (
									<Image
										key={photo.src}
										src={`${baseUrl}/${photo.folder}/${photo.src}`}
										loader={({ src }) => src}
										alt="pearie sol image"
										width={photo.portrait ? 240 : 360}
										height={photo.portrait ? 360 : 240}
                    className="photoImage"
									/>
								)
							})}

						{/* <Image
							className={styles.mediaPhoto}
							src="/photos/bench_sit.jpg"
							alt="drew shot"
							width={200}
							height={200}
						/>

						<Image
							className={styles.mediaPhoto}
							src="/photos/drew_shot.jpg"
							alt="drew shot"
							width={200}
							height={200}
						/>

						<Image
							className={styles.mediaPhoto}
							src="/photos/pearie_sol_jason_pic_low_fi.PNG"
							alt="jason shot"
							width={200}
							height={200}
						/>

						<Image
							className={styles.mediaPhoto}
							src="/photos/pearie_sol_performance_1.png"
							alt="performance 1"
							width={200}
							height={200}
						/>

						<Image
							className={styles.mediaPhoto}
							src="/photos/pearie_sol_performance_2.png"
							alt="performance 2"
							width={200}
							height={200}
						/> */}
					</div>
				</div>
				{false && (
					<div className="flyerContainer">
						<h2 className={styles.mediaHeading}>Flyers</h2>
						<div className={styles.imageGallery}>
							<a href="./photos/2019springtourFINAL.jpg" target="_blank">
								<Image
									className={styles.mediaPhoto}
									src="/photos/2019springtourFINAL.jpg"
									alt="Spring Flyer 2019"
									width={200}
									height={200}
								/>
							</a>
							<a href="./photos/flyerFall2018Final.png" target="_blank">
								<Image
									className={styles.mediaPhoto}
									src="/photos/flyerFall2018Final.png"
									alt="Fall Flyer 2018"
									width={200}
									height={200}
								/>
							</a>
							<a href="./photos/Boogie_Woogie_Tour_Final.png" target="_blank">
								<Image
									className={styles.mediaPhoto}
									src="/photos/Boogie_Woogie_Tour_Final.png"
									alt="boogie woogie tour flyer"
									width={200}
									height={200}
								/>
							</a>
							<a
								href="./photos/buster_brown_tour_pic_final.jpg"
								target="_blank"
							>
								<Image
									className={styles.mediaPhoto}
									src="/photos/buster_brown_tour_pic_final.jpg"
									alt="buster brown tour flyer"
									width={200}
									height={200}
								/>
							</a>
						</div>
					</div>
				)}
			</div>
		</Layout>
	)
}
