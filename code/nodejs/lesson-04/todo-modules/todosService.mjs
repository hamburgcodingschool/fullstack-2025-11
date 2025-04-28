const todos = [
  { id: '0', label: 'Make Todo API', done: true, description: '' },
  { id: '1', label: 'Make functional Todo Frontend', done: true, description: '' },
  { id: '2', label: 'Style Todo Frontend', done: false },
  { id: '3', label: 'Extend Todo app to create todos', done: false },
  { id: '4', label: 'Extend Toto app to update todos', done: false },
  { id: '5', label: 'Extend Todo app to delete todos', done: false },
  { id: '6', label: 'Separation of Concerns', done: false },
]
let idCounter = 6

export const todosService = {
  findAll: () => {
    return todos.map((todo) => ({ ...todo }))
  },
  findById: (id) => {
    return todos.find((todo) => todo.id === id)
  },
  create: (todo) => {
    const newTodo = {
      ...todo,
      id: `${idCounter += 1}`,
    }
    todos.push(newTodo)

    return newTodo.id
  },
  update: (todo, id) => {
    const wc = { ...todo, id }
    const index = todos.findIndex((item) => item.id === id)
    if (index === -1) {
      return undefined
    }

    todos[index] = wc

    return { ...todos[index] }
  },
  remove: (id) => {
    const index = todos.findIndex((item) => item.id === id)
    if (index === -1) {
      return undefined
    }

    return todos.splice(index, 1)[0]
  }
}
