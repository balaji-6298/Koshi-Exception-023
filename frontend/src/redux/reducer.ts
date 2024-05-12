import { combineReducers } from "redux";
import { WishList } from "../contance/interface"; 
import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, DELETE_ITEM, ADD_TO_CART } from "./action";


const initialState = {
  loading: false,
  data: [],
  error: null,
  cart: []
};

const dataReducer = (state = initialState, action: any) => {
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
    case DELETE_ITEM:
      return {
        ...state,
        data: state.data.filter((item: WishList) => item.id !== action.payload),
      };
      case ADD_TO_CART:
 
  return {
    ...state,
    cart: [...state.cart, action.payload],
  };

    default:
      return state;
  }
};


const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;



