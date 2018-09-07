import axios from 'axios';
import { FETCHING_MASTERNODE_LIST, FETCHING_MASTERNODE_LIST_SUCCESS, FETCHING_MASTERNODE_LIST_FAIL } from './../utils/ActionTypes';

export default async function GetMasternodeList() {
    return dispatch => {
        dispatch({ type: FETCHING_MASTERNODE_LIST})

        return axios.get('/getmasternodelist')
            .then(res => {
                if (res.data.errno) {
                    dispatch({ type: FETCHING_MASTERNODE_LIST_FAIL, payload: res.data })
                } else {
                    dispatch({ type: FETCHING_MASTERNODE_LIST_SUCCESS, payload: res.data })
                }
            })
            .catch(err => {
                dispatch({ type: FETCHING_MASTERNODE_LIST_FAIL, payload: err })
            })
    }
}