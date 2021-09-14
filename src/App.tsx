import React from "react";

function App() {
  const [state, setState] = React.useState(Math.random() * 100);

  return (
    <div>
      <h1>Welcome to React App</h1>
      <h3>Date : {new Date().toDateString()}</h3>
      <h3>{state}</h3>
      <button onClick={() => setState(state + 1)}>Click Me</button>
    </div>
  );
}

export default App;
