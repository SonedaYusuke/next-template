import React, { FC } from "react"

import { CardBase } from "~/styles/card"

const Card: FC = () => {
  return (
    <CardBase className="card">
      <p>これはカードだぞ</p>
    </CardBase>
  )
}

export default Card
