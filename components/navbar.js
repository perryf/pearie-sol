import Link from 'next/link'
import { navLinks, navColors } from '../constants'
import styles from '../styles/components/navbar.module.css'

const background = `linear-gradient(${navColors[0]}, ${navColors[1]}, ${navColors[2]})`

export default function Navbar() {
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
