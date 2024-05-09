import { combineReducers } from "redux";
import { initialState } from "../contance/interface";
import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "./action";

 export const dataReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case FETCH_DATA_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: null,
        };
      case FETCH_DATA_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  export const rootReducer = combineReducers({
    data: dataReducer,
  });