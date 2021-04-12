import HTMLHead from './head'
import NavBar from './navbar'
import styles from './layout.module.css'

export default function Layout(props) {
	const { children, location } = props

	return (
		<div className={styles.container}>
			<HTMLHead location={location} />
			<NavBar />
			<main>{children}</main>
		</div>
	)
}
