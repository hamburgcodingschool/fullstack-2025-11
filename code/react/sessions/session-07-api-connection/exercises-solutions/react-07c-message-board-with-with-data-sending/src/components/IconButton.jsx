import './IconButton.css';

export function IconButton({ children, onClick, icon }) {
  return (
    <button className="IconButton" onClick={(e) => onClick(e)}>
      {children} {icon}
    </button>
  );
}
