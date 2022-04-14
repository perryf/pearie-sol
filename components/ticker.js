import { Component } from 'react'
import { tickerStr } from '../data/tickerInfo'
import styles from '../styles/components/ticker.module.css'

class Ticker extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<a href="https://hhbtm.bandcamp.com/album/real-happiness" target="_blank">
				<div className={styles.tickerBox}>
					<div className={styles.ticker}>
						<p className={styles.tickerItem}>{tickerStr}</p>
					</div>
				</div>
			</a>
		)
	}
}

export default Ticker
