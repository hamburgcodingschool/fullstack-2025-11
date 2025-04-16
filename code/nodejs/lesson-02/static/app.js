const messages = document.getElementById('messages')
fetch('/api/v1/posts')
  .then((res) => res.json())
  .then((data) => data.forEach((post) => {
    const messageElement = document.createElement('li')
    messageElement.textContent = post.message
    messages.append(messageElement)
  }))
