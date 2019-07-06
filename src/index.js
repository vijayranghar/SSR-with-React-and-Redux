import express from 'express'
import React from 'react'
import renderer from './helper/renderer'

const app = express()

app.use(express.static('public'))

app.get('/',(req, res) => {
  res.send(renderer(req))
})

app.listen(8888,() => {
  console.log("Running at port number 8888")
})