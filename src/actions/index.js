import axios from 'axios';
import types from 'types';

export const removeItem = (itemType, id) => ({
  type: types.REMOVE_ITEM,
  payload: { itemType, id },
});

export const addItem = (itemType, itemContent) => {
  const getId = () =>
    `_${Math.random()
      .toString(36)
      .substr(2, 9)}`;

  return {
    type: types.ADD_ITEM,
    payload: {
      itemType,
      item: {
        id: getId(),
        ...itemContent,
      },
    },
  };
};

export const authenticate = (username, password) => dispatch => {
  dispatch({
    type: types.AUTH_REQUEST,
  });

  return axios
    .post('http://localhost:9000/api/user/login', {
      username,
      password,
    })
    .then(payload => {
      console.log(payload);
      dispatch({ type: types.AUTH_SUCCESS, payload });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: types.AUTH_FAILURE });
    });
};
