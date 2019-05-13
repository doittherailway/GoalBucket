export const RECEIVE_MODAL = 'RECEIVE_MODAL';
export const CLEAR_MODAL = 'CLEAR_MODAL';
export const SHOW_ASIDE = 'SHOW_ASIDE';
export const HIDE_ASIDE = 'HIDE_ASIDE';

export const receiveModal = modal => ({
    type: RECEIVE_MODAL,
    modal
});

export const clearModal = () => ({
    type: CLEAR_MODAL
})

export const showAside = () => ({
    type: SHOW_ASIDE
})

export const hideAside = () => ({
    type: HIDE_ASIDE
})