import links from '../constants/json/press'
import quotes from '../constants/json/pressQuotes'
import { coolLinks } from '../constants'
import styles from '../styles/components/infoQuotesLinks.module.css'

export default function InfoQuotesLinks() {
	return (
		<div className={styles.infoQuotesLinks}>
			<div className={styles.pressContainer}>
				<div className={styles.pressQuoteContainer}>
					<h2 className={styles.pressHeading}>
						Lets hear what folks are saying!
					</h2>
					<div className={styles.pressQuotes}>
						{quotes.map(({ value, quote, outlet }) => (
							<p className={styles.pressQuote} key={value}>
								<em>{`"${quote}"`}</em>
								{` - ${outlet}`}
							</p>
						))}
					</div>
				</div>

				<div className={styles.pressLinkContainer}>
					<h2 className={styles.pressHeading}>
						Straight from the horse's mouth!
					</h2>
					<div className={styles.pressLinks}>
						{links.map(({ value, text, link }) => (
							<a href={link} key={value}>
								<p className={styles.pressLink}>{text}</p>
							</a>
						))}
					</div>
				</div>
			</div>

			<div className={styles.hotLinks}>
				<div className={styles.hotLinkTitleBox}>
					<h4 className={styles.hotLinkTitle}>HOT LINKS!</h4>
				</div>
				<div className={styles.hotLinksBox}>
					{coolLinks.map((link = {}) => (
						<a href={link.path} key={link.value}>
							<p className={styles.hotLink}>{link.text}</p>
						</a>
					))}
				</div>
			</div>
		</div>
	)
}
