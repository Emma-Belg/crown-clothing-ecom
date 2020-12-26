import {userActionTypes} from "./user.types";
//action creator functions
//eg. the user action is a function that gets the user but RETURNS an action OBJECT

//takes one param (the user object in this case - userAuth or user Snapshot object or null)
//instead of calling this.set state as you would without Redux, we will fire off an action that holds that value that we were setting state to before and call it user
export const setCurrentUser = user => ({
    //always align the action creator's type with the reducer's type expectation (in the switch)
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
});