import React, { FC } from "react"

import Todo from "~/components/Todo.tsx"

const Recoil: FC = () => {
  return (
    <div>
      <h1>recoilによるTODOリスト</h1>
      <Todo></Todo>
    </div>
  )
}

export default Recoil
