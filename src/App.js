import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='categories' element={<Categories/>}/>
    </Routes>
  );
}

export default App;
