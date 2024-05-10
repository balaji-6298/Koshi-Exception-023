

export interface WishList {
    id: string;
    url: string;
    location: string;
    type: string;
    price: string;
    rating: number;
  }
  
  export interface DataState {
    loading: boolean;
    data: WishList[] | null;
    error: string | null;
  }
  
  export const initialState: DataState = {
    loading: false,
    data: null,
    error: null,
  };