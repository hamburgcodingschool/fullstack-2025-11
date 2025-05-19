import { useState } from 'react';
import { uid } from 'uid';

import './App.css';
import { Header } from './components/Header';
import { PostList } from './components/PostList';

const initialPosts = [
  {
    id: 1,
    title: 'My First Post',
    author: 'Alex',
    date: '2024-06-19',
    summary: 'A brief overview of my first experience.',
  },
  {
    id: 2,
    title: 'Second Post',
    author: 'Casey',
    date: '2024-06-20',
    summary: 'Details on the second encounter and its impacts.',
  },
  {
    id: 3,
    title: 'Third Post',
    author: 'Jordan',
    date: '2024-06-21',
    summary: 'Insights and takeaways from the third discussion.',
  },
];

export function App() {
  const [posts, setPosts] = useState(initialPosts);

  function addPost(newItem) {
    setPosts([...posts, { id: uid(), ...newItem }]);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const fields = Object.fromEntries(formData);
    addPost(fields);
    event.target.reset();
  }

  return (
    <div className="App">
      <Header />
      <PostList posts={posts} />
      <form className="PostForm" onSubmit={(e) => handleFormSubmit(e)}>
        <div className="PostForm--field">
          <label>Title:</label>
          <input name="title" type="text" required />
        </div>
        <div className="PostForm--field">
          <label>Author:</label>
          <input name="author" type="text" required />
        </div>
        <div className="PostForm--field">
          <label>Date:</label>
          <input name="date" type="date" required />
        </div>
        <div className="PostForm--field">
          <label>Summary:</label>
          <textarea name="summary" required />
        </div>
        <div className="PostForm--button">
          <button type="submit">Add new Post</button>
        </div>
      </form>
    </div>
  );
}
