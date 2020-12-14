import React, { FC } from "react"

import Card from "~/components/Card"

import { PinkText } from "~/styles/button.tsx"

const About: FC = () => {
  return (
    <div>
      <PinkText>about</PinkText>
      <Card></Card>
    </div>
  )
}

export default About
