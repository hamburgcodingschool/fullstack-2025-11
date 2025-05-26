import path from 'node:path'
import express from 'express'
import { postsRouter } from './routes/posts.mjs'

async function run() {
  const config = await import(`./config/${process.env.MESSAGE_BOARD_ENV}.env.mjs`)

  const __dirname = import.meta.dirname

  const port = config.APP_PORT
  const host = config.APP_HOST

  const apiPath = '/api/v1'
  const app = express()

  app.use(express.static(path.join(__dirname, 'static')))
  app.use(express.json())

  // request logger middleware
  app.use((req, res, next) => {
    console.log(`\n${req.method} ${req.url}\n${JSON.stringify(req.body)}`)
    next()
  })

  app.use(apiPath + '/posts', postsRouter)

  app.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}`)
  })
}

run()
