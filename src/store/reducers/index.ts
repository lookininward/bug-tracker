import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { TOGGLE_SIDEBAR, CREATE_TICKET } from '../actions';

const sidebar = (state = { isOpenSideBar: false }, action: any) => {
  const { type } = action;
  switch (type) {
    case TOGGLE_SIDEBAR: {
      return {
        ...state,
        isOpenSideBar: !state.isOpenSideBar
      }
    }
    default:
      return state;
  }
}

const modals = (state =  {}, action: any) => {
  const { type } = action;
  switch (type) {
    case CREATE_TICKET: {
      return {
        ...state,
      }
    }
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  sidebar,
  modals,
});
