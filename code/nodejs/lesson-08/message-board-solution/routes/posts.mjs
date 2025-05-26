import express from 'express'
import { postsService } from '../services/postsService.mjs'

export const postsRouter = express.Router()

postsRouter.get('/', async (req, res) => {
  res.send(await postsService.findAll())
})

postsRouter.get('/:id', async (req, res) => {
  const { id } = req.params
  const todo = await postsService.findById(id)
  if (!todo) {
    res.status(404).send()
    return
  }
  res.send(todo)
})

postsRouter.post('/', async (req, res) => {
  const id = await postsService.create(req.body)

  res.status(201).send({ _id: id })
})

postsRouter.put('/:id', async (req, res) => {
  const { id } = req.params
  const updatedTodo = await postsService.update(req.body, id)
  if (!updatedTodo) {
    res.status(404).send()
    return
  }
  res.status(200).send()
})

postsRouter.delete('/:id', async (req, res) => {
  const { id } = req.params
  const deletedTodo = await postsService.remove(id)
  if (!deletedTodo) {
    res.status(404).send()
  }
  res.status(200).send()
})
