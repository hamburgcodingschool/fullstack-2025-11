import { Post } from '../Post';
import { useParams } from 'react-router';

export function PostDetails({ posts, updatePost }) {
  const { id } = useParams();

  const post = posts.find((post) => post._id === id);

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
      updatePost={(id, post) => updatePost(id, post)}
    />
  );
}
