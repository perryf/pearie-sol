import React, { Component } from 'react'
import styles from './eyeBox.module.css'

// let timer = null

class EyeBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			randomNumber: 0,
			eyeBlink: '',
			eyes: []
		}
		this.timer = null
	}

	componentDidMount() {
		this.randomize()
		this.addMoreEyes()
	}

	componentWillUnMount() {
		clearInterval(this.timer)
	}

	randomize() {
		this.timer = setInterval(() => {
			const newNumber = Math.ceil(Math.random() * 5)
			this.setState({ randomNumber: newNumber })

			if (newNumber === 5) this.animateBlink()
		}, 4000)
	}

	animateBlink() {
		this.setState({ eyeBlink: 'playBlink' })
		setTimeout(() => this.setState({ eyeBlink: '' }), 2000)
	}

	addMoreEyes = () => {
		this.setState(({ eyes }) => {
			return eyes.length >= 3
				? { eyes: state.eyes.slice(0, 1) }
				: { eyes: [...eyes, { key: eyes.length + 1 }] }
		})
	}

	render() {
		const { eyes, eyeBlink } = this.state

		return (
			<div className={styles.eyeBox}>
				{eyes.map(eye => (
					<span
						key={eye.key}
						className={`${styles.eye} ${eyeBlink ? styles.playBlink : ''}`}
						aria-label="all knowing eye"
						role="img"
						onClick={this.addMoreEyes}
					>
						👁️
					</span>
				))}
			</div>
		)
	}
}

export default EyeBox
