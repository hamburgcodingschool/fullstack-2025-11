import { Post } from '../Post';
import { useParams } from 'react-router';

export function PostDetails({ posts, updatePost }) {
  const { id } = useParams();

  const post = posts.find((post) => post._id === id);

  return (
    <Post
      id={post._id}
      title={post.title}
      author={post.author}
      date={post.date}
      summary={post.summary}
      votes={post.votes}
      updatePost={(post) => updatePost(post)}
    />
  );
}
