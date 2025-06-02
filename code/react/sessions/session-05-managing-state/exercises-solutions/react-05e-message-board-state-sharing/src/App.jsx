import { uid } from 'uid';
import { useLocalStorage } from '@uidotdev/usehooks';
import './App.css';
import { Header } from './components/Header';
import { PostList } from './components/PostList';
import { PostForm } from './components/PostForm';

const initialPosts = [
  {
    id: 1,
    title: 'My First Post',
    author: 'Alex',
    date: '2024-06-19',
    summary: 'A brief overview of my first experience.',
    votes: 0,
  },
  {
    id: 2,
    title: 'Second Post',
    author: 'Casey',
    date: '2024-06-20',
    summary: 'Details on the second encounter and its impacts.',
    votes: 0,
  },
  {
    id: 3,
    title: 'Third Post',
    author: 'Jordan',
    date: '2024-06-21',
    summary: 'Insights and takeaways from the third discussion.',
    votes: 0,
  },
];

export function App() {
  const [posts, setPosts] = useLocalStorage('posts', initialPosts);

  function addPost(newItem) {
    setPosts([...posts, { id: uid(), ...newItem }]);
  }

  function updatePost(id, updatedItem) {
    setPosts(
      posts.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
    );
  }

  return (
    <div className="App">
      <Header />
      <PostList
        posts={posts}
        updatePost={(id, updatedItem) => updatePost(id, updatedItem)}
      />
      <PostForm addPost={(newItem) => addPost(newItem)} />
    </div>
  );
}
