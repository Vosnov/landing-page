import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { TierSection } from './components/TierSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { EventScheduleSection } from './components/EventScheduleSection';
import { Footer } from './components/footer';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <Layout>
      <Hero/>
      <AboutSection/>
      <TierSection/>
      <TestimonialsSection/>
      <EventScheduleSection/>
      <Footer/>
    </Layout>
  );
}

export default App;
