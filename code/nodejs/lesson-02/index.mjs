import path from 'node:path'
import express from 'express'

const __dirname = import.meta.dirname

const port = 8080
const host = 'localhost'

const posts = [
  { id: '0', message: 'It\'s a beautiful day' },
  { id: '1', message: 'It\'s a wonderful day' },
]

const app = express()
app.use('/', express.static(path.join(__dirname, 'static')))

app.get('/api/v1/posts', (req, res) => {
  res.send(posts)
})

app.get('/api/v1/posts/:id', (req, res) => {
  const { id } = req.params

  res.send(posts.find((post) => post.id === id))
})

app.listen(port, host, () => {
  console.log(`Server is now listening on http://${host}:${port}`)
})
