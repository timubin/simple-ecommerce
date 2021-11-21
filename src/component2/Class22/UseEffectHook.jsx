import React, { useState, useEffect } from "react";
import "./App.css";

function UseEffectHook() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
      .then((response) => response.json())
      .then((response) => setTodos(response));
  }, []);

  return (
    <div className="App">
      {todos.map((list) => (
        <ul className="paraList" key={list.id}>
          <li className="para">{list.title}</li>
          <li className="para">{list.id}</li>
        </ul>
      ))}
    </div>
  );
}

export default UseEffectHook;
