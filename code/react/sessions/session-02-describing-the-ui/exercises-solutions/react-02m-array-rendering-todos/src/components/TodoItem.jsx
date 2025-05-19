import './TodoItem.css';

export function TodoItem({ title, completed, dueDate, hasPriority }) {
  return (
    <li className={hasPriority ? 'TodoItem-priority' : ''}>
      {title} {completed && '✅'} - due by {dueDate}
    </li>
  );
}
