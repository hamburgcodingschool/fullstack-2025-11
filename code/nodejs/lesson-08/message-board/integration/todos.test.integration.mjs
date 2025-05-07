import { describe, it, beforeEach, before, after } from 'node:test'
import { deepStrictEqual, match, strictEqual } from 'assert'
import request from 'supertest'

import { MongoClient, ObjectId } from 'mongodb'

import '../index.mjs'

describe('/api/v1/persons', () => {
  /** @type {import('supertest/lib/agent')} */
  let postsRequest

  /** @type {MongoClient} */
  let client
  /** @type {import('mongodb').Collection} */
  let collection

  /** @type {import('mongodb').InsertManyResult<import('mongodb').Document>} */
  let insertManyResults

  before(async() => {
    const config = await import(`../config/${process.env.MESSAGE_BOARD_ENV}.env.mjs`)
    client = new MongoClient(`mongodb://${config.MONGO_HOST}:${config.MONGO_PORT}`)
    const database = client.db(config.MONGO_DBNAME)

    collection = database.collection('posts')
    postsRequest = request(`http://${config.APP_HOST}:${config.APP_PORT}/api/v1/posts`)
  })

  after(async () => {
    await client.close()
  })

  beforeEach(async () => {
    await collection.deleteMany({})

    insertManyResults = await collection.insertMany([
      { title: 'Create', author: 'Sherlock', date: new Date().toISOString().split('T')[0], summary: '', votes: 0 },
      { title: 'Read',   author: 'Sherlock', date: new Date().toISOString().split('T')[0], summary: '', votes: 0 },
      { title: 'Update', author: 'Sherlock', date: new Date().toISOString().split('T')[0], summary: '', votes: 0 },
      { title: 'Delete', author: 'Sherlock', date: new Date().toISOString().split('T')[0], summary: '', votes: 0 },
    ])
  })

  describe.only('GET /', () => {
    it('returns all todos', async() => {
      // arrange / act
      const response = await postsRequest.get('/')

      // assert
      match(response.headers['content-type'], /application\/json/)
      strictEqual(response.statusCode, 200)
      strictEqual(response.body.length, 4)
    })
  })

  describe('GET /:id', () => {
    it('returns the todo with its id if it exists', async () => {
      // arrange / act
      const response = await postsRequest.get(`/${insertManyResults.insertedIds[0].toHexString()}`)

      // assert
      match(response.headers['content-type'], /application\/json/)
      strictEqual(response.statusCode, 200)
      deepStrictEqual(response.body.title, 'Create')
    })

    it('returns a 404 if no todo is found', async () => {
      // arrange / act
      const response = await postsRequest.get(`/${ObjectId.createFromTime(new Date()).toHexString()}`)

      // assert
      strictEqual(response.statusCode, 404)
    })
  })

  describe('POST /', () => {
    it('creates the todo and responds with its id', async () => {
      // arrange
      const toBeCreated = { title: 'Write', author: 'Sherlock', date: new Date().toISOString().split('T')[0], summary: '', votes: 0 }

      // act
      const postResponse = await postsRequest
        .post('/')
        .send(toBeCreated)
      const getResponse = await postsRequest.get(`/${postResponse.body._id}`)

      // assert
      match(postResponse.headers['content-type'], /application\/json/)
      strictEqual(postResponse.statusCode, 201)
      deepStrictEqual(getResponse.body, { ...toBeCreated, _id: postResponse.body._id })
    })
  })

  describe('PUT /:id', () => {
    let toBeUpdated

    beforeEach(async () => {
      toBeUpdated = (await postsRequest.get(`/${insertManyResults.insertedIds[2].toHexString()}`)).body
      toBeUpdated.title = 'Update Success'
      toBeUpdated.votes = 1
    })

    it('updates the todo and returns 200', async () => {
      // arrange / act
      const putResponse = await postsRequest
        .put(`/${toBeUpdated._id}`)
        .send(toBeUpdated)
      const getResponse = await postsRequest.get(`/${toBeUpdated._id}`)

      // assert
      strictEqual(putResponse.statusCode, 200)
      strictEqual(getResponse.body.title, 'Update Success')
      strictEqual(getResponse.body.votes, 1)
    })

    it('returns 404 and performs no changes if no todo is found', async () => {
      // arrange / act
      const putResponse = await postsRequest
        .put(`/${ObjectId.createFromTime(new Date()).toHexString()}`)
        .send(toBeUpdated)
      const getResponse = await postsRequest.get(`/${toBeUpdated._id}`)

      // assert
      strictEqual(putResponse.statusCode, 404)
      strictEqual(getResponse.body.title, 'Update')
      strictEqual(getResponse.body.votes, 0)
    })
  })

  describe('DELETE /:id', async () => {
    it('deletes the todo and returns 200', async () => {
      // arrange
      const id = insertManyResults.insertedIds[0].toHexString()

      // act
      const deleteResponse = await postsRequest.delete(`/${id}`)
      const getResponse = await postsRequest.get(`/${id}`)

      // assert
      strictEqual(deleteResponse.statusCode, 200)
      strictEqual(getResponse.statusCode, 404)
    })

    it('returns 404 and performs no changes if no post is found', async () => {
      // arrange
      const id = ObjectId.createFromTime(new Date()).toHexString()

      // act
      const deleteResponse = await postsRequest.delete(`/${id}`)
      const getResponse = await postsRequest.get('/')

      // assert
      strictEqual(deleteResponse.statusCode, 404)
      strictEqual(getResponse.body.length, 4)
    })
  })
})