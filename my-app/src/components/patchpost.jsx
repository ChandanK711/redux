
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePost } from '../postsslice.js';

const UpdatePost = () => {
  const [id, setId] = useState('');
  const [formData, setFormData] = useState({ title: '', body: '' });
  const dispatch = useDispatch();

  const { status, error } = useSelector((state) => state.posts);

  const handleUpdate = () => {
    if (!id || !formData.title || !formData.body) {
      alert("Please fill all fields");
      return;
    }

    dispatch(updatePost({ id, updatedData: formData }));
  };

  return (
    <div className='function'>
      <h2>Update Post</h2>
      <input
        type="number"
        placeholder="Post ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        placeholder="New Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <textarea
        placeholder="New Body"
        value={formData.body}
        onChange={(e) => setFormData({ ...formData, body: e.target.value })}
      />
      <button onClick={handleUpdate}>Update</button>

      {status === 'loading' && <p>Updating post...</p>}
      {status === 'failed' && <p style={{ color: 'red' }}>Error: {error}</p>}
      {status === 'succeeded' && <p style={{ color: 'green' }}>Post updated successfully!</p>}
    </div>
  );
};

export default UpdatePost;
