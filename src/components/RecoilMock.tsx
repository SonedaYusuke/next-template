import React, { VFC, ChangeEvent } from "react"

import { atom, useRecoilState } from "recoil"

const userState = atom<number>({
  key: "userState",
  default: 0,
})

const RecoilMock: VFC = () => {
  const [user, setUser] = useRecoilState<number>(userState)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser(Number(event.target.value))
  }

  return (
    <div>
      <p>こいつは送信側</p>
      <p>{user}</p>
      <input type="number" onChange={(event) => onChange(event)} />
    </div>
  )
}

export default RecoilMock
