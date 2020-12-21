import React, { useState, useRef, useEffect } from 'react'

const useTimer = () => {
  const [time, setTime] = useState<number>(10)
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

  return {
    time, onStart, onStop
  }
}

export {
  useTimer
}