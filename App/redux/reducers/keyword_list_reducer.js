import { GET_KEYWORD_LIST } from '../constants';

const initialState = {
    keywordList: []
};

const keywordListReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case GET_KEYWORD_LIST:
            return {
                ...state, keywordList: [action.payload]
            }
            break;
        default:
            return state;
            break;
    }
}

export default keywordListReducer;