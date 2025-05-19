import { MdArrowForward } from 'react-icons/md';

export function IconButton({ children }) {
  return (
    <button>
      {children} <MdArrowForward />
    </button>
  );
}
