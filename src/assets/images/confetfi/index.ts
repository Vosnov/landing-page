import {default as ConfettiImage1} from './Confetti-1.svg' 
import {default as ConfettiImage2} from './Confetti-2.svg' 
import {default as ConfettiImage3} from './Confetti-3.svg' 
import {default as ConfettiImage4} from './Confetti-4.svg' 
import {default as ConfettiImage5} from './Confetti-5.svg' 
import {default as ConfettiImage6} from './Confetti-6.svg' 
import {default as ConfettiImage7} from './Confetti-7.svg' 
import {default as ConfettiImage8} from './Confetti-8.svg' 
import {default as ConfettiImage9} from './Confetti-9.svg' 
import {default as ConfettiImage10} from './Confetti-10.svg' 
import {default as ConfettiImage11} from './Confetti-11.svg' 
import {default as ConfettiImage12} from './Confetti-12.svg' 
import {default as ConfettiImage13} from './Confetti-13.svg' 

const images = [
  ConfettiImage1,
  ConfettiImage2,
  ConfettiImage3,
  ConfettiImage4,
  ConfettiImage5,
  ConfettiImage6,
  ConfettiImage7,
  ConfettiImage8,
  ConfettiImage9,
  ConfettiImage10,
  ConfettiImage11,
  ConfettiImage12,
  ConfettiImage13,
]

export const getRandomConfetti = () => {
  return images[Math.floor(Math.random()*images.length)];
}