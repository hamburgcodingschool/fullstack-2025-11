import { MongoClient, ObjectId } from 'mongodb'

async function createClient() {
  const config = await import(`../config/${process.env.MESSAGE_BOARD_ENV}.env.mjs`)
  const uri = `mongodb://${config.MONGO_HOST}:${config.MONGO_PORT}`
  const client = new MongoClient(uri)
  const database = client.db(config.MONGO_DBNAME)
  const posts = database.collection('posts')
  return { client, database, posts }
}

let clientPromise

async function getClientPromise() {
  if (!clientPromise) {
    clientPromise = createClient()
  }
  return clientPromise
}

export const postsService = {
  findAll: async () => {
    const { posts } = await getClientPromise()
    const result = await posts.find({}).toArray()
    return result
  },
  findById: async (id) => {
    const { posts } = await getClientPromise()
    const query = { _id: ObjectId.createFromHexString(id) }
    const result = await posts.findOne(query)
    return result ?? undefined
  },
  create: async (post) => {
    const { posts } = await getClientPromise()
    const inserted = await posts.insertOne(post)
    return inserted.insertedId.toHexString()
  },
  update: async (post, id) => {
    const { posts } = await getClientPromise()
    const query = { _id: ObjectId.createFromHexString(id) }
    const updateDoc = { $set: {
      ...post,
    } }
    delete updateDoc.$set._id

    const updated = await posts.updateOne(query, updateDoc)
    return updated.modifiedCount === 1
  },
  remove: async (id) => {
    const { posts } = await getClientPromise()
    const query = { _id: ObjectId.createFromHexString(id) }
    const deleted = await posts.deleteOne(query)
    return deleted.deletedCount === 1
  },
}
