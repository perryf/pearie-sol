import Layout from '../components/layout'
import ReleaseIframeWrapper from '../components/releaseIframeWrapper'
import styles from '../styles/pages/releases.module.css'

export default function Releases() {
// ? bandcamp iframe does a weird thing where if you refresh on the page it doesn't load the iframe. Not having problem with youtube embed. But if you start on another page and click over, it works fine? Not sure what this is.
  return (
    <Layout location="releases">
      <div className={styles.releasesPage}>
        <ReleaseIframeWrapper
          src="https://bandcamp.com/EmbeddedPlayer/album=1459803237/size=large/bgcol=333333/linkcol=9a64ff/tracklist=false/transparent=true/"
          title="Synthetic Life"
          id="bandCampEmbedSyntheticLife"
          releaseHref="https://peariesol.bandcamp.com/album/synthetic-life/"
          releaseMessage="Self Released on Wollumbinia Records"
          lazy
        />

        <ReleaseIframeWrapper
          src="https://bandcamp.com/EmbeddedPlayer/album=3036115136/size=large/bgcol=333333/linkcol=e55e10/tracklist=false/transparent=true/"
          title="Real Happiness"
          id="bandCampEmbedRealHappiness"
          releaseHref="https://www.hhbtm.com/product/pearie-sol-real-happiness/"
          releaseMessage="Available on Happy Happy Birthday To Me Records"
          lazy
        />

        <ReleaseIframeWrapper
          src="https://bandcamp.com/EmbeddedPlayer/album=797557584/size=large/bgcol=333333/linkcol=cccccc/tracklist=false/transparent=true/"
          title="pearie sol s/t tape"
          id="bandCampEmbedST"
          releaseHref="http://sisterpolygonrecords.bigcartel.com/"
          releaseMessage="Available on Sister Polygon Records"
          lazy
        />
      </div>
    </Layout>
  )
}
