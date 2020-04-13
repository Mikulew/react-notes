import types from 'types';

const INITIAL_STATE = {
  notes: [
    {
      id: 1,
      title: 'I want to be a React developer! #1',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, dolorem?',
      created: '2 days',
    },
  ],
  twitters: [
    {
      id: 1,
      title: 'React router',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, animi!',
      created: '3 days',
      twitterName: 'react_devv',
    },
  ],
  articles: [
    {
      id: 1,
      title: 'React.js developer #1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, architecto.',
      articleUrl: 'https://polskifrontend.pl',
      created: '1 day',
    },
  ],
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
        userID: action.payload.data.id,
      };
    case types.ADD_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.item],
      };
    case types.REMOVE_ITEM:
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
