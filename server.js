const express = require('express')

var time = require('./server/time')

var names = require('./server/mongodb')

const app = express()
const port = process.env.PORT || 5000

//Der Server lässt ohne diesen Befehl keinen Datenaustausch zu. (CORS enabled)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' })
  next()
})

app.get('/', (req, res) => {
  res.json({ text: "Hello From Server" })
  next()
})

app.use('/api/time', time)

app.use('/api/names', names)

app.listen(port, () => console.log(`Listening on port ${port}`))