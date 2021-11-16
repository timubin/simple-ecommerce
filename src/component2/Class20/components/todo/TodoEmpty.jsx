import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
function TodoEmpty() {
  return (
    <div>
      <p className="bg-warning p-3">
        <FontAwesomeIcon icon={faInfoCircle} />
        &nbsp; &nbsp; Sorry, No Todo Found . Please create One .
      </p>
    </div>
  );
}

export default TodoEmpty;
