import React, { useState, useRef, useEffect, ChangeEvent } from "react"

const useTimer = (initTime: number) => {
  const [time, setTime] = useState<number>(initTime)
  const refTimer = useRef(time)

  useEffect(() => {
    refTimer.current = time
  }, [time])

  const [timerId, setTimerId] = useState<NodeJS.Timeout | number>(0)

  const timer = () => {
    setTime(refTimer.current - 1)
  }

  const onStart = () => {
    setTimerId(setInterval(timer, 1000))
  }

  const onStop = () => {
    clearInterval(timerId as number)
  }

  const onReset = () => {
    setTime(initTime)
  }

  const [newTime, setNewTime] = useState<number>(0)

  const onNewTime = (newTime: ChangeEvent<HTMLInputElement>) => {
    setNewTime(Number(newTime.target.value))
  }

  const changeNewTime = () => {
    setTime(newTime)
  }

  return {
    time,
    onStart,
    onStop,
    onReset,
    onNewTime,
    changeNewTime,
  }
}

export { useTimer }
