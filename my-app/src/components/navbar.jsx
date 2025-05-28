
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <p>REDUX VS ROUTER</p>
     <nav className='links'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/addposts">AddPosts</NavLink>
      <NavLink to="/list">List Posts</NavLink>
      <NavLink to="/filter">Filter Posts</NavLink>
      <NavLink to="/patch">Patch</NavLink>
      <NavLink to="/delete">Delete Post</NavLink>
     </nav>
    </div>
  );
};

export default Navbar;
