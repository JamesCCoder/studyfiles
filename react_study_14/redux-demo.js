const redux = require("redux");

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const store = redux.createStore(counterReducer);

const counterComponent = () => {
  const calculation = store.getState();
  console.log(calculation);
};

store.subscribe(counterComponent);

store.dispatch({ type: "decrement" });
