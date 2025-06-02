import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { uid } from 'uid';

import { Header } from './components/Header';
import { AllPosts } from './components/pages/AllPosts';
import { AddPost } from './components/pages/AddPost';
import { PostDetails } from './components/pages/PostDetails';
import { NavBar } from './components/NavBar';

import { fetchAllPosts } from './api';

import './App.css';

export function App() {
  const [posts, setPosts] = useState([]);

  async function loadPosts() {
    const response = await fetchAllPosts();
    const data = await response.json();
    setPosts(data);
  }

  function addPost(post) {
    setPosts([...posts, { id: uid(), ...post }]);
  }

  function updatePost(id, post) {
    setPosts(
      posts.map((item) => (item._id === id ? { ...item, ...post } : item))
    );
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
            element={<AllPosts posts={posts} updatePost={(post) => updatePost(post)} />}
          />
          <Route path="/add-post" element={<AddPost addPost={(post) => addPost(post)} />} />
          <Route
            path="/post/:id"
            element={<PostDetails posts={posts} updatePost={(post) => updatePost(post)} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
