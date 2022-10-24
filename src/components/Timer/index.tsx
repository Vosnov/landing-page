import React, { FC, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { device } from "../../constants";

const Time = styled.p`
  font-weight: 700;
  font-size: 26px;
  line-height: 176px;
  color: #FFF;
  margin-top: 60px;
  color: transparent;
  -webkit-text-stroke: 1px #FFF;
  
  @media ${device.mobileS} {
    font-size: 38px;
  }

  @media ${device.laptop} {
    font-size: 82px;
  }
  
  @media ${device.desktop} {
    font-size: 144px;
    margin-top: 120px;
  }
`

type TimeData = {
  total: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

const getTimeRemaining = (endTime: Date): TimeData => {  
  const t = endTime.getTime() - new Date().getTime();  
  const seconds = Math.floor( (t/1000) % 60 );  
  const minutes = Math.floor( (t/1000/60) % 60 );  
  const hours = Math.floor( (t/(1000*60*60)) % 24 );  
  const days = Math.floor( t/(1000*60*60*24) );  
  return {  
   total: t,  
   days: days,  
   hours: hours,  
   minutes: minutes,  
   seconds: seconds  
  };  
}

const deadLine = new Date()
deadLine.setDate(deadLine.getDate() + 1)


export const Timer: FC = () => {
  const [timer, setTimer] = useState<TimeData>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    total: 0,
  })

  const calcTimer = useCallback(() => {
    const timerData =  getTimeRemaining(deadLine)
    setTimer(timerData)
    return timerData
  }, [])

  useEffect(() => {
    const timerData =  getTimeRemaining(deadLine)
    setTimer(timerData)

    const interval = setInterval(() => {
      const timerData =  getTimeRemaining(deadLine)
      if (timerData.total <= 0) {
        clearInterval(interval)
        return
      }
      setTimer(timerData)
    }, 1000)

    return () => clearInterval(interval)
  }, [calcTimer])

  return (
    <Time>{`${timer?.days}d ${timer?.hours}h ${timer?.minutes}m ${timer?.seconds}s`}</Time>
  )
}