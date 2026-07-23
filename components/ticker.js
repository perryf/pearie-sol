import React from 'react'
import { tickerStr, tickerInfo } from '../data/tickerInfo'
import styles from '../styles/components/ticker.module.css'

export default function Ticker() {
  if (!tickerStr) return null

  return (
    <div className={styles.tickerBox}>
      <div className={styles.ticker}>
        <a href={tickerInfo?.link || 'shows'} target="_blank">
          <p className={styles.tickerItem}>{tickerStr}</p>
        </a>
      </div>
    </div>
  )
}
