import PropTypes from 'prop-types'
import Image from 'next/image'
import { baseUrl, photos } from '../constants'
import EyeBox from './eyeBox'
import styles from './centerColumn.module.css'

const mainPhoto = photos.find(p => p.src === 'small-standing-sad.jpg')

const CenterColumn = ({
	handleInvertColors,
	handleTitleColor,
	invertProfile,
	titleColor
}) => {
	return (
		<div className={styles.centerColumn}>
			<EyeBox />
			<div className={styles.mainTitleBox}>
				<h1
					style={{ color: titleColor }}
					onClick={handleTitleColor}
					className={`${styles.mainImageTitle}`}
				>
					Pearie Sol
				</h1>
			</div>
			<div className={styles.mainImageBox}>
				<Image
					priority
					src={`${baseUrl}/${mainPhoto.folder}/${mainPhoto.src}`}
					loader={({ src }) => src}
					onClick={handleInvertColors}
					className={`
            ${styles.centerImages}
            ${styles.mainImage}
            ${invertProfile ? styles.invertProfile : ''}
          `}
					alt="pearie sol title image"
					width={360}
					height={240}
				/>
			</div>
		</div>
	)
}

CenterColumn.propTypes = {
	invertProfile: PropTypes.bool.isRequired,
	titleColor: PropTypes.string.isRequired,
	handleInvertColors: PropTypes.func.isRequired,
	handleTitleColor: PropTypes.func.isRequired
}

export default CenterColumn
