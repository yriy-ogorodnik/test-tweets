import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://64655c79228bd07b3549241b.mockapi.io/";

export const fetchTweets = createAsyncThunk(
  "tweets/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/users");
      return response.data;
    } catch (e) {
      toast.error("Something went wrong! :(");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchTweetsByPage = createAsyncThunk(
  "tweets/fetchPages",
  async (limit, thunkAPI) => {
    try {
      const response = await axios.get(`/users?page=1&limit=${limit}`);
      return response.data;
    } catch (e) {
      toast.error("Something went wrong! :(");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addFollower = createAsyncThunk(
  "tweets/addFollower",
  async (user, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${user.id}`, {
        ...user,
        followers: user.followers + 1,
        following: !user.following,
      });
      return response.data;
    } catch (e) {
      toast.error("Something went wrong! :(");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteFollower = createAsyncThunk(
  "tweets/deleteFollower",
  async (user, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${user.id}`, {
        ...user,
        followers: user.followers - 1,
        following: !user.following,
      });
      return response.data;
    } catch (e) {
      toast.error("Something went wrong! :(");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
