import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import "./App.css";
import Counter from "./Counter";
import {getUser} from "./redux/ducks/user";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const user = useSelector((state) => state.user.user);
  console.log(user);

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
        {user && (
          <h1>
            Hello {user.firstName} {user.lastName}. Welcome!
          </h1>
        )}
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
