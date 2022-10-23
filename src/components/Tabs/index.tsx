import React, { AnimationEvent, FC, useCallback, useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

export type TabData = {
  title: string
  label: string
  content: React.ReactNode
}

type Props = {
  tabs: TabData[]
} 

type TabProps = {
  isActive: boolean
}

const ShowAnimation = keyframes`
  0% {
    transform: translateX(-1000px);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

const HideAnimation = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }

  100% {
    transform: translateX(1000px);
    opacity: 0;
  }
`

const Content = styled.div<{show: boolean}>`
  width: 100%;
  animation-fill-mode: both;
	animation-duration: 0.2s;
	animation-name: ${props => props.show ? ShowAnimation : HideAnimation};
	animation-iteration-count: 1;
	animation-timing-function: ease-in-out;
`

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`

const Head = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  margin-bottom: 8px;
`

const HeadSlide = styled.div`
  width: 0px;
  height: 4px;
  background-color: #381DDB;
  transition: 0.5s ease-in-out;
  position: absolute;
  left: 0px;
  bottom: -8px;
`

const Tab = styled.button`
  width: 100%;
  text-align: left;
`

const HeadTitle = styled.p<TabProps>`
  font-size: 24px;
  font-weight: bold;
  opacity: ${props => props.isActive ? 1 : .5};
  color: ${props => props.isActive ? '#381DDB' : undefined};
`

const HeadLabel = styled.p<TabProps>`
  font-weight: bold;
  font-size: 16px;
  opacity: ${props => props.isActive ? .5 : .2};
  color: ${props => props.isActive ? '#381DDB' : undefined};
`

type SlideData = {
  width: number
  left: number
}

export const Tabs: FC<Props> = ({tabs}) => {
  const [slide, setSlide] = useState<SlideData>({width: 0, left: 0})
  const [activeIndex, setActiveIndex] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [show, setShow] = useState(true)
  const headRef = useRef<HTMLDivElement>(null)

  const changeTabHandler = useCallback((index: number) => {
    return () => {
      if (activeIndex === index) return

      setActiveIndex(index)
      setShow(false)
    }
  }, [activeIndex])

  useEffect(() => {
    if (!headRef.current) return

    const activeElement = headRef.current.childNodes[activeIndex] as HTMLButtonElement
    let left = 0
    for(let i = 0; i < activeIndex; i++) {
      const btn = headRef.current.childNodes[i] as HTMLButtonElement
      left += btn.clientWidth
    }

    setSlide({
      left,
      width: activeElement.clientWidth
    })
  }, [activeIndex, headRef])

  const animationEndHandler = useCallback((e: AnimationEvent<HTMLDivElement>) => {
    if (e.animationName === HideAnimation.getName()) {
      setShow(true)
      setCurrentIndex(activeIndex)
    }
  }, [activeIndex])

  return (
    <Wrapper>
      <Head ref={headRef}>
        {tabs.map((tab, index) => 
          <Tab onClick={changeTabHandler(index)} key={tab.title}>
            <HeadTitle isActive={activeIndex === index}>{tab.title}</HeadTitle>
            <HeadLabel isActive={activeIndex === index}>{tab.label}</HeadLabel>
          </Tab>
        )}
        <HeadSlide style={{width: slide.width, left: `${slide.left}px`}}/>
      </Head>
      <Content onAnimationEnd={animationEndHandler} show={show}>
        {tabs[currentIndex].content}
      </Content>
    </Wrapper>
  )
}