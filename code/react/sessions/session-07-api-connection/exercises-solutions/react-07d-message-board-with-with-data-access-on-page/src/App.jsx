import { BrowserRouter, Routes, Route } from 'react-router';

import { Header } from './components/Header';
import { NavBar } from './components/NavBar';

import { AllPosts } from './components/pages/AllPosts';
import { AddPost } from './components/pages/AddPost';
import { PostDetails } from './components/pages/PostDetails';

import './App.css';

export function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<AllPosts />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
