// src/pages/FilterPost.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsbyid } from '../postsslice.js';

const FilterPost = () => {
  const [id, setId] = useState('');
  const dispatch = useDispatch();
  const { currentPost, status, error } = useSelector((state) => state.posts);

  const handleFetch = () => {
    if (id%2==0) dispatch(fetchPostsbyid(id));
  };

  return (
    <div className='function'>
      <h2>Get Even Posts </h2>
      <input
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter Post ID"
      />
      <button onClick={handleFetch}>Fetch</button>

      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && currentPost && (
        <div>
          <h3>{currentPost.title}</h3>
          <p>{currentPost.body}</p>
        </div>
      )}
    </div>
  );
};

export default FilterPost;
