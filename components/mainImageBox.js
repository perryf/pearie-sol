import { useState } from 'react'
import Image from 'next/image'
import { baseUrl, photos, miscImages } from '../constants'
import styles from './mainImageBox.module.css'

const mainPhoto = photos.find(p => p.src === 'small-standing-sad.jpg')

export default function MainImageBox() {
	const [invertProfile, setInvertProfile] = useState(false)
	const handleInvertColors = () => {
		setInvertProfile(!invertProfile)
	}

	return (
		<section className={styles.mainImageBox}>
			<div className={styles.tikiFireBox}>
				<Image
					alt="tiki fire"
					src={`${baseUrl}/${miscImages.tikiFire.folder}/${miscImages.tikiFire.src}`}
					className={styles.tikiFire}
					loader={({ src }) => src}
					width={120}
					height={120}
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
					className={styles.tikiFire}
					loader={({ src }) => src}
					width={120}
					height={120}
				/>
			</div>
		</section>
	)
}
