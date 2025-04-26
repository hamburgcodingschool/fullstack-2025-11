import path from 'node:path'
import express from 'express'

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
  res.send(todos)
})

app.get(apiPath + '/todos/:id', (req, res) => {
  const { id } = req.params
  const todo = todos.find((item) => item.id === id)
  if (!todo) {
    res.send(404)
    return
  }
  res.send(todo)
})

app.post(apiPath + '/todos', (req, res) => {
  const newTodo = {
    id: `${todos.length}`,
    ...req.body
  }
  todos.push(newTodo)

  res.statusCode(201).send({ id: newTodo.id })
})

app.put(apiPath + '/todos/:id', (req, res) => {
  const { id } = req.params

  const index = todos.findIndex((todo) => todo.id === id)

  if (index === -1) {
    res.send(404)
    return
  }

  todos[index] = {
    ...req.body,
    id,
  }

  res.send({ id })
})

app.delete(apiPath + '/todos/:id', (req, res) => {
  const { id } = req.params
  const index = todos.findIndex((todo) => todo.id === id)

  if (index === -1) {
    res.send(404)
  }

  todos.splice(index, 1)

  res.send(200)
})

app.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`)
})
