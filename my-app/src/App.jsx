import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Addpost } from './addposts'
import './App.css'
import Navbar from './components/navbar'
import GetPost from './Getpost'
import ListPosts from './components/listposts'
import FilterPost from './components/filterpost'
import UpdatePost from './components/patchpost'
import DeletePost from './components/deletepost'


function App() {
  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<GetPost/>} />
        <Route path="/addposts" element={<Addpost/>} />

        <Route path="/list" element={<ListPosts/>} />
        <Route path="/filter" element={<FilterPost />} />
        <Route path="/patch" element={<UpdatePost/>} />
        <Route path="/delete" element={<DeletePost />} />
      </Routes>
    </>

  )
  
}

export default App
