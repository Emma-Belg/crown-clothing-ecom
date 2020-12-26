import {userActionTypes} from "./user.types";
//it is important to set initial state b/c otherwise it is nothing when the app is first used
//this represents the initial state used in this reducer
const INITIAL_STATE = {
    currentUser: null
}

//the state here is something that Redux passes from the store to this reducer whenever this action fires
//the state will be whatever the current state is/was when the action fires
const userReducer = (state = INITIAL_STATE, action) => {
    //"every single reducer gets every action that gets fired even if those actions are not related to this reducer"
    switch (action.type) {
        case userActionTypes.SET_CURRENT_USER :
            return {
                ...state,
                //this is the value that needs to be passed into the app (in this case, our header.component)
                currentUser: action.payload
            }

        default:
            return state;
    }
}

export default userReducer;
