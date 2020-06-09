import React, { useState } from "react";
import { TodoList } from "./components/TodoList";
import { AddTodoForm } from "./components/AddTodoForm";

const initialTodos: Array<Todo> = [
  { text: "Walk the dog", complete: true },
  { text: "Clean the house", complete: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>(initialTodos);

  const toggleTodo: ToggleTodo = (selectedToto) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedToto) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    // make sure todo is not empty
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
};

export default App;
