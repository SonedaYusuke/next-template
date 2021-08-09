import { VFC } from "react"

import Todo from "~/components/Todo"

const Recoil: VFC = () => {
  return (
    <div>
      <h1>recoilによるTODOリスト</h1>
      <Todo />
    </div>
  )
}

export default Recoil
