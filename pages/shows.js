import { compareAsc, parse } from 'date-fns'
import showList from '../data/showList'
import Layout from '../components/layout'
import ShowListing from '../components/showListing'
import styles from '../styles/pages/shows.module.css'

const previousShows = []
let upcomingShows = []

showList.forEach(show => {
	const parsedDate = parse(show.date, 'yyyy-MM-dd', new Date())

	if (compareAsc(parsedDate, new Date()) >= 0) {
		upcomingShows.push(show)
	} else {
		previousShows.push(show)
	}
})

upcomingShows = upcomingShows.reverse()

const ShowsPage = () => (
	<Layout location="shows">
		<div className={styles.showsPage}>
			<>
				<h3 className={`${styles.showTypeHeading} ${styles.upcomingHeading}`}>
					<span aria-label="sun" role="img">
						☀️
					</span>
					{' Upcoming Shows '}
					<span aria-label="sun" role="img">
						☀️
					</span>
				</h3>
				<ShowListing shows={upcomingShows} upcoming={true} />
			</>
			<>
				<h3 className={`${styles.showTypeHeading} ${styles.previousHeading}`}>
					<span role="img" aria-label="moon">
						🌙
					</span>
					{' Previous Shows '}
					<span role="img" aria-label="moon">
						🌙
					</span>
				</h3>
				<ShowListing shows={previousShows} upcoming={false} />
			</>
		</div>
	</Layout>
)

export default ShowsPage
