import Head from 'next/head'
import Image from 'next/image'
import styles from '../style'
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "../components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HooBank</title>
        <meta name="description" content="HooBank" />
        <link rel="icon" href='../assets/logo.svg' />
      </Head>

      <main className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
