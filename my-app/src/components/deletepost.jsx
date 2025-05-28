
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../postsslice.js';

const DeletePost = () => {
  const [id, setId] = useState('');
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.posts);

  const handleDelete = () => {
    if (id) dispatch(deletePost(id));
  };

  

  return (
    <div className='function'>
      <h2>Delete Post</h2>
      <input
        type="number"
        placeholder="Post ID to delete"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
      {status === 'loading' && <p>Deleting...</p>}
      {status === 'succeeded' && <p>Post deleted successfully!</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      
    </div>
  );
};

export default DeletePost;
