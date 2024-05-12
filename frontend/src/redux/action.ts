// action.ts
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const DELETE_ITEM = 'DELETE_ITEM';
export const ADD_TO_CART = 'ADD_TO_CART';

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST
});

export const fetchDataSuccess = (data: any) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data
});

export const fetchDataFailure = (error: any) => ({
  type: FETCH_DATA_FAILURE,
  payload: error
});

export const deleteItem = (id: string) => ({
  type: DELETE_ITEM,
  payload: id,
});

export const addToCart = (item: any) => ({
  type: ADD_TO_CART,
  payload: item,
});






