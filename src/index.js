// External imports
import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// Local imports
import App from "App";
import rootReducer from "reducers";

// Assets
import "index.css";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const page = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(page, document.getElementById("root"));
