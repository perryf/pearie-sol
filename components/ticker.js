import { Component } from 'react'
import styles from '../styles/components/ticker.module.css'

class Ticker extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className={styles['ticker-box']}>
				<div className={styles['ticker']}>
					<p className={styles['ticker-item']}>
						New album REAL HAPPINESS out June 18th on HHBTM Records!
					</p>
				</div>
			</div>
		)
	}
}

export default Ticker
