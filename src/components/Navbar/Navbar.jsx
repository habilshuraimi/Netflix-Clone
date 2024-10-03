import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import search from '../../assets/search_icon.svg';
import bell from '../../assets/bell_icon.svg';
import profile from '../../assets/profile_img.png';
import caret from '../../assets/caret_icon.svg';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => {
  const navRef = useRef();
  const [searchVisible, setSearchVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSearch = () => {
    setSearchVisible((prev) => !prev);
  };

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="Logo" />
        <ul>
          <li>Home</li>
          <li>TV shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        {searchVisible && <SearchBar />}
        <img
          src={search}
          alt="Search"
          className='icons'
          onClick={toggleSearch}
        />
        <p>Children</p>
        <img src={bell} alt="Notifications" className='icons' />
        <div className="navbar-profile">
          <img src={profile} alt="Profile" className='profile' />
          <img src={caret} alt="Caret" />
          <div className="dropdown">
            <p>My Account</p>
            <p>My List</p>
            <p>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
