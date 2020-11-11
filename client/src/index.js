import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// Provider is a component that makes the store accessible to every
// component in the app
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

// below is an axios helper to test in the DOM the sending of emails
// format: const survey = { title: 'my title', subject: 'my subject',
// recipients: 'email@gmail.com', body: 'heres the body of the email' };
// then type survey, then => axios.post('/api/surveys', survey);
import axios from "axios";
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  // store is Redux store
  document.querySelector("#root")
);
// < /> is jsx instance
// the #root is the body div id from index.html
