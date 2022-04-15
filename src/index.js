import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {combineReducers,createStore,applyMiddleware} from "redux";
// import createSagaMiddleware from  'redux-saga';
// import  myFirstReducer from './Redux/Reducers/reducer';
// import mySaga from './Redux/sagas';
import {Provider} from "react-redux";
import store from "./Redux/Store";

// const sagaMiddleware=createSagaMiddleware();
// const rootReducer=combineReducers({myFirstReducer});
// const store=createStore(rootReducer,applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(mySaga)

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
