import { PostForm } from '../PostForm';
import { useNavigate } from 'react-router';

export function AddPost({ addPost }) {
  const navigate = useNavigate();

  function handleAddPost(postData) {
    addPost(postData);
    navigate('/');
  }

  return (
    <div>
      <h2>Add a new Post</h2>
      <PostForm addPost={handleAddPost} />
    </div>
  );
}
