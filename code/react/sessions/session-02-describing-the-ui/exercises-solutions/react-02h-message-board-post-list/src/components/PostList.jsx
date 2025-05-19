import { Post } from './Post';
import './PostList.css';

export function PostList({ posts }) {
  return (
    <ul className="PostList">
      {posts.toReversed().map((post) => (
        <li key={post.id} className="PostList-Item">
          <Post
            title={post.title}
            author={post.author}
            date={post.date}
          />
        </li>
      ))}
    </ul>
  );
}
