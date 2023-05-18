import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://64655c79228bd07b3549241b.mockapi.io/";


export const fetchTweets = createAsyncThunk(
   'tweets/fetchAll',
   async (_, thunkAPI) => {
     try {
       const response = await axios.get('/user');
       return response.data;
     } catch (e) {
      //  toast.error('Something went wrong! :(');
       return thunkAPI.rejectWithValue(e.message);
     }
   }
 );