import { PostList } from '../PostList';

export function AllPosts({ posts, updatePost }) {
  return (
    <div>
      <h2>All Posts</h2>
      <PostList posts={posts} updatePost={updatePost} />
    </div>
  );
}
