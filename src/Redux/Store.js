import createSagaMiddleware from  'redux-saga';
import  myFirstReducer from './Reducers/reducer';
import mySaga from './sagas';
import {applyMiddleware, combineReducers, createStore} from "redux";

const sagaMiddleware=createSagaMiddleware();
const rootReducer=combineReducers({myFirstReducer});
const store=createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

export default store;