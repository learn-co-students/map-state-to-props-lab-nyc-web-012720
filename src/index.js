import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createStore } from 'redux'; 
import { Provider } from 'react-redux';
import manageUsers from './reducers/manageUsers'

// createStore returns a store given a reducer
const store = createStore(
  manageUsers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); 

// Provider gives us the ability to access the store from any component
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
