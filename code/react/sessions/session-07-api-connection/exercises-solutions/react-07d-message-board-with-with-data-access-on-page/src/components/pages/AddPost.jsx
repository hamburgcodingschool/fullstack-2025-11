import { useNavigate } from 'react-router';

import { sendAddPost } from '../../api';

import { PostForm } from '../PostForm';

export function AddPost() {
  const navigate = useNavigate();

  function handleAddPost(postData) {
    sendAddPost(postData);
    navigate('/');
  }

  return (
    <div>
      <h2>Add a new Post</h2>
      <PostForm addPost={(postData) => handleAddPost(postData)} />
    </div>
  );
}
