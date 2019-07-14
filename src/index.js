import 'babel-polyfill'
import express from 'express'
import { matchRoutes } from 'react-router-config'
import Routes from './client/Routes'
import renderer from './helper/renderer'
import createStore from './helper/createStore'
const app = express()

app.use(express.static('public'))

app.get('*',(req, res) => {
  const store = createStore()
  const promises = matchRoutes(Routes, req.path).map(({route}) => (
    route.loadData ?  route.loadData(store) : null
  ))
  Promise.all(promises).then(() => {
    res.send(renderer(req, store))
  })
})

app.listen(8888,() => {
  console.log("Running at port number 8888")
})