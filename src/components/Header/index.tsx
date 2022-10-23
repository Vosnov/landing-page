import React, { FC } from 'react'
import styled from 'styled-components'
import { LogoImage } from '../../assets/images'
import { Button } from '../Button'

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  width: 100%;
`

const Logo = styled.img`
  height: 30px;
`

const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`

const Link = styled.a`
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  color: #FFF;
  cursor: pointer;
`

const Content = styled.div`
  display: flex;
  gap: 50px;
`

export const Header: FC = () => {
  return (
    <Wrapper>
      <Logo alt='logo' src={LogoImage}/>

      <Content>
        <LinksWrapper>
          <Link href='/'>Home</Link>
          <Link href='/'>Speakers</Link>
          <Link href='/'>Schedule</Link>
          <Link href='/'>Contact Us</Link>
        </LinksWrapper>
        <Button theme={'white'}>GET TICKETS</Button>
      </Content>
    </Wrapper>
  )
}