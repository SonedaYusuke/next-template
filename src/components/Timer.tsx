import React, { FC } from 'react'
import { useTimer } from "~/hooks/useTimer"

const Timer: FC = () => {
  const timer = useTimer()

  return (
    <>
      <p>これはタイマーだぞ</p>
      <p>{timer.time}</p>
      <button onClick={() => timer.onStart()}>start</button>
      <button onClick={() => timer.onStop()}>stop</button>
    </>
  )
}

export default Timer
