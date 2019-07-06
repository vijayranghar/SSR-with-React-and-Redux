import 'babel-polyfill'
import express from 'express'
import renderer from './helper/renderer'
import createStore from './helper/createStore'
const app = express()

app.use(express.static('public'))

app.get('*',(req, res) => {
  const store = createStore()
  //some logic to initialize 
  // and load data into the store
  res.send(renderer(req, store))
})

app.listen(8888,() => {
  console.log("Running at port number 8888")
})