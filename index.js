const express = require('express')
const app = express()

app.get('/home', function (req, res) {
  res.send('Hello World')
})
app.get('/login', function(req,res){
    res.send('login page')
})
app.listen(3000)