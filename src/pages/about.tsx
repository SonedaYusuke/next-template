import React, { FC } from "react"

import Card from "~/components/Card"
import Counter from "~/components/Counter"

import { PinkText } from "~/styles/button.tsx"

const About: FC = () => {
  return (
    <div>
      <PinkText>about</PinkText>
      <Card></Card>
      <Counter></Counter>
    </div>
  )
}

export default About
