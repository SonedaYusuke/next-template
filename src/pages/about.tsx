import React, { VFC } from "react"

import Card from "~/components/Card"
import Counter from "~/components/Counter"

import { PinkText } from "~/styles/button"

const About: VFC = () => {
  return (
    <div>
      <PinkText>about</PinkText>
      <Card></Card>
      <Counter></Counter>
    </div>
  )
}

export default About
