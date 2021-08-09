import React, { VFC } from "react"

import RecoilMock from "~/components/RecoilMock.tsx"
import RecoilMockReceiver from "~/components/RecoilMockReceive.tsx"

const Recoil: VFC = () => {
  return (
    <div>
      <h1>recoilやるよー</h1>
      <RecoilMock></RecoilMock>
      <RecoilMockReceiver></RecoilMockReceiver>
    </div>
  )
}

export default Recoil
