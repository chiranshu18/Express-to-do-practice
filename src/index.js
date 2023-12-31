const express = require('express')
const app = express()
app.use(express.json())

const todoRouter = require('./routes/todoRoutes')
app.use('/tasks',todoRouter)

const port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})