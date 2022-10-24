import React, { FC } from "react";
import styled from "styled-components";
import { device } from "../../constants";
import { Container } from "../Container";
import { TierCard } from "../TierCard";

const Title = styled.p`
  font-weight: 700;
  font-size: 34px;
  margin-bottom: 60px;
  text-align: center;
`

const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 30px;
`

const StyledContainer = styled(Container)`
  padding: 0 10px;


  @media ${device.laptop} {
    padding: 0
  }
`

export const TierSection: FC = () => {
  return (
    <StyledContainer>
      <Title>Choose a Tier that’s right for you</Title>
      <Cards>
        <TierCard food={false} seat seatCount={1} wifi={false} title='Basic' price='$100' buttonTheme="blue" color="#222222"/>
        <TierCard food={false} seat seatCount={1} wifi title='Standart' price='$150' buttonTheme="transparent-border" color="#381DDB"/>
        <TierCard food seat seatCount={2} wifi title='Premium' price='$200' buttonTheme="blue" color="#FC5252"/>
      </Cards>
    </StyledContainer>
  )
}