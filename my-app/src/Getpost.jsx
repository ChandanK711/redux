import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsbyid } from './postsslice.js';

const GetPost = () => {
    const dispatch = useDispatch();
    const [postId, setPostId] = useState('');
    const { currentPost, status, error } = useSelector((state) => state.posts);

    const handleFetch = () => {
    if (postId) dispatch(fetchPostsbyid(postId));
    };

    return(
        <div className="form">
            <h2>Get post</h2>
            <input
               type="number"
               placeholder="Enter Post ID (1–100)"
               value={postId}
               onChange={(e) => setPostId(e.target.value)}
            />
            <button onClick={handleFetch}>Get Post</button>
            
            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>Error: {error}</p>}
            {status === 'succeeded' && currentPost &&(
           <div>
             <h3>{currentPost.title}</h3>
              <p>{currentPost.body}</p>
            </div>
              )}
              {status === 'succeeded' && !currentPost && (
             <p>No post found for ID {postId}</p>
              )}

            
        </div>
            
        
    )

}

export default GetPost