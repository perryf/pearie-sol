import { useState } from 'react'
import Image from 'next/image'
import { baseUrl, miscImages, colors, getRandomIndex } from '../constants'
import Layout from '../components/layout'
import EyeBox from '../components/eyeBox'
import MainImageBox from '../components/mainImageBox'
import EmailBox from '../components/emailBox'
import styles from '../styles/pages/home.module.css'

export default function Home() {
	const [titleColor, setTitleColor] = useState(colors[0])
	const [horseSpin, setHorseSpin] = useState(false)
	const [catFlip, setFlipCat] = useState(true)

	const handleTitleColor = () => {
		let randomNum = getRandomIndex(colors)
		while (randomNum === colors.indexOf(titleColor)) {
			randomNum = getRandomIndex(colors)
		}
		setTitleColor(colors[randomNum])
	}
	const spinHorse = () => {
		if (!horseSpin) {
			setHorseSpin(true)
			setTimeout(() => setHorseSpin(false), 666)
		}
	}
	const flipCat = () => setFlipCat(!catFlip)

	return (
		<Layout location="home">
			<div className={styles.homeContainer}>
				<div className={styles.topRow}>
					<div className={styles.sideImageBox}>
						<Image
							width={160}
							height={160}
							alt="horse head"
							src={`${baseUrl}/${miscImages.horseHead.folder}/${miscImages.horseHead.src}`}
							loader={({ src }) => src}
							className={`${styles.sideImage} ${horseSpin ? styles.horseSpin : ''}`}
							onClick={spinHorse}
						/>
					</div>
					<div className={styles.eyeTitleBox}>
						<EyeBox />
						<div className={styles.mainTitleBox}>
							<h1
								style={{ color: titleColor }}
								onClick={handleTitleColor}
								className={styles.mainTitle}
							>
								Pearie Sol
							</h1>
						</div>
					</div>
					<div className={styles.sideImageBox}>
						<Image
							width={160}
							height={160}
							alt="cat walk"
							src={`${baseUrl}/${miscImages.cat.folder}/${miscImages.cat.src}`}
							loader={({ src }) => src}
							className={`${styles.sideImage} ${catFlip ? styles.imgVerticalFlip : ''}`}
							onClick={flipCat}
						/>
					</div>
				</div>
				<MainImageBox />
				<footer className={styles.bottomRow}>
					<EmailBox />
				</footer>
			</div>
		</Layout>
	)
}
