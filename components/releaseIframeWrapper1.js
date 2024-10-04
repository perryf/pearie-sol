import { useEffect, useRef, useState } from 'react'
import styles from '../styles/components/releaseIframeWrapper.module.css'

export default function ReleaseIframeWrapper(props) {
  const { src, title, id, releaseHref, releaseMessage } = props

  const [loadedIframe, setLoadedIframe] = useState(false)
  const componentIsMounted = useRef(true)

  useEffect(() => {
    return () => (componentIsMounted.current = false)
  }, [])

  return (
    <div className={styles.iframeBox}>
      {!loadedIframe && (
        <div className={styles.loader}>Patience is a virtue...</div>
      )}
      <iframe
        className={styles.iframe}
        src={src}
        seamless
        onLoad={() => {
          if (componentIsMounted.current) setLoadedIframe(true)
        }}
        title={title}
        id={id}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      />
      <a href={releaseHref} className={styles.releaseLink}>
        {releaseMessage}
      </a>
    </div>
  )
}
