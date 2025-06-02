export function TodoForm({ addTodo }) {
  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const fields = Object.fromEntries(formData);
    addTodo({
      ...fields,
      completed: false,
    });
    event.target.reset();
  }

  return (
    <form onSubmit={(e) => handleFormSubmit(e)}>
      <input name="title" type="text" />
      <input name="dueDate" type="date" />
      <button type="submit">Add Todo</button>
    </form>
  );
}
