import { Link } from 'react-router';
import './NavBar.css';

export function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/">All Posts</Link>
      <Link to="/add-post">Add Post</Link>
    </nav>
  );
}
