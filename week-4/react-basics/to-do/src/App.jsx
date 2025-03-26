import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  let globalId = todos.length + 1;

  function addTodo() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    if (!title || !description) return;

    const newTodo = { title, description, id: globalId++ };
    setTodos([...todos, newTodo]);
  }

  function removeTodo(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  return (
    <div className="p-4">
      <input
        type="text"
        id="title"
        placeholder="Todo title"
        className="border p-2 mr-2"
      />
      <input
        type="text"
        id="description"
        placeholder="Todo description"
        className="border p-2 mr-2"
      />
      <button onClick={addTodo} className="bg-blue-500 text-white p-2 rounded">
        Add Todo
      </button>

      <div className="mt-4">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="p-2 border mb-2 flex justify-between items-center"
          >
            <div>
              <strong>{todo.title}</strong>: {todo.description}
            </div>
            <button
              onClick={() => removeTodo(todo.id)}
              className="bg-red-500 text-white p-1 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
