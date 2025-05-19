import { MdReadMore } from 'react-icons/md';
import './IconButton.css';

export function IconButton({ children }) {
  return (
    <button className="IconButton">
      {children} <MdReadMore />
    </button>
  );
}
