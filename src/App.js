import "./index";
import React, { useState, useEffect } from "react";

export default function App(props) {
  const [timeState, setTimeState] = useState(new Date().toLocaleString());
  useEffect(() => {
    let sec = setInterval(
      () => setTimeState(new Date().toLocaleString()),
      1000
    );
    return () => clearInterval(sec);
  }, []);
  if (props.input === false)
    return (
      <div className="App">
        <p>{timeState}</p>
      </div>
    );
  else if (Array.isArray(props.input))
    return (
      <div className="App">
        {props.input.map((itemN, item) => (
          <div key={item}>{itemN}</div>
        ))}
      </div>
    );
  return <div className="App">{props.input}</div>;
}
