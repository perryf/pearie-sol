import { useState } from 'react'
import Image from 'next/image'
import { baseUrl, miscImages, colors } from '../constants'
import Layout from '../components/layout'
import EyeBox from '../components/eyeBox'
import MainImageBox from '../components/mainImageBox'
import EmailBox from '../components/emailBox'
import styles from '../styles/pages/home.module.css'

export default function Home() {
	const [titleColor, setTitleColor] = useState('#EE2211')

	const handleTitleColor = () => {
		let randomNum = getRandomNum()
		while (randomNum === colors.indexOf(titleColor)) {
			randomNum = getRandomNum()
		}

		setTitleColor(colors[randomNum])
	}

	return (
		<Layout location="home">
			<div className={styles.homeContainer}>
				<div className={styles.topRow}>
					<div className={styles.sideImage}>
						<Image
							width={160}
							height={160}
							alt="horse head"
							src={`${baseUrl}/${miscImages.horseHead.folder}/${miscImages.horseHead.src}`}
							loader={({ src }) => src}
							className={styles.sideColImage}
						/>
					</div>
					<div className={styles.eyeTitleBox}>
						<EyeBox />
						<div className={styles.mainTitleBox}>
							<h1
								style={{ color: titleColor }}
								onClick={handleTitleColor}
								className={`${styles.mainTitle}`}
							>
								Pearie Sol
							</h1>
						</div>
					</div>
					<div className={styles.sideImage}>
						<Image
							width={160}
							height={160}
							alt="cat walk"
							src={`${baseUrl}/${miscImages.cat.folder}/${miscImages.cat.src}`}
							loader={({ src }) => src}
							className={`${styles.imgVerticalFlip} ${styles.sideColImage}`}
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
