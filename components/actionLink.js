import styles from '../styles/components/actionLink.module.css'

export default function ActionLink() {
	return (
		<div className={styles.actionLinkBox}>
			<a href="https://hhbtm.bandcamp.com/album/real-happiness" target="_blank">
				<p className={styles.actionLinkInfo}>Get Real Happiness Here!</p>
			</a>
		</div>
	)
}
