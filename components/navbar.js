import Link from 'next/link'
import { navLinks } from '../constants'
import styles from './NavBar.module.css'

const colors = ['Black', 'SkyBlue', 'Beige']

export default function Navbar() {
	const background = `linear-gradient(${colors[0]}, ${colors[1]}, ${colors[2]})`
	return (
		<nav style={{ background }} className={styles.navContainer}>
			{navLinks.map(link => (
				<div
					key={link.value}
					className={`${styles.navLink} ${styles.normalNav}`}
				>
					<Link href={link.path}>
						<p id={link.value}>{link.text}</p>
					</Link>
				</div>
			))}
		</nav>
	)
}
