import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

import { Header } from './components/Header';
import { AllPosts } from './components/pages/AllPosts';
import { AddPost } from './components/pages/AddPost';
import { PostDetails } from './components/pages/PostDetails';
import { NavBar } from './components/NavBar';

import { fetchAllPosts, sendAddPost, sendPostUpdate } from './api';

import './App.css';

export function App() {
  const [posts, setPosts] = useState([]);

  async function loadPosts() {
    const response = await fetchAllPosts();
    const data = await response.json();
    setPosts(data);
  }

  async function addPost(post) {
    await sendAddPost(post);
    loadPosts();
  }

  async function updatePost(id, updatedItem) {
    await sendPostUpdate(id, updatedItem);
    loadPosts();
  }

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<AllPosts posts={posts} updatePost={(id, post) => updatePost(id, post)} />}
          />
          <Route path="/add-post" element={<AddPost addPost={(post) => addPost(post)} />} />
          <Route
            path="/post/:id"
            element={<PostDetails posts={posts} updatePost={(id, post) => updatePost(id, post)} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
