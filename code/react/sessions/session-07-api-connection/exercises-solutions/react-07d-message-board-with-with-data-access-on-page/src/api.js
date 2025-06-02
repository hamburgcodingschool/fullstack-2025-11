const baseUrl = '/api/v1';

export async function fetchAllPosts() {
  const res = await fetch(`${baseUrl}/posts`);
  return await res.json();
}

export async function fetchPostById(id) {
  const res = await fetch(`${baseUrl}/posts/${id}`);
  return await res.json();
}

export async function sendAddPost(post) {
  const res = await fetch(`${baseUrl}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
  return await res.json();
}

export async function sendPostUpdate(id, post) {
  const res = await fetch(`${baseUrl}/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ _id: id, ...post }),
  });
  return await res.json();
}
