import React, { FC, useCallback, useState } from 'react'
import styled from 'styled-components'
import { LogoImage, MenuIcon } from '../../assets/images'
import { device } from '../../constants'
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
  display: none;
  gap: 50px;

  @media ${device.laptop} {
    display: flex;
  }
`

const BurgerButton = styled.button`
  display: block;

  @media ${device.laptop} {
    display: none;
  }
`

const BurgerIcon = styled.img`
  width: 40px;
`

const MobileMenu = styled.div<{isActive?: boolean}>`
  position: fixed;
  top: 0;
  left: ${props => props.isActive ? '0px' : '-100%'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 30px 10px;
  transition: 0.25s ease-in-out;
  height: 100%;
  background-color: #391ddb;
  z-index: 10;

  a {
    font-size: 40px;
  }
`

export const Header: FC = () => {
  const [menuIsActive, setMenuIsActive] = useState(false)

  const toggleMenu = useCallback(() => {
    setMenuIsActive(prev => !prev)
  }, [])
 
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

      <BurgerButton onClick={toggleMenu}>
        <BurgerIcon src={MenuIcon} alt="Menu"/>
      </BurgerButton>

      <MobileMenu isActive={menuIsActive}>
        <Link href='/'>Home</Link>
        <Link href='/'>Speakers</Link>
        <Link href='/'>Schedule</Link>
        <Link href='/'>Contact Us</Link>
      </MobileMenu>
    </Wrapper>
  )
}