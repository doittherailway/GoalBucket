import { SHOW_ASIDE, HIDE_ASIDE } from '../actions/ui_actions';

const asideReducer = (state = false, action) => {
    switch (action.type) {
        case SHOW_ASIDE:
            return true;
        case HIDE_ASIDE:
            return false;
        default:
            return state;
    }
}

export default asideReducer;