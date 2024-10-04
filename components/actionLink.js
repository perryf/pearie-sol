import styles from '../styles/components/actionLink.module.css'

export default function ActionLink() {
	return (
		<div className={styles.actionLinkBox}>
			<a href="https://peariesol.bandcamp.com/album/synthetic-life" target="_blank">
				<p className={styles.actionLinkInfo}>New Album Synthetic Life!</p>
			</a>
		</div>
	)
}
