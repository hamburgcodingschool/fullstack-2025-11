import express from 'express'
import { todosService } from '../todosService-mongo.mjs'

export const todosRouter = express.Router()

todosRouter.get('/', async (req, res) => {
  res.send(await todosService.findAll())
})

todosRouter.get('/:id', async (req, res) => {
  const { id } = req.params
  const todo = await todosService.findById(id)
  if (!todo) {
    res.status(404).send()
    return
  }
  res.send(todo)
})

todosRouter.post('/', async (req, res) => {
  const id = await todosService.create(req.body)

  res.status(201).send({ id })
})

todosRouter.put('/:id', async (req, res) => {
  const { id } = req.params
  const updatedTodo = await todosService.update(req.body, id)
  if (updatedTodo === undefined) {
    res.status(404).send()
    return
  }
  res.send({ id })
})

todosRouter.delete('/:id', async (req, res) => {
  const { id } = req.params
  const deletedTodo = await todosService.remove(id)
  if (deletedTodo === undefined) {
    res.status(404).send()
  }
  res.status(200).send()
})
