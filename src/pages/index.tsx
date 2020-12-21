import React, { FC } from "react"

import Link from "next/link"

const Index: FC = () => {
  return (
    <div>
      <p>トップページ</p>
      <ul>
        <li><Link href="/about">about</Link></li>
        <li><Link href="/timer">タイマー</Link></li>
      </ul>
    </div>
  )
}

export default Index
