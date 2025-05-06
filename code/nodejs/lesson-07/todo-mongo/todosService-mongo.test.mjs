import { deepStrictEqual, strictEqual } from 'node:assert'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { MongoClient } from 'mongodb'
import { beforeEach, describe, it } from 'node:test'
import { todosService } from './todosService-mongo.mjs'
import {
  MONGO_HOST,
  MONGO_PORT
} from './config.mjs'

// describe is used for grouping tests into suites.
// suite() would be an alternative option for this
describe('todosService-mongo', () => {
  /** @type {MongoMemoryServer} */
  let mongoServer
  /** @type {MongoClient} */
  let client

  /** @type {import('mongodb').InsertManyResult<import('mongodb').Document>} */
  let insertManyResults

  // before gets called once at the start of this suite
  before(async () => {
    console.log('port', MONGO_PORT)
    mongoServer = await MongoMemoryServer.create({
      instance: {
        port: MONGO_PORT,
      },
    })
    client = await MongoClient.connect(mongoServer.getUri())
  })
  // after gets called once when all tests are completed
  after(async () => {
    await mongoServer.stop()
  })

  // beforeEach gets called before each test / it within
  // this describe at any level.
  // Having it on top means it gets called for every todosService test.
  beforeEach(() => {
    todosService._state = {
      todos: [
        { id: '0', label: 'Create', done: true },
        { id: '1', label: 'Update', done: false },
      ],
      idCounter: 1,
    }
  })

  // describes can be nested as much as you want
  describe('findAll()', () => {
    // our actual tests are in its.
    // test() is another option for this.
    it('returns all todos', async () => {
      // arrange / act
      const todos = await todosService.findAll()

      // assert
      deepStrictEqual(todos, todosService._state.todos)
    })

    it('prevents changes by consuming code', async () => {
      // arrange / act
      const todos = await todosService.findAll()
      todos[0].done = false
      const todos_2 = await todosService.findAll()

      // assert
      strictEqual(todos_2[0].done, true)
    })
  })

  describe('findById(id)', () => {
    it('returns the matching todo if it exists', async () => {
      // arrange
      const id = '0'

      // act
      const todo = await todosService.findById(id)

      // assert
      deepStrictEqual(todo, todosService.findAll()[0])
    })

    it('returns undefined if no todo is found', async () => {
      // arrange
      const id = '2'

      // act
      const todo = await todosService.findById(id)

      // assert
      strictEqual(todo, undefined)
    })

    it('prevents changes by consuming code', async () => {
      // arrange
      const id = '0'

      // act
      const todo = await todosService.findById(id)
      todo.done = false
      const todo_2 = await todosService.findById(id)

      // assert
      strictEqual(todo_2.done, true)
    })
  })

  describe('create(todo)', () => {
    let newTodo

    beforeEach(() => {
      newTodo = { label: 'Write', done: false }
    })

    it('creates a new todo', async () => {
      // arrange / act
      await todosService.create(newTodo)

      // assert
      strictEqual(todosService.findAll().length, 3)
    })

    it('generates and returns the new todos id', async () => {
      // arrange / act
      const id = await todosService.create(newTodo)
      const todo = await todosService.findById(id)

      // assert
      deepStrictEqual(todo, { ...newTodo, id })
    })

    it('can deal with deletions', async () => {
      // arrange / act
      todosService.remove('0')
      const id = await todosService.create(newTodo)
      const todo = await todosService.findById(id)

      // assert
      deepStrictEqual(todo, { ...newTodo, id })
    })

    it('prevents changes by consuming code', async () => {
      // arrange / act
      const id = await todosService.create(newTodo)
      newTodo.done = true
      const todo = await todosService.findById(id)

      // assert
      strictEqual(todo.done, false)
    })
  })

  describe('update(todo, id)', () => {
    beforeEach(() => {

    })

    it('updates the todo with the passed id', () => {
      // arrange

      // act

      // assert
    })

    it('returns the updated todo', () => {
      // arrange

      // act

      // assert
    })

    it('returns undefined if no todo is found', () => {
      // arrange

      // act

      // assert
    })

    it('prevents changes by consuming code', () => {
      // arrange

      // act

      // assert
    })
  })

  describe('remove(id)', () => {
    
  })
})
