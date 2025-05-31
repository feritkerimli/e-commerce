import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Contact from '../pages/Contact';
import Category from '../pages/Category';
import { useDispatch, useSelector } from 'react-redux';
import { change } from '../redux/loginRegisterSlice';
import LoginRegister from './LoginRegister';
import { FaSignInAlt,FaUserPlus } from 'react-icons/fa';
export default function Header(props) {
  const [inputValue, setInputValue] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const search = () => {
    props.setSearchValue(inputValue.trim().toLowerCase());
  };

  const dispatch = useDispatch();
  const isActive = useSelector(state => state.myLoginRegister.isActive);

  return (
    <div className="Header">
      <div className='logo'>
        Luxera <span>•</span>
      </div>

      <div className={`nav ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/e-commerce/" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/e-commerce/about" onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink to="/e-commerce/favorite" onClick={() => setMenuOpen(false)}>Favorite</NavLink>
        <NavLink to="/e-commerce/shoppingcart" onClick={() => setMenuOpen(false)}>Shopping Cart</NavLink>
        <Contact />
        <Category setSelectedCategory={props.setSelectedCategory} />
      </div>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search by title or category"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className='main-btn' onClick={search}>
          <img src="../img/search.svg" alt="search button" />
        </button>
      </div>

      <button className='main-btn login-register' onClick={() => dispatch(change(isActive))}>
        <FaSignInAlt /> | <FaUserPlus />
      </button>

      <div className={`burger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <LoginRegister />
    </div>
  );
}

