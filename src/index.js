const express = require('express')
const app = express()

app.get('/',(req, res) => {

})

app.listen(8888,() => {
  console.log("Running at port number 8888")
})