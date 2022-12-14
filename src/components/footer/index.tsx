import React, { FC } from "react";
import styled from "styled-components";
import { FacebookImage, LogoImage } from "../../assets/images";
import { Container } from "../Container";

const Wrapper = styled.footer`
  background-color: #222222;
  width: 100%;
  margin-top: 60px;
  padding: 40px 10px 35px 10px;
`

const StyledContainer = styled(Container)`
  align-items: flex-start;
`

const Logo = styled.img`
  height: 30px;
  margin-bottom: 55px;
`

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 30px;
`

const Links = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`

const Link = styled.a`
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  color: #FFF;
`

const SocialImage = styled.img`
  
`

const links = ['Home', 'Company', 'Blog', 'Contact us', 'Sitemap']

export const Footer: FC = () => {
  return (
    <Wrapper>
      <StyledContainer>
        <Logo src={LogoImage} alt='logo'/>
        <Info>
          <Links>
            {links.map(link => <Link key={link} href="/">{link}</Link>)}
          </Links>
          <Links>
            <Link href="/">
              <SocialImage aria-label="Facebook" alt="Social Image" src={FacebookImage}/>
            </Link>
            <Link href="/">
              <SocialImage aria-label="Facebook" alt="Social Image" src={FacebookImage}/>
            </Link>
            <Link href="/">
              <SocialImage aria-label="Facebook" alt="Social Image" src={FacebookImage}/>
            </Link>
            <Link href="/">
              <SocialImage aria-label="Facebook" alt="Social Image" src={FacebookImage}/>
            </Link>
          </Links>
        </Info>
      </StyledContainer>
    </Wrapper>
  )
}