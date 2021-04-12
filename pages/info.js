import React from 'react'
import { dumbText } from '../constants'
import Layout from '../components/layout'
import InfoBottom from '../components/infoBottom'
import styles from '../styles/pages/info.module.css'

export default function Info() {
	return (
		<Layout location="info">
			<div className={styles.infoPage}>
				<div>
					<div className={styles.topRow}>
						{/* <img src="gifs/horse_head.gif" alt="horse head" className="horseHead" /> */}
						<div className={styles.contactInfo}>
							{/* <a
						className="contactInfoEmail"
						href="mailto:solpearie@gmail.com?Subject=Hello%20Dolly"
						target="_top"
					>
						<img
							src="gifs/horse_email_me.gif"
							alt="horse gif 2"
							className="emailImage"
						/>
					</a> */}
							<a
								href="mailto:solpearie@gmail.com?Subject=Hello%20Dolly"
								target="_top"
							>
								<p className={styles.contactInfoEmail}>Email Me!!</p>
							</a>

							{/* <a
						className="contactInfoEmail"
						href="mailto:solpearie@gmail.com?Subject=Hello%20Dolly"
						target="_top"
					>
						<img
							src="gifs/horse_email.gif"
							alt="horse gif 3"
							className="emailImage"
						/>
					</a> */}
						</div>
						{/* <img src="gifs/horse_head.gif" alt="horse head" className="horseHead" /> */}
					</div>
					{/* <p className={styles.dumbText}>{dumbText}</p> */}
				</div>
				<InfoBottom />
			</div>
		</Layout>
	)
}
