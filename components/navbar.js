import Link from 'next/link'
import { navLinks } from '../constants'
import styles from './navbar.module.css'

const colors = ['#124', 'SkyBlue', 'Beige']

export default function Navbar() {
	const background = `linear-gradient(${colors[0]}, ${colors[1]}, ${colors[2]})`
	return (
		<nav style={{ background }} className={styles.navContainer}>
			{navLinks.map(link => (
				<Link key={link.value} href={link.path}>
					<div className={styles.navLink}>
						<p id={link.value}>{link.text}</p>
					</div>
				</Link>
			))}
		</nav>
	)
}
