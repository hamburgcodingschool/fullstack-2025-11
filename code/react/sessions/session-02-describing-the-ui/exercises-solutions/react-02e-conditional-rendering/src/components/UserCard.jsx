export function UserCard({ name, age, isOnline, description }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>{isOnline ? 'The user is online' : 'The user is offline'}</p>
      {description && <p>Description: {description}</p>}
    </div>
  );
}
