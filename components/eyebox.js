import { Component } from 'react'
import styles from './eyeBox.module.css'

const mounted = true
class EyeBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			randomNumber: 0,
			eyeBlink: '',
			eyes: [{ key: 1 }]
		}
		this.timer = null
	}

	componentDidMount() {
		this.randomize()
	}

	componentWillUnMount() {
		clearInterval(this.timer)
	}

	randomize() {
		this.timer = setInterval(() => {
			const newNumber = Math.ceil(Math.random() * 4)

			if (newNumber === 4) this.animateBlink()
			if (mounted) this.setState({ randomNumber: newNumber })
		}, 4000)
	}

	animateBlink() {
		this.setState({ eyeBlink: 'playBlink' })
		setTimeout(() => this.setState({ eyeBlink: '' }), 2000)
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
