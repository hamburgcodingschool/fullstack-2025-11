import { deepStrictEqual, strictEqual } from 'node:assert'
import { beforeEach, describe, it } from 'node:test'
import { todosService } from './todosService.mjs'

// describe is used for grouping tests into suites.
// suite() would be an alternative option for this
describe('todosService', () => {
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
    it('returns all todos', () => {
      // arrange / act
      const todos = todosService.findAll()

      // assert
      deepStrictEqual(todos, todosService._state.todos)
    })

    it('prevents changes by consuming code', () => {
      // arrange / act
      const todos = todosService.findAll()
      todos[0].done = false
      const todos_2 = todosService.findAll()

      // assert
      strictEqual(todos_2[0].done, true)
    })
  })

  describe('findById(id)', () => {
    it('returns the matching todo if it exists', () => {
      // arrange
      const id = '0'

      // act
      const todo = todosService.findById(id)

      // assert
      deepStrictEqual(todo, todosService.findAll()[0])
    })

    it('returns undefined if no todo is found', () => {
      // arrange
      const id = '2'

      // act
      const todo = todosService.findById(id)

      // assert
      strictEqual(todo, undefined)
    })

    it('prevents changes by consuming code', () => {
      // arrange
      const id = '0'

      // act
      const todo = todosService.findById(id)
      todo.done = false
      const todo_2 = todosService.findById(id)

      // assert
      strictEqual(todo_2.done, true)
    })
  })

  describe('create(todo)', () => {
    let newTodo

    beforeEach(() => {
      newTodo = { label: 'Write', done: false }
    })

    it('creates a new todo', () => {
      // arrange / act
      todosService.create(newTodo)

      // assert
      strictEqual(todosService.findAll().length, 3)
    })

    it('generates and returns the new todos id', () => {
      // arrange / act
      const id = todosService.create(newTodo)
      const todo = todosService.findById(id)

      // assert
      deepStrictEqual(todo, { ...newTodo, id })
    })

    it('can deal with deletions', () => {
      // arrange / act
      todosService.remove('0')
      const id = todosService.create(newTodo)
      const todo = todosService.findById(id)

      // assert
      deepStrictEqual(todo, { ...newTodo, id })
    })

    it('prevents changes by consuming code', () => {
      // arrange / act
      const id = todosService.create(newTodo)
      newTodo.done = true
      const todo = todosService.findById(id)

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
