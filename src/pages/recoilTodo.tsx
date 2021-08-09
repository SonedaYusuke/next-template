import React, { VFC } from "react"

import Todo from "~/components/Todo"

const Recoil: VFC = () => {
  return (
    <div>
      <h1>recoilによるTODOリスト</h1>
      <Todo></Todo>
    </div>
  )
}

export default Recoil
