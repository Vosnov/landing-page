import React, { FC } from "react";
import styled from "styled-components";
import { HeroImage } from "../../assets/images";
import { Button } from "../Button";
import { Container } from "../Container";
import { Header } from "../Header";
import { Timer } from "../Timer";

const Wrapper = styled.div`
  align-items: center;
  width: 100%;
  background-image: url(${HeroImage});
  background-size: cover;
  height: 964px;
  position: relative;
`

const Title = styled.p`
  font-weight: bold;
  font-size: 72px;
  margin-top: 105px;
  text-align: center;
  color: #FFF;
`

const SubTitle = styled.p`
  font-size: 24px;
  text-align: center;
  margin-top: 40px;
  color: #FFF;
`

const Buttons = styled.div`
  display: flex;
  margin-top: 40px;
  gap: 40px;
`

const Content = styled.div`
  width: 970px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledSpan = styled.span`
  color: #FFA3A3;
`

export const Hero: FC = () => {
  return (
    <Wrapper>
      <Container>
        <Header/>
        <Content>
          <Title>The Best experience of <StyledSpan>Music</StyledSpan> in 2021</Title>
          <SubTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ligula placerat, eleifend ex non, vehicula libero. Suspendisse eget tellus lectus.</SubTitle>
          <Buttons>
            <Button theme={'red'}>Get Started</Button>
            <Button theme={'transparent'}>Watch Video</Button>
          </Buttons>
        </Content>
        <Timer/>
      </Container>
    </Wrapper>
  )
}