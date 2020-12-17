import React, { FC } from "react"

import Link from "next/link"

const Index: FC = () => {
  return (
    <div>
      <p>トップページ</p>
      <Link href="/about">about</Link>
    </div>
  )
}

export default Index
