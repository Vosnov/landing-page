import React, { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div<Pick<Props, 'color'>>`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.color || '#381DDB'};
  gap: 30px;
  padding: 90px 60px 36px 60px;
  border-radius: 24px;
`

const Image = styled.img`
  width: 40px;
`

const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
`

const Label = styled.p`
  font-size: 16px;
`

type Props = {
  title: string
  img: string
  color?: string
}

export const CategoryCard: FC<Props> = ({
  title,
  img,
  color
}) => {
  return (
    <Wrapper color={color}>
      <Image alt="Category Icon" src={img}/>
      <Title>{title}</Title>
      <Label>Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae</Label>
    </Wrapper>
  )
}