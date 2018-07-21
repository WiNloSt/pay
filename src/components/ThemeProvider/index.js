import React from 'react'
import { ThemeProvider as Provider, injectGlobal } from 'styled-components'
import { darken } from 'polished'

import pattern from './assets/black-opaque.png'

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
    s: 0.25,
    m: 0.5,
    l: 1,
    xl: 2,
    xxl: 4
  },
  borderRadius: '0.5rem'
}

injectGlobal`
  body {
    position: relative;
    min-height: 100%;
    height: auto !important; /* override and design's default */

    &::after {
      content: '';
      position: absolute;
      opacity: 0.5;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-image: url(${pattern});
      z-index: -1;
    }
  }

  a {
      color: ${darken(0.1, main)};
      cursor: pointer;
    }
`

export const ThemeProvider = props => <Provider {...props} theme={defaultTheme} />
