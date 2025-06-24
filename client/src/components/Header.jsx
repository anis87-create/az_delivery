import React from 'react'
import { useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import { FiHome } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineTask } from "react-icons/md";
import { FaUtensils } from "react-icons/fa";
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const hideAuth = ['/login','/register'].includes(location.pathname);
  const { isAuth, user } = useSelector(state => state.auth);
  // Helper to get initials from user fullName
  const getInitials = (fullName) => {
    if (!fullName) return '';
    const names = fullName.trim().split(' ');
    if (names.length === 1) {
      return names[0].slice(0, 2).toUpperCase();
    }
    return (
      names[0].charAt(0).toUpperCase() +
      (names[1] ? names[1].charAt(0).toUpperCase() : '')
    );
  };

  return (
    <header
      className={`border-b border-gray-200 shadow-sm ${hideAuth ? 'bg-black' : ''}`}
    >
      <div
        className="flex justify-between items-center p-4 container"
      >
        <Link to='/'>
        <h2
          className={`font-bold text-xl flex ml-4 ml-2 justify-between ${hideAuth ? 'text-white' : 'text-gray-900'}`}
          style={{ width: '165px' }}
        >
          {!hideAuth && (
              <FaUtensils className="text-green-500" />
          )}
          Food Delivery
        </h2>
        </Link>
        {!hideAuth && (
          !isAuth ? (
            <div className='space-x-2 items-center flex justify-between' style={{ width: '150px' }}>
              <button
                className='inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium border border-input bg-background h-9 rounded-md px-3 hover:bg-gray-100 cursor-pointer transition-colors duration-2000'
                onClick={() => navigate('login')}
              >
                Login
              </button>
              <button
                className='p-2 bg-black text-white rounded-md cursor-pointer transition-colors duration-2000'
                onClick={() => navigate('register')}
              >
                Register
              </button>
            </div>
          ) : 
          (
          <nav className='space-x-2 items-center flex justify-between'>
             <div className='flex items-center p-3'>
              <FiHome  size={20}  />  
              <span className='hidden sm:inline' style={{marginLeft: '10px'}}>Home</span>
             </div>

             <div className='flex items-center p-3 text-green-500'>
              <IoCartOutline   size={20}  />  
              <span className='hidden sm:inline' style={{marginLeft: '10px'}}>Cart</span>
             </div>

              <div className='flex items-center p-3'>
              <MdOutlineTask  size={20}  />  
              <span className='hidden sm:inline' style={{marginLeft: '10px'}}>Orders</span>
             </div>

             <div className='flex items-center p-3'>
                <span>{user.fullName}</span>
                <Link to="/profile/edit">
                  <div className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full p-3 cursor-pointer" style={{marginLeft:'10px'}}>
                    <span className="text-gray-700  text-lg">
                      {getInitials(user.fullName)}
                    </span>
                  </div>
                </Link>
             </div>
          </nav>
          )
        )}
      </div>
    </header>
  )
}

export default Header
