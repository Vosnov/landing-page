import styled from 'styled-components'

export type ButtonTheme = 'blue' | 'white' | 'red' | 'transparent' | 'transparent-border'

type Props = {
  theme?: ButtonTheme
}

const getColor = (theme: ButtonTheme) => {
  switch(theme) {
    case 'blue':
      return `
        color: #FFF;
        background-color: #381DDB;
      `
    case 'white': 
      return `
        color: #381DDB;
        background-color: #FFF;
      `
    case 'red': 
      return `
        color: #FFF;
        background-color: #FC5252;
      `
    case 'transparent': 
      return `
        color: #FFF;
        background-color: transparent;
      `
    case 'transparent-border':
      return `
        color: #381DDB;
        background-color: transparent;
        border: 1px solid #381DDB;
      `
    default:
      return `
        color: #381DDB;
        background-color: #FFF;
      `
  }
}

export const Button = styled.button<Props>`
  padding: 18px 34px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;

  ${props => {
    return getColor(props.theme)
  }}
`