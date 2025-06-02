const baseUrl = '/api/v1';

export function fetchAllPosts() {
  return fetch(`${baseUrl}/posts`);
}

export function fetchPostById(id) {
  return fetch(`${baseUrl}/posts/${id}`);
}

export function sendAddPost(post) {
  return fetch(`${baseUrl}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
}

export function sendPostUpdate(id, post) {
  return fetch(`${baseUrl}/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ _id: id, ...post }),
  });
}
