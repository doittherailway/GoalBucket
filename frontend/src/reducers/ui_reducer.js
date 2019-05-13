import { combineReducers } from 'redux';
import modal from './modal_reducer';
import aside from './aside_reducer';

const UIReducer = combineReducers({
    modal,
    aside
})

export default UIReducer;