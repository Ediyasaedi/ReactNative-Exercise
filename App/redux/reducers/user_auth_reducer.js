import { GET_USER_AUTH, SET_IS_VALID_USER } from '../constants';

const initialState = {
    userInfo: {},
    isValidUser: false
};

const userAuthReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case GET_USER_AUTH:
            return {
                ...state, userInfo: action.payload
            }
        case SET_IS_VALID_USER:
            return {
                ...state, isValidUser: action.payload
            }
        default:
            return state;
    }
}

export default userAuthReducer;