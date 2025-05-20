import React,{useState} from "react";
import { useDispatch , useSelector} from "react-redux";
import {addPostbyid} from "./postsslice.js"


export function Addpost(){
    const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { poststatus,items } = useSelector((state) => state.posts);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && body) {
      dispatch(addPostbyid({ title, body }));
      setTitle('');
      setBody('');
      
    }
  };

  return (
    <div className="form">
      <h2>Add Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Enter body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

