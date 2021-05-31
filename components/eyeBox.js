import { Component } from 'react'
import styles from '../styles/components/eyeBox.module.css'

class EyeBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			randomNumber: 0,
			eyeBlink: '',
			eyes: [{ key: 1 }]
		}
		this.timer = null
		this.tempTimer = null
		this.mounted = false
	}

	componentDidMount() {
		this.mounted = true
		this.randomize()
	}

	componentWillUnmount() {
		this.mounted = false
		clearInterval(this.timer)
		clearTimeout(this.tempTimer)
	}

	randomize() {
		this.timer = setInterval(() => {
			const newNumber = Math.ceil(Math.random() * 4)
			if (this.mounted && newNumber === 4) this.animateBlink()
			if (this.mounted) this.setState({ randomNumber: newNumber })
		}, 4000)
	}

	animateBlink() {
		if (this.mounted) {
			this.setState({ eyeBlink: 'playBlink' })
			this.tempTimer = setTimeout(() => {
				if (this.mounted) this.setState({ eyeBlink: '' })
			}, 2000)
		}
	}

	addMoreEyes = () => {
		this.setState(({ eyes }) => {
			return eyes.length >= 3
				? { eyes: eyes.slice(0, 1) }
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
