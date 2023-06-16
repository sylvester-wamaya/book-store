
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import NavBar from './components/NavBar'

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='categories' element={<Categories/>}/>
    </Routes>
    </>
  );
}

export default App;
