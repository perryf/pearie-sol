import Image from 'next/image'
import { baseUrl, miscImages } from '../constants'
import Layout from '../components/layout'
import InfoQuotesLinks from '../components/infoQuotesLinks'
import EmailBox from '../components/emailBox'
import styles from '../styles/pages/info.module.css'

export default function Info() {
	return (
		<Layout location="info">
			<div className={styles.infoPage}>
				<div className={styles.topRow}>
					<div className={styles.emailImageBox}>
						<a
							href="mailto:solpearie@gmail.com?Subject=Hello%20Horsey"
							target="_top"
						>
							<Image
								width={100}
								height={60}
								alt="horse email"
								src={`${baseUrl}/${miscImages.horseHead.folder}/${miscImages.horseEmailMe.src}`}
								className={styles.emailImage}
							/>
						</a>
					</div>
					<EmailBox />
					<div className={styles.emailImageBox}>
						<a
							href="mailto:solpearie@gmail.com?Subject=Hello%20Dolly"
							target="_top"
						>
							<Image
								width={100}
								height={60}
								alt="horse email me"
								src={`${baseUrl}/${miscImages.horseHead.folder}/${miscImages.horseEmail.src}`}
								className={styles.emailImage}
							/>
						</a>
					</div>
				</div>
				<InfoQuotesLinks />
			</div>
		</Layout>
	)
}
