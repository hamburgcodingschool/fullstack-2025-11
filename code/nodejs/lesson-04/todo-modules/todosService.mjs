const todos = [
  { id: '0', label: 'Make Todo API', done: true, description: '' },
  { id: '1', label: 'Make functional Todo Frontend', done: true, description: '' },
  { id: '2', label: 'Style Todo Frontend', done: false },
  { id: '3', label: 'Extend Todo app to create todos', done: false },
  { id: '4', label: 'Extend Toto app to update todos', done: false },
  { id: '5', label: 'Extend Todo app to delete todos', done: false },
  { id: '6', label: 'Separation of Concerns', done: false },
]

export const todosService = {
  findAll: () => {
    return todos.map((todo) => ({ ...todo }))
  },
  findById: (id) => {
    return todos.find((todo) => todo.id === id)
  },
}
