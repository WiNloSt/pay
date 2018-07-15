import React from 'react'
import 'normalize.css'
import { ThemeProvider } from '../components/ThemeProvider'

// eslint-disable-next-line react/prop-types
export default ({ children, ...props }) => (
  <ThemeProvider>{React.cloneElement(children, props)}</ThemeProvider>
)
