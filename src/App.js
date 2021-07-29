import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import "./App.css";
import {getUser} from "./redux/ducks/user";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const user = useSelector((state) => state.user.user);
  console.log(user);

  return (
    <div className="App">
      <header className="App-header">
        {user && (
          <h1>
            Hello {user.firstName} {user.lastName}. Welcome!
          </h1>
        )}
      </header>
    </div>
  );
};

export default App;
