import { VFC, useState } from "react"

const Card: VFC = () => {
  const initVal = 0
  const [count, setCount] = useState(initVal)
  return (
    <>
      <p>これはカウンターだぞ</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(initVal)}>リセット</button>
    </>
  )
}

export default Card
