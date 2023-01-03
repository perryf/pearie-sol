import showList from '../data/showList'
import { determineUpcoming } from '../constants'
import Layout from '../components/layout'
import ShowListing from '../components/showListing'
import styles from '../styles/pages/shows.module.css'

const previousShows = []
let upcomingShows = []

// showList is assumed to be in descending order by date
showList.forEach(show => {
	const isUpcoming = determineUpcoming(show)

	if (isUpcoming) upcomingShows.push(show)
	else previousShows.push(show)
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
