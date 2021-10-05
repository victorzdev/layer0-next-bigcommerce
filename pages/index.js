import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Layer0 Commerce</title>
        <meta name="description" content="Layer0 Next.js Commerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main></main>
      <footer></footer>
    </div>
  )
}
