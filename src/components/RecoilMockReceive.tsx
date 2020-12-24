import React, { FC, ChangeEvent } from "react"

import { atom, useRecoilState } from "recoil"

const userState = atom<number>({
  key: "userState",
  default: 0
})

const RecoilMock: FC = () => {
  const [user, setUser] = useRecoilState<number>(userState)

  return (
    <div>
      <p>こいつは受け取ってくれる側</p>
      <p>{user}</p>
    </div>
  )
}

export default RecoilMock
