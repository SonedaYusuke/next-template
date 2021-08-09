import { VFC } from "react"
import Link from "next/link"

const Index: VFC = () => {
  return (
    <div>
      <p>トップページ</p>
      <ul>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/timer">タイマー</Link>
        </li>
        <li>
          <Link href="/recoil">recoil</Link>
        </li>
        <li>
          <Link href="/recoilTodo">todo</Link>
        </li>
      </ul>
    </div>
  )
}

export default Index
