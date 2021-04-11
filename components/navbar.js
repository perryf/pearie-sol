import React, { Component } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { navLinks } from '../constants/links'
// import { colorNames } from 'Utils/ColorNames'
import styles from './NavBar.module.css'

class NavBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			colors: {
				a: 'Black',
				b: 'SkyBlue',
				c: 'Beige'
			}
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps.location !== this.props.location) {
			this.randomizeBackground()
		}
	}

	randomizeBackground = () => {
		// this.setState({
		// 	colors: {
		// 		a: colorNames[random(0, colorNames.length)],
		// 		b: colorNames[random(0, colorNames.length)],
		// 		c: colorNames[random(0, colorNames.length)]
		// 	}
		// })
	}

	render() {
		const background = `linear-gradient(
      ${this.state.colors.a}, 
      ${this.state.colors.b}, 
      ${this.state.colors.c}
    )`
		return (
			<nav style={{ background }} className={styles.navContainer}>
				{navLinks.map(link => (
					<span
						key={link.value}
						className={`${styles.navLink} ${
							link.value === 'moreCat' ? styles.moreCat : styles.normalNav
						}`}
					>
						<Link href={link.path}>
							<p id={link.value}>{link.text}</p>
						</Link>
					</span>
				))}
			</nav>
		)
	}
}

NavBar.propTypes = {
	location: PropTypes.string.isRequired
}

export default NavBar
