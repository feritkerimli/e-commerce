import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Favorite from './pages/Favorite';
import ShoppingCart from './pages/ShoppingCart';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchValue,setSearchValue] = useState(null);

  return (
    <div className="App">
      <Header setSelectedCategory={setSelectedCategory} setSearchValue={setSearchValue}/>
      <Routes>
        <Route path="/e-commerce/" element={<Home selectedCategory={selectedCategory} searchValue={searchValue}/>} />
        <Route path="/e-commerce/about" element={<About />} />
        <Route path="/e-commerce/favorite" element={<Favorite />} />
        <Route path="/e-commerce/shoppingcart" element={<ShoppingCart />} />
      </Routes>
      <Footer/>
    </div>
  );
}


