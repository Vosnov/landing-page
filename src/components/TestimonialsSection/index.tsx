import React, { FC } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { device } from "../../constants";
import { Container } from "../Container";
import { TestimonialsCard } from "../TestimonialsCard";

const Wrapper = styled.section`
  width: 100%;
  padding: 0 10px;

  @media ${device.laptop} {
    padding: 0;
  }
`

const Title = styled.p`
  font-weight: bold;
  font-size: 34px;
  margin-bottom: 60px;
`

const StyledSwiper = styled(Swiper)`
  width: 100%;
  cursor: grab;
`

export const TestimonialsSection: FC = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Testimonials</Title>
      </Container>
      <StyledSwiper
          breakpoints={{
            450: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3
            },
          }}
        spaceBetween={30}
        centeredSlides
        initialSlide={1}
      >
        {new Array(4).fill(null).map((_, index) => (
          <SwiperSlide key={index}>
             <TestimonialsCard/>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </Wrapper>
  )
}