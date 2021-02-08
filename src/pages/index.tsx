import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        Main
      </main>
      <Footer />

    </div>
  )
}
