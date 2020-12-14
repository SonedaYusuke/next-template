import React, { FC } from "react"
import Head from "next/head"
import styles from "../styles/Home.module.css"

import styled from "@emotion/styled"

const PinkText = styled.div({
  color: "hotpink",
  fontSize: "32px",
})


const About: FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PinkText>about</PinkText>
    </div>
  )
}

export default About
