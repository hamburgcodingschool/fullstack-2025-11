import './PostList.css';
import { Post } from './Post';

export function PostList({ posts, updatePost }) {
  return (
    <ul className="PostList">
      {posts.toReversed().map((post) => (
        <li key={post.id} className="PostList-Item">
          <Post
            id={post.id}
            title={post.title}
            author={post.author}
            date={post.date}
            summary={post.summary}
            votes={post.votes}
            updatePost={updatePost}
          />
        </li>
      ))}
    </ul>
  );
}
