import {combineReducers} from 'redux';

// import modal from './modal';

// const appReducer = combineReducers({modal});

const rootReducer = (state, action) => {
  let resetState = state;

  if (action.type === 'LOG_OUT') {
    resetState = undefined;
  }

  // return appReducer(resetState, action);
};

// return rootReducer;
