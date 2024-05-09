import axios from "axios";
import { WishList } from "../contance/interface";




  
export const fetchDataFromAPI = async (): Promise<WishList[]> => {
    try {
      const response = await axios.get('https://api.example.com/data');
      const data: WishList[] = response.data;
      return data;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  };
  
  