import path from 'node:path'
import express from 'express'
import { todosService } from './todosService.mjs'

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

app.get(apiPath + '/todos', (req, res) => {
  res.send(todosService.findAll())
})

app.get(apiPath + '/todos/:id', (req, res) => {
  const { id } = req.params
  const todo = todosService.findById(id)
  if (!todo) {
    res.send(404)
    return
  }
  res.send(todo)
})

app.post(apiPath + '/todos', (req, res) => {
  const id = todosService.create(req.body)

  res.status(201).send({ id })
})

app.put(apiPath + '/todos/:id', (req, res) => {
  const { id } = req.params
  const updatedTodo = todosService.update(req.body, id)
  if (updatedTodo === undefined) {
    res.send(404)
    return
  }
  res.send({ id })
})

app.delete(apiPath + '/todos/:id', (req, res) => {
  const { id } = req.params
  const deletedTodo = todosService.remove(id)
  if (deletedTodo === undefined) {
    res.send(404)
  }
  res.send(200)
})

app.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`)
})
