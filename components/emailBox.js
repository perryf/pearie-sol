import styles from '../styles/components/emailBox.module.css'

export default function EmailBox() {
  return (
    <>
      <div className={styles.contactInfo}>
        <a
          href="mailto:solpearie@gmail.com?Subject=Hello%20Dolly"
          target="_top"
        >
          <p className={styles.contactInfoEmail}>Email Me!</p>
        </a>
      </div>
      <div className={styles.contactInfo}>
        <a href="https://www.instagram.com/peariesol/" target="_blank">
          <p className={styles.contactInfoEmail}>'Gram Me!</p>
        </a>
      </div>
    </>
  )
}
