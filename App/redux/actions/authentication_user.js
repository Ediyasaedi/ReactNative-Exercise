// import axios from 'axios';
import { GET_USER_AUTH, SET_IS_VALID_USER } from '../constants';
import { storeData } from '../../helpers/hp_asyncStorage';

export const setUserAuth = (userAuth) => {
    return {
        type: GET_USER_AUTH,
        payload: userAuth
    };
}

export const setIsValidUser = (bool) => {
    return {
        type: SET_IS_VALID_USER,
        payload: bool
    }
}

export const getUserLogin = (data) => {
    return (dispatch) => {
        // call login api
        if( data.username == 'perwira.lona@btpn.com' && data.password == 'qwerty123'){
            // dispatch(setUserAuth(data))
            dispatch(setIsValidUser(true))
            console.log("data di getUserLogin action => ", data)
            storeData(data)
        } else {
            dispatch(setIsValidUser(false))
            alert("Actions: Username or password invalid")
        }
    }
}
