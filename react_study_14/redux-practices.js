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

const com = () => {
  const num = store.getState();
  console.log(num);
};

store.subscribe(com);

store.dispatch({ type: "increment" });
