import Link from 'next/link'
import { useRouter } from 'next/router'
import { navLinks, navColors } from '../constants'
import styles from '../styles/components/navbar.module.css'

const background = `linear-gradient(${navColors[0]}, ${navColors[1]}, ${navColors[2]})`

const determineIsActive = (currentPath = '', link = '') => {
	if (currentPath === link.replace('.', '')) return true
	return false
}

export default function Navbar() {
	const router = useRouter()

	return (
		<nav style={{ background }} className={styles.navContainer}>
			{navLinks.map(link => {
				const isActive = determineIsActive(router.asPath, link.path)
				return (
					<Link key={link.value} href={link.path}>
						<div
							className={`${styles.navLink} ${
								isActive ? styles.activeLink : ''
							}`}
						>
							<p id={link.value}>{link.text}</p>
						</div>
					</Link>
				)
			})}
		</nav>
	)
}
