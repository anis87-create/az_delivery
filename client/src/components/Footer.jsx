import React from 'react'
import {useLocation} from 'react-router-dom';
const Footer = () => {

  const location = useLocation();
  const hideAuth = ['/login','/register'].includes(location.pathname);
  return (
    !hideAuth && 
   (<div className='bg-black py-3 text-white fixed bottom-0 left-0 w-full z-50'>
      <div className='container'>  
       <div className='flex justify-between items-center'>
         <span>© 2025 FoodDelivery. All rights reserved.</span>
         <div className='flex w-[500px] justify-between'>
            <span>Privacy Policy</span>
            <span>Terms Of Service</span>
            <span>Cooke Policy</span>
            <span>Accessibility</span>
         </div>
       </div>
      </div> 
    </div>)
  )
}

export default Footer
