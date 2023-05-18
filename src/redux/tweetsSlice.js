import { createSlice } from "@reduxjs/toolkit";
import { fetchTweets } from "./operations";



const tweetsInitialState = {
   items: [],
   limit: 3,
   isLoading: false,
   error: null,
 };


 const tweetsSlice = createSlice({
   name: "tweets",
   initialState: tweetsInitialState,
   // Додаємо обробку зовнішніх екшенів
   extraReducers: {
     [fetchTasks.pending](state, action) {},
     [fetchTasks.fulfilled](state, action) {},
     [fetchTasks.rejected](state, action) {},
   },
 });
 export const tasksReducer = tasksSlice.reducer;