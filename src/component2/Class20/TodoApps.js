import React from "react";
import "./assets/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ToloList from "./components/todo/ToloList";
function TodoApps() {
  return (
    <div /* className="text-center" */>
      <ToloList />
    </div>
  );
}

export default TodoApps;
