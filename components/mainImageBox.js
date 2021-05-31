import { useState } from 'react'
import Image from 'next/image'
import { baseUrl, photos, miscImages } from '../constants'
import styles from '../styles/components/mainImageBox.module.css'

const mainPhoto = photos.find(p => p.src === 'small-standing-sad.jpg') || {}

export default function MainImageBox() {
	const [invertProfile, setInvertProfile] = useState(false)
	const [leftTikiShift, setLeftTiki] = useState(0)
	const [rightTikiShift, setRightTiki] = useState(0)

	const handleInvertColors = () => setInvertProfile(!invertProfile)
	const handleShiftChange = (direction = 'left') => {
		if (direction === 'left') {
			const updateVal = leftTikiShift === 270 ? 0 : leftTikiShift + 90

			setLeftTiki(updateVal)
		}
		if (direction === 'right') {
			const updateVal = rightTikiShift === 0 ? 270 : rightTikiShift - 90
			setRightTiki(updateVal)
		}
	}

	return (
		<section className={styles.mainImageBox}>
			<div className={styles.tikiFireBox}>
				<Image
					alt="tiki fire"
					src={`${baseUrl}/${miscImages.tikiFire.folder}/${miscImages.tikiFire.src}`}
					className={`${styles.tikiFire} ${
						leftTikiShift ? styles[`tikiShift${leftTikiShift}`] : ''
					}`}
					loader={({ src }) => src}
					width={120}
					height={120}
					onClick={() => handleShiftChange('left')}
				/>
			</div>
			<div>
				<Image
					priority
					src={`${baseUrl}/${mainPhoto.folder}/${mainPhoto.src}`}
					loader={({ src }) => src}
					onClick={handleInvertColors}
					className={`
            ${styles.mainImage}
            ${invertProfile ? styles.invertProfile : ''}
          `}
					alt="pearie sol title image"
					width={360}
					height={240}
				/>
			</div>
			<div className={styles.tikiFireBox}>
				<Image
					alt="tiki fire"
					src={`${baseUrl}/${miscImages.tikiFire.folder}/${miscImages.tikiFire.src}`}
					className={`${styles.tikiFire}
					${rightTikiShift ? styles[`tikiShift${rightTikiShift}`] : ''}
					`}
					loader={({ src }) => src}
					width={120}
					height={120}
					onClick={() => handleShiftChange('right')}
				/>
			</div>
		</section>
	)
}
