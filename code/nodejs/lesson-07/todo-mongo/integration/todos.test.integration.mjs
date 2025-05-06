import { describe, it, beforeEach } from 'node:test'
import request from 'supertest'
import { deepStrictEqual, match, strictEqual } from 'assert'

import '../index.mjs'
import { todosService } from '../todosService.mjs'

describe('/api/v1/todos', () => {
  const todosRequest = request('http://localhost:8080/api/v1/todos')
  let todos

  beforeEach(() => {
    todos = [
      { id: '0', label: 'Create', done: true },
      { id: '1', label: 'Update', done: false },
    ]
    todosService._state = {
      todos,
      idCounter: 1,
    }
  })

  describe('GET /', () => {
    it('returns all todos', async() => {
      // arrange / act
      const response = await todosRequest .get('/')

      // assert
      match(response.headers['content-type'], /application\/json/)
      strictEqual(response.statusCode, 200)
      strictEqual(response.body.length, 2)
      deepStrictEqual(response.body, todos)
    })
  })

  describe('GET /:id', () => {
    it('returns the todo with its id if it exists', async () => {
      // arrange / act
      const response = await todosRequest.get('/0')

      // assert
      match(response.headers['content-type'], /application\/json/)
      strictEqual(response.statusCode, 200)
      deepStrictEqual(response.body, todos[0])
    })

    it('returns a 404 if no todo is found', async () => {
      // arrange / act
      const response = await todosRequest.get('/2')

      // assert
      strictEqual(response.statusCode, 404)
    })
  })

  describe('POST /', async () => {
    it('creates the todo and responds with its id', async () => {
      // arrange

      // act

      // assert
    })
  })

  describe('PUT /:id', async () => {
    it('updates the todo and returns its id', async () => {
      // arrange

      // act

      // assert
    })

    it('returns 404 and performs no changes if no todo is found', async () => {
      // arrange

      // act

      // assert
    })
  })

  describe('DELETE /:id', async () => {

  })
})