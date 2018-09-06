import { FETCHING_MASTERNODE_LIST, FETCHING_MASTERNODE_LIST_SUCCESS, FETCHING_MASTERNODE_LIST_FAIL } from './../utils/ActionTypes';

const initialState = {
    errorMessage: null,
    data: [],
    isFetching: false,
    hasError: false
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCHING_MASTERNODE_LIST:
            return Object.assign({}, state, {
                isFetching: true,
                data: [],
                errorMessage: null,
                hasError: false
            });

        case FETCHING_MASTERNODE_LIST_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                errorMessage: null,
                hasError: false
            });

        case FETCHING_MASTERNODE_LIST_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                data: [],
                errorMessage: action.payload.errno,
                hasError: true
            });
        default:
            return state;
    }
}