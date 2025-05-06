import { MongoClient, ObjectId } from 'mongodb'

const uri = `mongodb://localhost:27017`
const client = new MongoClient(uri)

const database = client.db('todo-list')
const todos = database.collection('todos')

export const todosService = {
  findAll: async () => {
    const result = await todos.find({}).toArray()
    return result
  },
  findById: async (id) => {
    const query = { _id: ObjectId.createFromHexString(id) }
    const todo = await todos.findOne(query)
    return todo ?? undefined
  },
  create: async (todo) => {
    const inserted = await todos.insertOne(todo)
    return inserted.insertedId.toHexString()
  },
  update: async (todo, id) => {
    const query = { _id: ObjectId.createFromHexString(id) }
    const updateDoc = { $set: {
      ...todo,
    } }
    delete updateDoc.$set._id

    const updated = await todos.updateOne(query, updateDoc)
    // a bit hacky as we don't actually get a todo to return from the client
    return updated.modifiedCount === 1 ? { ...todo } : undefined
  },
  remove: async (id) => {
    const query = { _id: ObjectId.createFromHexString(id) }
    const deleted = await todos.deleteOne(query)
    // same as above, plus we can only return the id here as thats all we got
    return deleted.deletedCount === 1 ? id : undefined
  },
}
