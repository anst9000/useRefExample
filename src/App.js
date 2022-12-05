import { useState, useRef, useEffect } from "react";

import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const renderCount = useRef(1);
  const inputRef = useRef();

  useEffect(() => {
    renderCount.current += 1;
  });

  const focus = () => {
    console.log(inputRef.current)
  }

  return (
    <div className="App">
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current} times</div>
      <button onClick={focus}>Focus</button>
    </div>
  );
}
