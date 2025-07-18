import { useState } from 'react'
import Image from 'next/image'
import {
  baseUrl,
  miscImages,
  colors,
  getRandomIndex,
  dumbText
} from '../constants'
import Layout from '../components/layout'
import EyeBox from '../components/eyeBox'
import MainImageBox from '../components/mainImageBox'
import ActionLink from '../components/actionLink'
import EmailBox from '../components/emailBox'
import Ticker from '../components/ticker'
import styles from '../styles/pages/home.module.css'
import utilStyles from '../styles/utls.module.css'

export default function Home() {
  const [titleColor, setTitleColor] = useState(colors[0])
  const [horseSpin, setHorseSpin] = useState(false)
  const [catFlip, setFlipCat] = useState(true)

  const handleTitleColor = () => {
    const remainingColors = colors.filter(color => color !== titleColor)
    const randomColor = remainingColors[getRandomIndex(remainingColors)]
    setTitleColor(randomColor)
  }
  const spinHorse = () => {
    if (!horseSpin) {
      setHorseSpin(true)
      setTimeout(() => setHorseSpin(false), 666)
    }
  }
  const flipCat = () => setFlipCat(!catFlip)

  return (
    <Layout location="home">
      <div className={styles.homeContainer}>
        <div className={styles.trippyBackgroundContainer}>
          <div className={styles.trippyBackground}></div>
          <div className={styles.morphingGrid}></div>
          <div className={styles.bloodContainerTop}>
            <Image
              layout="fill"
              objectFit="fill"
              alt="blood"
              className={utilStyles.twitch}
              src={`${baseUrl}/${miscImages.blood.folder}/${miscImages.blood.src}`}
            />
          </div>

          <div className={styles.trippyContent}>
            <div className={styles.topRow}>
              <div className={styles.sideImageBox}>
                <Image
                  width={160}
                  height={160}
                  alt="horse head"
                  src={`${baseUrl}/${miscImages.horseHead.folder}/${miscImages.horseHead.src}`}
                  className={`${styles.sideImage} ${utilStyles.twitch} ${
                    horseSpin ? styles.horseSpin : ''
                  }`}
                  onClick={spinHorse}
                />
              </div>
              <div className={styles.eyeTitleBox}>
                {/* Can put different things like album releases here in ActionLink */}
                <ActionLink />
                <EyeBox />
                <div className={styles.mainTitleBox}>
                  <h1
                    style={{ color: titleColor }}
                    onClick={handleTitleColor}
                    className={styles.mainTitle}
                  >
                    Pearie Sol
                  </h1>
                </div>
              </div>
              <div className={styles.sideImageBox}>
                <Image
                  width={160}
                  height={160}
                  alt="cat walk"
                  src={`${baseUrl}/${miscImages.cat.folder}/${miscImages.cat.src}`}
                  className={`${styles.sideImage} ${utilStyles.twitch} ${
                    catFlip ? styles.imgVerticalFlip : ''
                  }`}
                  onClick={flipCat}
                />
              </div>
            </div>
            <MainImageBox />

            <footer className={styles.bottomRow}>
              <EmailBox />
            </footer>

            <p className={styles.dumbText}>{dumbText}</p>
          </div>
          <Ticker />
        </div>
      </div>
    </Layout>
  )
}
