import path from 'node:path'
import express from 'express'
import { todosRouter } from './routes/todos.mjs'

const __dirname = import.meta.dirname

const port = 8080
const host = 'localhost'

const apiPath = '/api/v1'
const app = express()

app.use(express.static(path.join(__dirname, 'static')))
app.use(express.json())

// request logger middleware
app.use((req, res, next) => {
  console.log(`\n${req.method} ${req.url}\n${JSON.stringify(req.body)}`)
  next()
})

app.use(apiPath + '/todos', todosRouter)

app.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`)
})
