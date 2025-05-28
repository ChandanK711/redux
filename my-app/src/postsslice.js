
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch(BASE_URL);
  return await response.json();
});

export const fetchPostsbyid = createAsyncThunk('posts/fetchPostById', async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  return await response.json();
});

export const addPostbyid = createAsyncThunk('posts/addPost', async (newPost) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
});

export const updatePost = createAsyncThunk(
  'posts/updatePost',
  async ({ id, updatedData }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PATCH',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error('Failed to update post');
    }

    return await response.json();
  }
);


export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
  await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
  return id;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    items: [],
    currentPost: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    clearCurrentPost: (state) => {
    state.currentPost = null;
   },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchPostsbyid.fulfilled, (state, action) => {
        state.currentPost = action.payload;
        state.status = 'succeeded';
      })
      .addCase(addPostbyid.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updatePost.pending, (state) => {
         state.status = 'loading';
      })
      .addCase(updatePost.fulfilled, (state, action) => {
         state.status = 'succeeded';
         const index = state.items.findIndex(post => post.id === action.payload.id);
          if (index !== -1) {
            state.items[index] = { ...state.items[index], ...action.payload };
          }
      })
      .addCase(updatePost.rejected, (state, action) => {
         state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deletePost.pending, (state) => {
      state.status = 'loading';
      })
      .addCase(deletePost.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.items = state.items.filter((post) => post== action.payload);
      })
      .addCase(deletePost.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
      });
  }
});

export default postsSlice.reducer;
export const { clearCurrentPost } = postsSlice.actions;
