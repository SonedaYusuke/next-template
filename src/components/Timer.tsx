import React, { FC } from 'react'
import { useTimer } from "~/hooks/useTimer"

const Timer: FC = () => {
  const timer = useTimer(100)

  return (
    <>
      <p>これはタイマーだぞ</p>
      <p>{timer.time}</p>
      <button onClick={() => timer.onStart()}>start</button>
      <button onClick={() => timer.onStop()}>stop</button>
      <button onClick={() => timer.onReset()}>reset</button>
      <input type="number" onChange={(e) => timer.onNewTime(e)} placeholder="0" />
      <button onClick={() => timer.changeNewTime()}>set</button>
    </>
  )
}

export default Timer
