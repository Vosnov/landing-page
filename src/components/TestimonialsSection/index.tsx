import React, { FC } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "../Container";
import { TestimonialsCard } from "../TestimonialsCard";

const Wrapper = styled.section`
  width: 100%;
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
        spaceBetween={30}
        slidesPerView={3}
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