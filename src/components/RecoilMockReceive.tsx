import React, { VFC } from "react"

import { atom, useRecoilValue, selector } from "recoil"

const userState = atom<number>({
  key: "userState",
  default: 0,
})

const userCountState = selector({
  key: "usetState",
  get: ({ get }) => {
    const user = get(userState)
    return user + 1
  },
})

const RecoilMock: VFC = () => {
  const user = useRecoilValue(userCountState)
  return (
    <div>
      <p>こいつは受け取ってくれる側、+1してる</p>
      <p>{user}</p>
    </div>
  )
}

export default RecoilMock
