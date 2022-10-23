import React, { FC } from "react";
import styled from "styled-components";
import 'swiper/css';
import { SingersImage } from "../../assets/images";
import { AboutImage } from "../../assets/images";
import { CategoryCardSlider } from "../../CategoryCardSlider";
import { Button } from "../Button";
import { Container } from "../Container";

const Wrapper = styled.section`
  margin-top: 240px; 
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  &:last-child {
    margin-bottom: 240px;
  }
`

const Title = styled.p`
  font-size: 34px;
  font-weight: bold;
`

const Label = styled.p`
  font-size: 16px;
  color: #222222;
  margin-top: 32px;
  margin-bottom: 80px;
`

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const StyledAboutImage = styled.img`
  width: 550px;
`

const StyledSingerImage = styled.img`
  width: 672px;
`

export const AboutSection: FC = () => {
  return (
    <>
      <CategoryCardSlider/>
      <Container>
        <Wrapper>
          <StyledAboutImage src={AboutImage}/>
          <TextContent>
            <Title>About Musik</Title>
            <Label>Fusce justo mi, vehicula id arcu et, dapibus tristique lectus. Vivamus a elit sodales, tincidunt nunc non, maximus lacus. Fusce a augue sed dolor auctor iaculis vitae id mauris. Integer ut lectus non neque suscipit luctus. Mauris et erat id ipsum condimentum cursus. Sed tempus enim non massa mattis iaculis. In quis massa risus</Label>
            <Button theme={'blue'}>Learn More</Button>
          </TextContent>
        </Wrapper>
        <Wrapper>
          <TextContent>
            <Title>Singers</Title>
            <Label>Fusce justo mi, vehicula id arcu et, dapibus tristique lectus. Vivamus a elit sodales, tincidunt nunc non, maximus lacus. Fusce a augue sed dolor auctor iaculis vitae id mauris. Integer ut lectus non neque suscipit luctus. Mauris et erat id ipsum condimentum cursus. Sed tempus enim non massa mattis iaculis. In quis massa risus</Label>
            <Button theme={'blue'}>Learn More</Button>
          </TextContent>
          <StyledSingerImage src={SingersImage}/>
        </Wrapper>
      </Container>
    </>
  )
}