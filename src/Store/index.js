import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ACTION_TYPES } from './actions';

const initialState = {
  restaurantsListData: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.SAVE_DATA: {
      const { payload } = action;

      return {
        ...state,
        restaurantsListData: payload,
      };
    }

    default:
      return state;
  }
}

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
