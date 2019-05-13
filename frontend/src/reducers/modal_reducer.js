import { RECEIVE_MODAL, CLEAR_MODAL } from '../actions/ui_actions';

const ModalReducer = (state = null, action) => {
    switch(action.type) {
        case RECEIVE_MODAL:
            return action.modal;
        case CLEAR_MODAL:
            return null;
        default:
            return state;
    }
}

export default ModalReducer;