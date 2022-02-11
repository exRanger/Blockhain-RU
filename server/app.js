const express = require('express') // or nest?
const {graphqlHTTP} = require('express-graphql')
const {mongoose} = require('mongoose')
const fs = require('fs')
const path = require('path')
const schema = require('./schema/schema')

const {log} = console

const uri // from .env ....
const app = express()
const PORT = 3030 // .env

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.get('/nocors', (req, res) => {
  res.send('ok')
});

app.use(require('cors')())

app.get('/cors', (req, res) => {
  res.send('ok')
})

app.listen(PORT, err => {
    err ? log(error) : log(`Server listen on ${PORT} port`)
})
