import React from "react";
import {useSelector} from "react-redux";
import "./App.css";
import Counter from "./Counter";

const App = () => {
  const count = useSelector((state) => state.counter.count);
  const voters = [
    "Anthony Reynolds",
    "Ben Much",
    "Andrew Stover",
    "Chris Alvarez",
  ];
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux made easy!</h1>
        <h3>Total votes: {count}</h3>
        {voters.map((voter) => (
          <Counter name={voter} />
        ))}
      </header>
    </div>
  );
};

export default App;
