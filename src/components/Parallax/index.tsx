import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { getRandomConfetti } from "../../assets/images/confetfi";

const Confetti = styled.img`
  position: absolute;
  max-width: 60px;
  z-index: -2;
`

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const confettiArray = new Array(15).fill(null).map(() => ({top: `${getRandomInt(10, 100)}%`, left: `${getRandomInt(0, 100)}%`, img: getRandomConfetti()}))

export const Parallax: FC = () => {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const func = () => setOffsetY(window.scrollY)
    window.addEventListener('scroll', func)

    return () => window.removeEventListener('scroll', func)
  }, [])

  return (
    <Wrapper style={{
      transform: `translateY(${offsetY * 0.5}px)`,
    }}>
      {confettiArray.map((item) => <Confetti style={{left: item.left, top: item.top}} src={item.img}/>)}
    </Wrapper>
  )
}