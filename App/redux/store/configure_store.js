import { createStore, combineReducers, applyMiddleware } from 'redux';
import keywordListReducer from '../reducers/keyword_list_reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    keywordList: keywordListReducer
});

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk))
};

export default configureStore;