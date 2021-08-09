import { VFC } from "react"

import { CardBase } from "~/styles/card"

const Card: VFC = () => {
  return (
    <CardBase className="card">
      <p>これはカードだぞ</p>
    </CardBase>
  )
}

export default Card
