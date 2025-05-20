
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchPostsbyid = createAsyncThunk('posts/fetchPostsbyid', async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return await response.json();
});

export const addPostbyid = createAsyncThunk('posts/addPostbyid', async (newPost) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
});

const postsslice = createSlice({
  name: 'posts',
  initialState: {
    items:[],
    currentPost: null,       
    status: 'idle',  
    error: null,
    poststatus: 'idle', 

  },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsbyid.fulfilled, (state, action) => {
        state.currentPost = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchPostsbyid.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPostsbyid.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addPostbyid.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.poststatus='succeeded'
      });
      
  },
});

export default postsslice.reducer;

