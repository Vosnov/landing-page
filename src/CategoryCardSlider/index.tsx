import React, { FC } from 'react'
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { CategoryCard } from '../components/CategoryCard';
import { DjMixerImage, GuitarImage, SaxophoneImage, TrumpetImage } from '../assets/images';
import { Container } from '../components/Container';

const StyledSwiper = styled(Swiper)`
  width: 100%;
  cursor: grab;
`

const Wrapper = styled.div`
  width: 100%;
`

const Title = styled.p`
  font-size: 34px;
  font-weight: bold;
  margin-bottom: 60px;
  margin-top: 240px;
  text-align: left;
  width: 100%;
` 

const StyledSpan = styled.span`
  color: #381DDB;
`

const slides = [
  {
    title: 'Pop',
    color: '#DB841D1A',
    img: DjMixerImage,
  },
  {
    title: 'Rock',
    color: '#FC52521A',
    img: GuitarImage,
  },
  {
    title: 'Jazz',
    color: '#381DDB',
    img: SaxophoneImage,
  },
  {
    title: 'Disco',
    color: '#C000961A',
    img: DjMixerImage,
  },
  {
    title: 'Metal',
    color: '#84C4FF1A',
    img: GuitarImage,
  },
  {
    title: 'Folk',
    color: '#DB841D1A',
    img: TrumpetImage,
  }
]

export const CategoryCardSlider: FC = () => {
  return (
    <Wrapper>
      <Container>
        <Title>
          <StyledSpan>Explore</StyledSpan> By Category
        </Title>
      </Container>
      <StyledSwiper
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3
          },
          1400: {
            slidesPerView: 4,
          },
          1700: {
            slidesPerView: 5
          }
        }}
        spaceBetween={30}
        modules={[Autoplay]}
        freeMode
        autoplay={{
          delay: 2000,
        }}
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.title}>
            <CategoryCard title={slide.title} img={slide.img} color={slide.color}/>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </Wrapper>
  )
}