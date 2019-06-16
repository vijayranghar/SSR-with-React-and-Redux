import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Home from './client/components/home'

const app = express()

app.use(express.static('public'))

app.get('/',(req, res) => {
  const content = renderToString(<Home />)
  const html = `
    <html>
      <head>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
      <script src="bundle.js"></script>
    </html>
  `
  res.send(html)
})

app.listen(8888,() => {
  console.log("Running at port number 8888")
})