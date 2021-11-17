// Declarations
const express = require('express')
const app = express()
const routesReport = require('rowdy-logger').begin(app)
const path = require('path')


// initializations





app.get('/', (req, res) => {
  const filepath = path.join(__dirname, 'index.html')
  res.sendFile(filepath)
})

app.get('/main.js', (req, res) => {
  const filepath = path.join(__dirname, 'main.js')
  res.sendFile(filepath)
})

app.get('/style.css', (req, res) => {
  const filepath = path.join(__dirname, 'style.css')
  res.type('css').sendFile(filepath)
})

// Code Here

const port = process.env.PORT || 3002
app.listen(port, () => {
  routesReport.print()
})