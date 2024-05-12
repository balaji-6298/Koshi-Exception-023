

import axios from "axios";
import { WishList } from "../contance/interface";

export const fetchDataFromCart = async (): Promise<WishList[]> => {
    try {
        
        const response = await axios.get('https://koshi-exception-023-1.onrender.com/cart');
        const data: WishList[] = response.data;
        return data;
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
};
