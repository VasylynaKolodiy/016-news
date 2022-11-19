import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {reducers} from "./reducers";
import {sagas} from "./sagas";
import createSagaMiddleware from "redux-saga";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";

const saga = createSagaMiddleware();

export const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(saga)
));

saga.run(sagas);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);



