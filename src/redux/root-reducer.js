//root-reducer is the base reducer that represents all of the state of the app
//the root-reducer will be the code that combines all of the other states together

//a reducer is a function that gets 2 properties:
// - 1) state (object): representing last state or initial state (an object of what we are trying to store)
// - 2) action (object): an object always has a type (string value), can (may not) have a payload
//it receives the action

import {combineReducers} from "redux";

import userReducer from './user/user.reducer';

//the full state in redux is just a big JSON object, the keys represent individual "slices of state"/reducers
export default combineReducers({
    user: userReducer
})