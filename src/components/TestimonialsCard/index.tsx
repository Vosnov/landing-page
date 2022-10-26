import React, { FC } from "react";
import styled from "styled-components";
import { AvatarImage, QuotesImage } from "../../assets/images";

const Wrapper = styled.div`
  max-width: 770px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    left: 0;
    top: 0;
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    height: 232px;
    background: rgba(34, 34, 34, 0.03);
  }
`

const Text = styled.p`
  margin: 60px;
  font-size: 14px;
  text-align: center;
  position: relative;
`

type QuotesProps = {
  direction: 'left' | 'right'
}

const Quotes = styled.img<QuotesProps>`
  width: 30px;
  height: 30px;
  position: absolute;

  ${props => {
    if (props.direction === 'left') {
      return `
        left: -30px;
        top: -30px
      `
    }

    if (props.direction === 'right') {
      return `
        right: -30px;
        bottom: -30px;
      `
    }
  }}
`

const Profile = styled.div`
  display: flex;
  flex-direction: column;
`

const Avatar = styled.img`
  border-radius: 100%;
  width: 120px;
  height: 120px;
  margin-bottom: 20px;
`

const Name = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
`

const Link = styled.a`
  font-size: 16px;
  color: #381DDB;
`

export const TestimonialsCard: FC = () => {
  return (
    <Wrapper className="testimonials">
      <Text>
        <Quotes alt="Quotes Image" direction="left" src={QuotesImage}/>
        <Quotes alt="Quotes Image" direction="right" src={QuotesImage}/>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </Text>
      <Profile>
        <Avatar alt="Avatar" src={AvatarImage}/>
        <Name>Johnny Doe</Name>
        <Link href="#">placeholder.com</Link>
      </Profile>
    </Wrapper>
  )
}