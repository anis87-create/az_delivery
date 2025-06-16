import React, { useState } from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { PiPhone } from 'react-icons/pi';
import { TbLockPassword } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc" 
import { IoEyeOutline } from "react-icons/io5";
import { GrRestaurant } from "react-icons/gr";
import { IoRestaurantOutline } from "react-icons/io5";
import { PiAddressBookThin } from "react-icons/pi";

const Register = () => {
  const [accountType, setAccountType]= useState('');
  
  return (
    <main className='flex-1 container px-4 py-8 text-center mx-auto'>
      <div className='max-w-md container mx-auto'>
        <h1 className='font-bold text-2xl mb-2'>Join FoodDelivery</h1>
        <p className='text-gray-500 mb-12 p-4'>Create a new account to get Started</p>
        <form className="flex flex-col gap-4 items-center">
          <div className="flex items-center w-full max-w-md border border-input rounded-md bg-background px-3 py-2" style={{ borderColor: '#eee' }}>
            <FaRegUser size={20} color="#9ca3af" />
            <input className="flex-1 h-10 bg-transparent text-sm placeholder:text-muted-foreground focus-visible:outline-none ml-0 pl-3" placeholder="Full Name" required type="text" style={{ borderColor: '#eee' }} />
          </div>
          <div className="flex items-center w-full max-w-md border border-input rounded-md bg-background px-3 py-2" style={{ borderColor: '#eee' }}>
            <MdOutlineEmail size={20} color="#9ca3af" /> 
            <input className="flex-1 h-10 bg-transparent text-sm placeholder:text-muted-foreground focus-visible:outline-none ml-0 pl-3" placeholder="Email" required type="email" style={{ borderColor: '#eee' }} />
          </div>
          <div className="flex items-center w-full max-w-md border border-input rounded-md bg-background px-3 py-2" style={{ borderColor: '#eee' }}>
            <PiPhone size={20} color="#9ca3af" />
            <input className="flex-1 h-10 bg-transparent text-sm placeholder:text-muted-foreground focus-visible:outline-none ml-0 pl-3" placeholder="Phone Number" required type="tel" style={{ borderColor: '#eee' }} />
          </div>
          {/* Account Type select */}
          <div className="flex items-center w-full max-w-md border border-input rounded-md bg-background px-3 py-2" style={{ borderColor: '#eee' }}>
            <select 
           
            id="accountType" name="accountType" required className="flex-1 h-10 bg-transparent text-sm placeholder:text-muted-foreground focus-visible:outline-none ml-0 pl-3"
            onChange={(e) => {
              setAccountType(e.target.value)
            }}
            >
              <option value="" hidden>Select Account Type</option>
              <option value="customizer">Customizer</option>
              <option value="restaurant">Restaurant Owner</option>
              <option value="delivery">Delivery Person</option>
            </select>
            </div>
            {accountType === 'customizer' && <>
              <div className="flex items-center w-full max-w-md border border-input rounded-md bg-background px-3 py-2" style={{ borderColor: '#eee' }}>
                <PiAddressBookThin size={20} color="#9ca3af" />
                <input className="flex-1 h-10 bg-transparent text-sm placeholder:text-muted-foreground focus-visible:outline-none pr-2 ml-0 pl-3" placeholder="Address" required style={{ borderColor: '#eee' }} />
                </div>
            </>}

            {accountType === 'restaurant' && 
            <>
              <div className="flex items-center w-full max-w-md border border-input rounded-md bg-background px-3 py-2" style={{ borderColor: '#eee' }}>
                <GrRestaurant size={20} color="#9ca3af" />
                <input className="flex-1 h-10 bg-transparent text-sm placeholder:text-muted-foreground focus-visible:outline-none pr-2 ml-0 pl-3" placeholder="Restaurant Name" required style={{ borderColor: '#eee' }} />
                </div>
                <div className="flex items-center w-full max-w-md border border-input rounded-md bg-background px-3 py-2" style={{ borderColor: '#eee' }}>
                <IoRestaurantOutline size={20} color="#9ca3af" />
                <input className="flex-1 h-10 bg-transparent text-sm placeholder:text-muted-foreground focus-visible:outline-none pr-2 ml-0 pl-3" placeholder="Restaurant Address" required style={{ borderColor: '#eee' }} />
              </div>
            </>
            }

            {accountType === 'delivery' && 
            <>
              <div className="flex items-center w-full max-w-md border border-input rounded-md bg-background px-3 py-2" style={{ borderColor: '#eee' }}>
              <select 
                id="vehicleType" 
                name="vehicleType" 
                required 
                className="form-select flex-1 h-10 bg-transparent text-sm placeholder:text-muted-foreground focus-visible:outline-none ml-0 pl-3" 
                style={{ borderColor: '#eee' }}
                onChange={(e) => { }}
            >
              <option value="" hidden>Select Vehicle Type</option>
              <option value="bycycle">Bycycle</option>
              <option value="car">Car</option>
              <option value="scooter">Scooter</option>
            </select>
            </div>
            </>
          }
          {/* Removed invalid MUI Select components to fix dispatcher is null error */}
          {/* Confirm Password input styled like password input */}
          <div className="flex items-center w-full max-w-md border border-input rounded-md bg-background px-3 py-2" style={{ borderColor: '#eee' }}>
            <TbLockPassword size={20} color="#9ca3af" />
            <input id="confirmPassword" name="confirmPassword" className="flex-1 h-10 bg-transparent text-sm placeholder:text-muted-foreground focus-visible:outline-none pr-2 ml-0 pl-3" placeholder="Confirm Password" required type="password" style={{ borderColor: '#eee' }} />
            <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground h-8 w-8 ml-2" type="button">
              <IoEyeOutline size={20} color="#9ca3af"/>
            </button>
          </div>
          <div className="flex items-center w-full max-w-md border border-input rounded-md bg-background px-3 py-2" style={{ borderColor: '#eee' }}>
            <TbLockPassword size={20} color="#9ca3af" />
            <input className="flex-1 h-10 bg-transparent text-sm placeholder:text-muted-foreground focus-visible:outline-none pr-2 ml-0 pl-3" placeholder="Password" required type="password" style={{ borderColor: '#eee' }} />
            <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground h-8 w-8 ml-2" type="button">
              <IoEyeOutline size={20} color="#9ca3af"/>
            </button>
          </div>
         
          <div className="w-full max-w-md flex justify-start">
            <p className="text-xs text-gray-500">
              By signing up, you agree to our <a href="/terms" className="text-orange-500 hover:text-orange-600">Terms of Service</a> and <a href="/privacy" className="text-orange-500 hover:text-orange-600">Privacy Policy</a>.
            </p>
          </div>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 w-full max-w-md bg-orange-500 hover:bg-orange-600 text-white cursor-pointer"
          style={{marginBottom:'20px'}}
          type="submit">
            Create Account
          </button>
        </form>
        <div className="relative my-6"><div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full"></div><span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-50 px-2 text-sm text-gray-500">Or sign up with</span></div>
        <div className="grid grid-cols-2 gap-4" style={{paddingTop:'34px'}}>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
            <FcGoogle className="mr-2" size={20} />
            Google
          </button>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
            <FaFacebookF className="mr-2" size={20} />
            Facebook
          </button>
        </div>
        <div className="text-center mt-8" style={{ marginTop:'12px'}}><p className="text-sm text-gray-500" >Already have an account? <Link to='/login' className='text-orange-500 hover:text-orange-600'>login</Link> </p></div>
      </div>
    </main>
  )
}

export default Register
