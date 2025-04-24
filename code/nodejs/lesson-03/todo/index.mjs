import path from 'node:path'
import express from 'express'

const __dirname = import.meta.dirname

const port = 8080
const host = 'localhost'

const apiPath = '/api/v1'

const app = express()

const todos = [
  { id: '0', label: 'Make Todo API', done: true },
  { id: '1', label: 'Make functional Todo Frontend', done: true },
  { id: '2', label: 'Style Todo Frontend', done: false },
  { id: '3', label: 'Extend Todo app to create todos', done: false },
  { id: '4', label: 'Extend Toto app to update todos', done: false },
  { id: '5', label: 'Extend Todo app to delete todos', done: false },
  { id: '6', label: 'Separation of Concerns', done: false },
]

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
  res.send(todos.find((item) => item.id === id))
})

app.post(apiPath + '/todos', (req, res) => {
  const newTodo = {
    id: `${todos.length}`,
    ...req.body
  }
  todos.push(newTodo)

  res.send({ id: newTodo.id })
})

app.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`)
})
