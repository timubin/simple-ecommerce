import React from "react";
import { useState } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

function TodoCreate({ onCreateTodo }) {
  const [title, setTitle] = useState("");
  const createTodo = () => {
    if (title.length > 0) {
      const todo = {
        title,
        status: "Pending",
      };
      onCreateTodo(todo);
      setTitle("");
    }
  };
  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter Todo"
          aria-label="Enter Todo"
          aria-describedby="basic-addon2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button
          variant="outline-info"
          id="button-addon2"
          onClick={(e) => createTodo()}
        >
          <FontAwesomeIcon icon={faPlusCircle} />
        </Button>
      </InputGroup>
    </div>
  );
}

export default TodoCreate;
