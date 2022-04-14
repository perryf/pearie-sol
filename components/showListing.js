import PropTypes from 'prop-types'
import { format, isValid, parse } from 'date-fns'
import styles from '../styles/components/showList.module.css'

const maxFont = 20
const expFont = (num, x) => Math.pow(num, x)

const ShowListing = ({ shows, upcoming }) => {
	const x = !upcoming ? Math.log(maxFont) / Math.log(shows.length) : 1
	let count = !upcoming ? shows.length : maxFont

	const showsMap = shows.map((show, index) => {
		const { date, venue, location, otherActs, link } = show
		const parsedDate = parse(date, 'yyyy-MM-dd', new Date())
		const dateDisplay = isValid(parsedDate)
			? format(parsedDate, 'M/dd/yyyy')
			: date || ''
		let fontSize = expFont(count + 1, x)

		if (index !== 0) count = count - 1

		return (
			<div key={index} className={styles.showBox} style={{ fontSize }}>
				<ul>
					<li className={styles.showListItemRow}>
						<span>
							<span className={styles.showCategory}>Date: </span>
							{dateDisplay}
						</span>
					</li>
					<li className={styles.showListItemRow}>
						<span>
							<span className={styles.showCategory}>Location: </span>
							{location}
						</span>
					</li>
					<li className={styles.showListItemRow}>
						<span>
							<span className={styles.showCategory}>Venue: </span>
							{venue}
						</span>
					</li>
					<li className={styles.showListItemRow}>
						<span>
							<span className={styles.showCategory}>Other Acts: </span>
							{otherActs}
						</span>
					</li>
					{link && (
						<li className={`${styles.showListItemRow} ${styles.showListLink}`}>
							<span>
								<a href={link}>more info</a>
							</span>
						</li>
					)}
				</ul>
			</div>
		)
	})

	const emptyShows = (
		<div>
			<span role="img" aria-label="candle">
				🕯
			</span>
			{'  No upcoming shows  '}
			<span role="img" aria-label="candle">
				🕯
			</span>
		</div>
	)

	return (
		<div className={styles.showListBox}>
			{shows.length >= 1 ? showsMap : emptyShows}
		</div>
	)
}

ShowListing.propTypes = {
	shows: PropTypes.arrayOf(
		PropTypes.shape({
			date: PropTypes.string.isRequired,
			venue: PropTypes.string.isRequired,
			location: PropTypes.string.isRequired,
			otherActs: PropTypes.string.isRequired
		})
	).isRequired,
	upcoming: PropTypes.bool.isRequired
}

export default ShowListing
