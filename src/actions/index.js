import axios from 'axios';
import types from 'types';

export const removeItem = (itemType, id) => dispatch => {
  dispatch({
    type: types.REMOVE_ITEM_REQUEST,
  });

  return axios
    .delete(`localhost:9000/api/note/${id}`)
    .then(() =>
      dispatch({
        type: types.REMOVE_ITEM_SUCCESS,
        payload: {
          itemType,
          id,
        },
      }),
    )
    .catch(() => dispatch({ type: types.REMOVE_ITEM_FAILURE }));
};

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

export const fetchItems = itemType => (dispatch, getState) => {
  dispatch({
    type: types.FETCH_REQUEST,
  });

  return axios
    .get('http://localhost:9000/api/notes/type', {
      params: {
        type: itemType,
        userID: getState().userID,
      },
    })
    .then(({ data }) => dispatch({ type: types.FETCH_SUCCESS, payload: { data, itemType } }))
    .catch(() => dispatch({ type: types.FETCH_FAILURE }));
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
    .then(payload => dispatch({ type: types.AUTH_SUCCESS, payload }))
    .catch(() => dispatch({ type: types.AUTH_FAILURE }));
};
