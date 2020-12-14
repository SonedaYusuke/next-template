import React, { FC } from "react"
import Head from 'next/head'
import styles from "../styles/Home.module.css"

const Index:FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>トップページ</p>
    </div>
  )
}

export default Index
