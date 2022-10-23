import React, { FC } from "react";
import styled from "styled-components";
import { Button, ButtonTheme } from "../Button";

const Card = styled.div<Pick<Props, 'color'>>`
  width: 370px;
  height: 404px;
  background: #FFFFFF;
  box-shadow: 0px 20px 100px rgba(34, 34, 34, 0.15);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: 0.2s;

  &:hover {
    padding-top: 10px;
    transform: scale(1.05);
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 3px;
    background-color: ${props => props.color};
  }
`

const Title = styled.p<Pick<Props, 'color'>>`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  margin-top: 30px;
  color: ${props => props.color};
`

const Price = styled.p<Pick<Props, 'color'>>`
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 30px;
  color: ${props => props.color};
`

type TextContentProps = {
  isEnabled: boolean
}

const TextContent = styled.p<TextContentProps>`
  font-size: 16px;
  opacity: ${props => props.isEnabled ? '1' : '0.5'};
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
`

type Props = {
  color?: string
  buttonTheme?: ButtonTheme
  title: string
  price: string
  seatCount: number
  seat: boolean
  wifi: boolean
  food: boolean
}

export const TierCard: FC<Props> = ({
    title,
    price,
    buttonTheme,
    seatCount,
    seat,
    wifi,
    food,
    color = '#222222'
  }) => {
  return (
    <Card color={color}>
      <Title color={color}>{title}</Title>
      <Price color={color}>{price}</Price>
      <Content>
        <TextContent isEnabled={seat}>{seatCount} Seat Available</TextContent>
        <TextContent isEnabled={wifi}>Access to Wifi Router</TextContent>
        <TextContent isEnabled={food}>Free Food & Coffee</TextContent>
      </Content>
      <Button theme={buttonTheme}>Get Tickets</Button>
    </Card>
  )
}