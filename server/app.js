const express = require('express') // or nest?
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema/schema')

const {log} = console

const app = express()

const PORT = 3030 // .env

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(PORT, err => {
    err ? log(error) : log(`Server listen on ${PORT} port`)
})
