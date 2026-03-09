import "./App.css";

export default function Todo({ value, deletTodoItem, editTodoItem }) {
  return (
    <div className="task-list">
      <h2>{value}</h2>

      <span className="btn-position">
        <button className="delete-btn" onClick={deletTodoItem}>
          Delete
        </button>

        <button className="edit-btn" onClick={editTodoItem}>
          Edit
        </button>
      </span>
    </div>
  );
}