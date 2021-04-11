import PropTypes from 'prop-types'
import Image from 'next/image'
import EyeBox from './eyeBox'
import styles from './centerColumn.module.css'

// font-effect-fire-animation

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
				<p
					style={{ color: titleColor }}
					onClick={handleTitleColor}
					className={`${styles.mainImageTitle}`}
				>
					Pearie Sol
				</p>
			</div>
			<div className={styles.mainImageBox}>
				<Image
					priority
					onClick={handleInvertColors}
					className={`
            ${styles.centerImages}
            ${styles.mainImage}
            ${invertProfile ? styles.invertProfile : ''}
          `}
					src="/pearie-sol-icon.png"
					alt="self"
					width={200}
					height={200}
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
