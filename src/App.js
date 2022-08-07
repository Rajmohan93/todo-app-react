/**
 * ? @description : App Component
 */

// Dependencies
import React, { useState } from "react";
import "./App.css";

// Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  /**
   * * @description : Local Storage
   */
  const todoList = JSON.parse(localStorage.getItem("todo")) || [];

  /**
   * * @description : State Value
   * * @param {Array} todoList : Array of TODO Items
   */
  const [filteredTodoItems, setFilteredTodoItems] = useState(todoList);

  return (
    <div className="App">
      <header>
        <h1>My Todo App</h1>
      </header>
      <Form setFilteredTodoItems={setFilteredTodoItems} />
      <TodoList todoList={todoList} filteredTodoItems={filteredTodoItems} />
    </div>
  );
}

export default App;
