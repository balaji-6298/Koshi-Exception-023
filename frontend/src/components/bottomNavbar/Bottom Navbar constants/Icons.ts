import axios from "axios";
import { categories } from "./data";

export const icondata= async():Promise<categories[]>=>{
   try {
      let res=await axios.get(`https://koshi-exception-023-2.onrender.com/Properties`);
      return(res.data);
     } catch (error) {
      console.error(error);
      throw error;
     }
}