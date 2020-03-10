import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./App";
import {allReducers} from "./reducers"

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch(e) {
    console.log(e)
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if(serializedState == null) return undefined;
    return JSON.parse(serializedState);
  } catch(e) {
    console.log(e)
    return undefined;
  }
}

const perstistentState = loadFromLocalStorage();
const store = createStore(
  allReducers,
  perstistentState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(()=>saveToLocalStorage(store.getState()));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
