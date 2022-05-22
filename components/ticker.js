import React from 'react'
import { tickerStr } from '../data/tickerInfo'
import styles from '../styles/components/ticker.module.css'

export default function Ticker() {
	if (!tickerStr) return null

	return (
		<div className={styles.tickerBox}>
			<div className={styles.ticker}>
				<p className={styles.tickerItem}>{tickerStr}</p>
			</div>
		</div>
	)
}
