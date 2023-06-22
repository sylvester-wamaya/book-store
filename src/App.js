/* eslint-disable */
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import NavBar from './components/NavBar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBooks } from './redux/books/booksSlice';

function App() {
  
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getBooks())
  },[dispatch])

  return (    
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
