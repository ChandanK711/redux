import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsslice.js'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
   
  },
});