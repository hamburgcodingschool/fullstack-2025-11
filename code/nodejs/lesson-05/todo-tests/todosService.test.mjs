import { strictEqual } from 'node:assert'
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
      strictEqual(todos.length, 2)
    })

    it('only returns copies', () => {
      // arrange / act
      const todos = todosService.findAll()
      todos[0].done = false

      // assert
      strictEqual(todos[0].done, true)
    })
  })

  describe('findById(id)', () => {
    it('returns the matching todo if it exists', () => {
      // arrange

      // act

      // assert
    })

    it('returns undefined if no todo is found', () => {
      // arrange

      // act

      // assert
    })

    it('only returns copies', () => {
      // arrange

      // act

      // assert
    })
  })

  describe('create(todo)', () => {
    it('creates a new todo', () => {
      // arrange

      // act

      // assert
    })

    it('generates and returns the new todos id', () => {
      // arrange

      // act

      // assert
    })

    it('can deal with deletions', () => {
      // arrange

      // act

      // assert
    })
  })

  describe('update(todo, id)', () => {

  })

  describe('remove(id)', () => {
    
  })
})
