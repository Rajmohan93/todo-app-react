/**
 * ? @description : TodoList Component
 */

// Dependencies
import React from "react";

function TodoList({ todoList, filteredTodoItems }) {
  /**
   * * @description : Local Storage
   */
  const todoItems = JSON.parse(localStorage.getItem("todo")) || [];

  /**
   * * @description : Function to Change the Status of TODO Items
   */
  const completeHandler = (e, id) => {
    e.preventDefault();
    const selectedItem = todoItems?.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status: !todo.status,
        };
      }
      return todo;
    });
    localStorage.setItem("todo", JSON.stringify(selectedItem));
    window.location.reload();
  };

  /**
   * * @description : Function to Delete TODO Items
   */
  const deleteHandler = (e, id) => {
    e.preventDefault();
    const newTodoList = todoItems.filter((item) => item.id !== id);
    localStorage.setItem("todo", JSON.stringify(newTodoList));
    window.location.reload();
  };

  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {/* List Items dynamically */}
          {filteredTodoItems?.map((todo) => (
            <li key={todo.id} className="todo">
              <p
                className={`todo-text ${
                  todo.status === true ? "completed" : ""
                }`}
              >
                {todo.text}
              </p>
              <div>
                <button
                  className="complete-btn"
                  onClick={(e) => completeHandler(e, todo.id)}
                >
                  <i className="fas fa-check"></i>
                </button>
                <button
                  className="trash-btn"
                  onClick={(e) => deleteHandler(e, todo.id)}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
