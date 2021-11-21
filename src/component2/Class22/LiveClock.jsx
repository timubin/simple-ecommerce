import React, { useState, useEffect } from "react";
import "./App.css";
// import { ReactComponent as ClockIcon } from "./icons/clock.svg";
// import { ReactComponent as CalenderIcon } from "./icons/calendar.svg";

function LiveClock() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  return (
    <div className="App" id="dateTime">
      <h3 id="clock">
        {dateState.toLocaleString("bn-BD", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        })}
      </h3>

      <h5 id="date">
        {" "}
        {dateState.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </h5>
    </div>
  );
}
export default LiveClock;
