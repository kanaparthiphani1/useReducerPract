import { useReducer } from "react";
import "./styles.css";

const initialState = {
  count1: 0,
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return { count1: currentState.count1 + (action.val ? action.val : 1) };
    case "decrement":
      return { count1: currentState.count1 - (action.val ? action.val : 1) };
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1> count - {state.count1} </h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}> Reset </button>
      <button onClick={() => dispatch({ type: "increment", val: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", val: 5 })}>
        Decrement 5
      </button>
    </div>
  );
}
