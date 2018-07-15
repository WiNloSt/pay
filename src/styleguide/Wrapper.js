import React from 'react'
import 'normalize.css'

export default ({ children, ...props }) => React.cloneElement(children, props)
