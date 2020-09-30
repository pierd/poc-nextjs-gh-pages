import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'


class SomeComponent extends React.Component {
  render() {
    return (
      <span>{this.props.data}</span>
    )
  }
}

export default function Home() {
  const router = useRouter();
  const { data } = router.query;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          <SomeComponent data={data} />
        </p>
      </main>
    </div>
  )
}
