import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import { IoEyeOutline } from "react-icons/io5";
import {Link, useNavigate} from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc" 
const Login = () => {
  const navigate = useNavigate();
  return (
    <main className='flex-1 container px-4 py-8 text-center mx-auto'>
      <div className='max-w-md container mx-auto'>
      <h1 className='font-bold text-2xl mb-2'>Welcome to FoodDelivery</h1>
      <p className='text-gray-500 mb-12 p-4'>Sign to continue</p>
      <form className="flex flex-col gap-4 items-center">
        <div className="flex items-center w-full max-w-md border border-input rounded-md bg-background px-3 py-2" style={{ borderColor: '#eee' }}>
          <FaRegUser size={20} color="#9ca3af"/>
          <input className="flex-1 h-10 bg-transparent text-sm placeholder:text-muted-foreground focus-visible:outline-none ml-0 pl-3" placeholder="Email" required type="email" style={{ borderColor: '#eee' }} />
        </div>
        <div className="flex items-center w-full max-w-md border border-input rounded-md bg-background px-3 py-2" style={{ borderColor: '#eee' }}>
          <TbLockPassword size={20} color="#9ca3af"/>
          <input className="flex-1 h-10 bg-transparent text-sm placeholder:text-muted-foreground focus-visible:outline-none pr-2 ml-0 pl-3" placeholder="Password" required type="password" style={{ borderColor: '#eee' }} />
          <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground h-8 w-8 ml-2" type="button">
            <IoEyeOutline size={20} color="#9ca3af"/>
          </button>
        </div>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-r</svg>ing focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 w-full max-w-md bg-orange-500 hover:bg-orange-600 text-white cursor-pointer
        
        " style={{marginBottom:'20px'}} type="submit"
        >
          Login
        </button>
      </form>
        <div className="relative my-6"><div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full"></div><span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-50 px-2 text-sm text-gray-500">Or login with</span></div>
        <div className="grid grid-cols-2 gap-4" style={{paddingTop:'34px'}}><button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Google</button><button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</button></div>
        <div className="text-center mt-8" style={{ marginTop:'12px'}}><p className="text-sm text-gray-500" >Don't have an account?  <Link to='/register' className='text-orange-500 hover:text-orange-600'>Sign up</Link> </p></div>
      </div>  
    </main>
  )
}

export default Login
