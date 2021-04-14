import Layout from '../components/layout'
import InfoQuotesLinks from '../components/infoQuotesLinks'
import EmailBox from '../components/emailBox'
import styles from '../styles/pages/info.module.css'

export default function Info() {
	return (
		<Layout location="info">
			<div className={styles.infoPage}>
				<div className={styles.topRow}>
					<EmailBox />
				</div>
				<InfoQuotesLinks />
			</div>
		</Layout>
	)
}
