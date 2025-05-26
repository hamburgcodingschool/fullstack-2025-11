import { PostList } from '../PostList';

export function AllPosts({ posts }) {
  return (
    <div>
      <h2>All Posts</h2>
      <PostList posts={posts} />
    </div>
  );
}
