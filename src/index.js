import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider, useSelector } from 'react-redux'
import { rootReducer } from './redux/rootReducer';
import thunk from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
    //  ,
    //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  )
  
)



ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
