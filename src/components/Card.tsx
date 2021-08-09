import { VFC } from "react"
import { CardBase } from "~/styles/card"

const Card: VFC = () => {
  return (
    <div css={CardBase} className="card">
      <p>これはカードだぞ</p>
    </div>
  )
}

export default Card
