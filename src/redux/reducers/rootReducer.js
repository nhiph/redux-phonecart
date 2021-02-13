import { combineReducers } from 'redux';
import { gioHangReducer } from './gioHangReducer';

//Store ung dung
export const rootReducer = combineReducers ({
    // NOi chua cac reducer (store con)
    gioHangReducer
})