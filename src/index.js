const express = require('express')
const app = express()
const React = require('react')
const renderToString = require('react-dom/server').renderToString
const Home = require('./client/components/home').default

app.get('/',(req, res) => {
  const content = renderToString(<Home />)
  res.send(content)
})

app.listen(8888,() => {
  console.log("Running at port number 8888")
})