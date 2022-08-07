/**
 * ? @description : Form Component
 */

// Dependencies
import React, { useState, useEffect } from "react";

function Form({ setFilteredTodoItems }) {
  /**
   * * @description : Local Storage
   */
  const todoList = JSON.parse(localStorage.getItem("todo")) || [];

  /**
   * * @description : State Value
   */
  const [inputText, setInputText] = useState("");
  const [itemStatus, setItemStatus] = useState("all");
  const [filteredItems, setFilteredItems] = useState([]);

  /**
   * * @description : Function to Add TODO Items
   */
  function handleTodoSubmit(e) {
    e.preventDefault();

    if (inputText !== "" && todoList === null) {
      localStorage.setItem(
        "todo",
        JSON.stringify([
          {
            text: inputText,
            status: false,
            id: Math.round(Math.random() * 1000),
          },
        ])
      );
      setInputText("");
      window.location.reload();
    } else if (inputText !== "" && todoList !== null) {
      localStorage.setItem(
        "todo",
        JSON.stringify([
          ...todoList,
          {
            text: inputText,
            status: false,
            id: Math.round(Math.random() * 1000),
          },
        ])
      );
      setInputText("");
      window.location.reload();
    } else {
      alert("Please Enter TODO List Name !");
    }
  }

  /**
   * * @description : Function to Capture the Select Element Value
   */
  const statusHandler = (e) => {
    setItemStatus(e.target.value);
  };

  /**
   * ! @description : Function to Filter TODO Items Based on Selected Value of itemStatus
   */
  const filterHandler = () => {
    switch (itemStatus) {
      case "completed":
        setFilteredItems(todoList.filter((item) => item.status === true));
        setFilteredTodoItems(todoList.filter((item) => item.status === true));
        break;
      case "uncompleted":
        setFilteredItems(todoList.filter((item) => item.status === false));
        setFilteredTodoItems(todoList.filter((item) => item.status === false));
        break;
      default:
        setFilteredItems(todoList);
        setFilteredTodoItems(todoList);
        break;
    }
  };

  /**
   * * @description : Function to Save the Selected Value of itemStatus in Local Storage
   */
  useEffect(() => {
    filterHandler();
  }, [itemStatus]);

  console.log(filteredItems);

  return (
    <div>
      <form>
        {/* Input Field */}
        <input
          type="text"
          className="todo-input"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        {/* Submit Button */}
        <button
          className="todo-button"
          type="submit"
          onClick={handleTodoSubmit}
        >
          <i className="fas fa-plus-square"></i>
        </button>

        {/* Status Options */}
        <div className="select">
          <select name="todos" className="filter-todo" onChange={statusHandler}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Form;
