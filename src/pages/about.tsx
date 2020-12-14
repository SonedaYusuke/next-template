import React, { FC } from "react"
import Head from "next/head"

import { PinkText } from "~/styles/button.tsx"

const About: FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PinkText>about</PinkText>
    </div>
  )
}

export default About
