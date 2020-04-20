import types from 'types';

const INITIAL_STATE = {
  userID: '5e9a0e80975d654b282dacf4',
  notes: [],
  twitters: [],
  articles: [],
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...action.payload.data],
      };
    case types.AUTH_SUCCESS:
      return {
        ...state,
        userID: action.payload.data._id,
      };
    case types.ADD_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.data],
      };
    case types.REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter(item => item.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
