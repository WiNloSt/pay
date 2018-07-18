import React from 'react'
import styled, { ThemeProvider as Provider } from 'styled-components'
import { darken } from '../../node_modules/polished'

const main = '#0af'
const accent = '#fa3'

const defaultTheme = {
  main: {
    color: 'white',
    bg: main
  },
  secondary: {
    color: main,
    bg: 'white'
  },
  disabled: {
    color: 'white',
    bg: '#aaa'
  },
  accent: {
    color: 'white',
    bg: accent
  },
  space: {
    s: '0.25rem',
    m: '0.5rem',
    l: '1rem',
    xl: '2rem',
    xxl: '4rem'
  },
  borderRadius: '0.5rem'
}

const GlobalStyle = styled.div`
  font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
    'Lucida Grande', sans-serif;
  color: #333;
  font-size: 16px;
  margin: 0;
  padding: 0;

  a {
    color: ${darken(0.1, main)};
    cursor: pointer;
  }
`

export const ThemeProvider = props => (
  <GlobalStyle>
    <Provider {...props} theme={defaultTheme} />
  </GlobalStyle>
)
