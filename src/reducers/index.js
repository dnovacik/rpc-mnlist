import { combineReducers } from 'redux';
import MasternodesReducer from './MasternodeReducer';

export default combineReducers({
    masternodes: MasternodesReducer
});