
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  
})

app.get('/home', (req,res)=> {
    res.send('WELCOME')
})
    

app.get('/Chetam3', (req,res)=> {
    res.send('cheygodno')
    })

app.listen(port, () => {
  console.log(`server running at port ${port}`)
})