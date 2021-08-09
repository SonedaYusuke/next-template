import { VFC } from "react"

import RecoilMock from "~/components/RecoilMock"
import RecoilMockReceiver from "~/components/RecoilMockReceive"

const Recoil: VFC = () => {
  return (
    <div>
      <h1>recoilやるよー</h1>
      <RecoilMock />
      <RecoilMockReceiver />
    </div>
  )
}

export default Recoil
