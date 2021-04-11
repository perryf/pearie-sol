import HTMLHead from './head'
import NavBar from './navbar'
import styles from './layout.module.css'

export default function Layout(props) {
	const { children, location } = props
  
	return (
		<div className={styles.container}>
			<HTMLHead />
			<NavBar location={location} />
			<main>{children}</main>
		</div>
	)
}
