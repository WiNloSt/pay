import React from 'react'
import styled, { ThemeProvider as Provider } from 'styled-components'

const main = '#0af'
const accent = '#fa3'

const defaultTheme = {
  color: {
    main: 'white',
    mainSec: main
  },
  bgColor: {
    main: main,
    mainSec: 'white',
    accent: accent
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
`

export const ThemeProvider = props => (
  <GlobalStyle>
    <Provider {...props} theme={defaultTheme} />
  </GlobalStyle>
)
