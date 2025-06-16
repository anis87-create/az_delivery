import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const hideAuth = ['/login','/register'].includes(location.pathname)
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
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package h-8 w-8 text-orange-500"><path d="m7.5 4.27 9 5.15"></path><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
          )}
          Food Delivery
        </h2>
        </Link>
        {!hideAuth && (
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
        )}
      </div>
    </header>
  )
}

export default Header
