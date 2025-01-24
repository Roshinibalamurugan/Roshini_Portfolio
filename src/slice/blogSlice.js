import { createSlice } from "@reduxjs/toolkit";

const initialState=  [
    {id:1,author:"sanjeevi",data:"lorem..."},
    {id:2,author:"pavi",data:"lorem..."},
    {id:3,author:"priya",data:"lorem..."},
    {id:4,author:"megala",data:"lorem..."},
    {id:5,author:"pabi",data:"lorem..."}
];

const post = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.unshift(action.payload);
    }
  }
});
export const { addPost } = post.actions;
export default post.reducer;

