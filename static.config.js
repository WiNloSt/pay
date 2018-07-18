import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'

export default {
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/pages/Home'
      },
      {
        is404: true,
        component: 'src/pages/404'
      }
    ]
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render() {
      // eslint-disable-next-line react/prop-types
      const { Html, Head, Body, children, renderMeta } = this.props

      const faviconSection = (
        <React.Fragment>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00aaff" />
          <meta name="msapplication-TileColor" content="#d4efff" />
          <meta name="theme-color" content="#ffffff" />
        </React.Fragment>
      )

      return (
        <Html>
          <Head>
            <title>Pay</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css" />
            {faviconSection}
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  }
}
