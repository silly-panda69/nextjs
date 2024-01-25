import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas'/>
      </Head>
      <div >
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem , ipsum </p>
        <p className={styles.text}>Lorem , ipsum </p>
        <Link className={styles.btn} href="/ninjas">See Ninja Listing</Link>
      </div>
    </>
  )
}
