import express from 'express'
import { todosService } from '../todosService.mjs'

export const todosRouter = express.Router()

todosRouter.get('/', (req, res) => {
  res.send(todosService.findAll())
})

todosRouter.get('/:id', (req, res) => {
  const { id } = req.params
  const todo = todosService.findById(id)
  if (!todo) {
    res.status(404)
    return
  }
  res.send(todo)
})

todosRouter.post('/', (req, res) => {
  const id = todosService.create(req.body)

  res.status(201).send({ id })
})

todosRouter.put('/:id', (req, res) => {
  const { id } = req.params
  const updatedTodo = todosService.update(req.body, id)
  if (updatedTodo === undefined) {
    res.status(404)
    return
  }
  res.send({ id })
})

todosRouter.delete('/:id', (req, res) => {
  const { id } = req.params
  const deletedTodo = todosService.remove(id)
  if (deletedTodo === undefined) {
    res.status(404)
  }
  res.status(200)
})
