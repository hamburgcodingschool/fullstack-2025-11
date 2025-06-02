import { useState, useEffect } from 'react';

import { fetchAllPosts } from '../../api';

import { PostList } from '../PostList';

export function AllPosts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchAllPosts().then((posts) => setPosts(posts))
  }, [])

  return (
    <div>
      <h2>All Posts</h2>
      <PostList posts={posts} />
    </div>
  );
}
