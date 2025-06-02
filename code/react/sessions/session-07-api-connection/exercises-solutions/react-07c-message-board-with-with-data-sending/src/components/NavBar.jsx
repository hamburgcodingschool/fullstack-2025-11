import { NavLink } from 'react-router';
import './NavBar.css';

export function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink to="/">All Posts</NavLink>
      <NavLink to="/add-post">Add Post</NavLink>
    </nav>
  );
}
