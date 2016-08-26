import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
// import reducers here

const rootReducer = combineReducers({
  routing: routerReducer
  //list reducers here
});

export default rootReducer;
