import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { fetchPostById, sendPostUpdate } from '../../api';

import { Post } from '../Post';

export function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState();

  async function handleUpdatePost(id, post) {
    await sendPostUpdate(id, post);
  }

  useEffect(() => {
    fetchPostById(id).then((post) => setPost(post))
  }, [])

  if (!post) {
    return <p>Loading</p>;
  }

  return (
    <Post
      id={post._id}
      title={post.title}
      author={post.author}
      date={post.date}
      summary={post.summary}
      votes={post.votes}
      updatePost={(id, post) => handleUpdatePost(id, post)}
    />
  );
}
