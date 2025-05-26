import './PostList.css';
import { Link } from 'react-router';

export function PostList({ posts }) {
  return (
    <ul className="PostList">
      {posts.toReversed().map((post) => (
        <li key={post._id} className="PostList-Item">
          <Link to={`/post/${post._id}`}>
            <strong>{post.title}</strong> - by {post.author} ({post.votes} votes)
          </Link>
        </li>
      ))}
    </ul>
  );
}
