import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>(""); //<string> is used to assign type
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isCompleted: false }]);
      setTodo("");
    }
  };

  console.log(todos);
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <Home todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {todos.map((elem, index) => {
        return (
          <ul>
            <li>{elem.todo}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default App;
