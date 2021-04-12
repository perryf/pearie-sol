import { useState } from 'react'
import Image from 'next/image'
import { baseUrl, miscImages } from '../constants'
import Layout from '../components/layout'
import CenterColumn from '../components/centerColumn'
import styles from '../styles/pages/home.module.css'

const colors = ['#EE2211', '#33AADD', '#77DD22', '#CC44BB']
const getRandomNum = () => Math.floor(Math.random() * colors.length)

export default function Home() {
	const [invertProfile, setInvertProfile] = useState(false)
	const [titleColor, setTitleColor] = useState('#EE2211')

	const handleInvertColors = () => {
		setInvertProfile(!invertProfile)
	}

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
				<div className={styles.homeMain}>
					<div className={styles.sideColumn}>
          <Image
							width={200}
							height={200}
							alt="cat walk"
							src={`${baseUrl}/${miscImages.horseHead.folder}/${miscImages.horseHead.src}`}
              loader={({ src }) => src}
						/>

						{
							// <img
							// 	className={`imgHorizontalFlip ${horseSpin}`}
							// 	src="icons/horsewalk-compress-transparent.gif"
							// 	alt="horse"
							// 	height="180"
							// 	onClick={this.horseSpin}
							// 	onMouseOver={this.handleHorseHover}
							// 	onMouseOut={this.handleHorseUnHover}
							// />
						}
					</div>
					<CenterColumn
						handleInvertColors={handleInvertColors}
						handleTitleColor={handleTitleColor}
						// handleTikiClick={this.handleTikiClick}
						invertProfile={invertProfile}
						titleColor={titleColor}
						// leftTikiHue={leftTikiHue}
						// rightTikiHue={rightTikiHue}
						// clickCount={clickCount}
						// customTheme={customTheme}
					/>
					<div className={styles.sideColumn}>
						<Image
							width={200}
							height={200}
							alt="cat walk"
							src={`${baseUrl}/${miscImages.cat.folder}/${miscImages.cat.src}`}
              loader={({ src }) => src}
              className={styles.imgVerticalFlip}
						/>

						{
							// <img
							// 	className={`imgHorizontalFlip cat ${catSpin}`}
							// 	src="images/cat-compress.gif"
							// 	alt="cat walk"
							// 	onClick={this.catSpin}
							// />
						}
					</div>
				</div>
				{/* <p className="dumbText">{dumbText}</p> */}

				{/* <Ticker /> */}
			</div>
		</Layout>
	)
}
