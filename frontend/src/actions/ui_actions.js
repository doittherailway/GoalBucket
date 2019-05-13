export const RECEIVE_MODAL = 'RECEIVE_MODAL';
export const CLEAR_MODAL = 'CLEAR_MODAL';

export const receiveModal = modal => ({
    type: RECEIVE_MODAL,
    modal
});

export const clearModal = () => ({
    type: CLEAR_MODAL
})