import React from 'react'

export const PageSelector = ({ children, page }) =>
  React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      className: page === index ? '' : 'dn'
    })
  )
