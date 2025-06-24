import React, { useEffect } from 'react'
import restaurantCover1 from '../assets/images/restaurant-cover-1.avif';
import restaurantCover2 from '../assets/images/restaurantcover2.avif';
import restaurantCover3 from '../assets/images/restaurantcover3.avif';
import { FaMapMarker } from "react-icons/fa";
import { useState } from 'react';
import data from '../data/restaurants';
import { FaStar } from "react-icons/fa6"
const Home = () => {
  const carouselImages = [
    {
      src: restaurantCover1,
      title: '50% OFF your First Order',
      description: 'Use code: WELCOME50',
      button: 'Order Now'
    },
    {
      src: restaurantCover2,
      title: 'Free Delivery on Weekends',
      description: 'No minimum order value',
      button: 'Browse Menu'
    },
    {
      src: restaurantCover3,
      title: 'Try Our New Dishes',
      description: 'Freshly added to the menu',
      button: 'See What\'s New'
    }
  ];

  const [current, setCurrent] = useState(0);
  const [restaurants, setRestaurants] = useState([]);
  const [value, setValue]=  useState('');

  const nextSlide = () => setCurrent((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  useEffect(() => {
    let items = data.filter(item => item.name.includes(value));   
    setRestaurants(items)
  }, [value]);

  const handleChange= (e) => (
    setValue(e.target.value)
  )
  return (
    <>
    <div className='h-screen bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 text-white py-12 sm:py-16 lg:py-24'>
      <h1 className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight'>Delicious food delivered to your door</h1>
      <p className='text-lg sm:text-xl text-center px-4'> Order from your favorite restaurants and get fresh food delivered fast 
      </p>
       <div className="flex items-center  my-4 border-2 border-gray-200 rounded-md   bg-white"
         style={{margin:'40px auto', width:'50%'}}
         >
           <FaMapMarker color='#000' className="text-gray-400 mr-2" />
           <input placeholder="Search for restaurants, cuisines, or dishes..." class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900" 
           onChange={handleChange}
           type="text" value={value}></input>
         </div>
      <div className='flex justify-between items'>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 max-w-3xl" style={{margin:'auto'}}>
          <div class="text-center"><div class="text-xl sm:text-2xl md:text-3xl font-bold">500+</div>
          <div class="text-xs sm:text-sm opacity-80">Restaurants</div>
          </div><div class="text-center"><div class="text-xl sm:text-2xl md:text-3xl font-bold">50K+</div>
          <div class="text-xs sm:text-sm opacity-80">Happy Customers</div>
          </div><div class="text-center"><div class="text-xl sm:text-2xl md:text-3xl font-bold">30min</div><div class="text-xs sm:text-sm opacity-80" __v0_r="0,4876,4907">Avg Delivery</div></div><div class="text-center" __v0_r="0,4973,4986"><div class="text-xl sm:text-2xl md:text-3xl font-bold" __v0_r="0,5017,5060">4.8★</div><div class="text-xs sm:text-sm opacity-80" __v0_r="0,5101,5132">App Rating</div></div></div>
      </div>   
    </div>  
    <div className='container'>
      <div className='flex w-full h-[400px]' style={{margin:'82px 0px'}}>
        <div className='flex flex-1 bg-card shadow-sm bg-gradient-to-r from-green-500 to-green-700 overflow-hidden border-0 p-8 items-center' style={{borderTopLeftRadius:'12px', borderBottomLeftRadius:'12px'}}>
          <div>
            <h3 className='text-white text-3xl font-bold' style={{marginBottom:'12px'}}>
              {carouselImages[current].title}
            </h3>
            <p className='text-white'>{carouselImages[current].description}</p>
            <button className='bg-white text-black h-10 hover:bg-gray-100 rounded-full px-6 py-2 text-sm transition-colors font-medium cursor-pointer' style={{margin:'12px 0px'}}>
              {carouselImages[current].button}
            </button>
            <div className="flex gap-2 mt-4">
              <button onClick={prevSlide} className="bg-white/30 text-white rounded-full px-3 py-1 text-xs hover:bg-white/50 transition-colors cursor-pointer">&lt;</button>
              <button onClick={nextSlide} className="bg-white/30 text-white rounded-full px-3 py-1 text-xs hover:bg-white/50 transition-colors cursor-pointer">&gt;</button>
            </div>
          </div>
        </div>
        <div className='flex-1 bg-gray-500' style={{borderTopRightRadius:'12px', borderBottomRightRadius:'12px', overflow: 'hidden'}}>
          <img 
            src={carouselImages[current].src} 
            className='h-full object-cover' 
            style={{width: '100%',  borderTopRightRadius: '12px', borderBottomRightRadius: '12px', objectFit: 'cover'}} 
            alt='' 
          />
        </div>
      </div>
      <div>


      </div>
     <h2 className='font-bold text-xl' style={{marginBottom:'20px'}}>Featured Restaurants</h2>
     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {restaurants.map((restaurant, index) => (
        <div
          className='bg-card text-card-foreground transition-all rounded-xl shadow-sm hover:shadow-m hover:scale-105 duration-300 cursor-pointer'
          key={index}
        >
         <div
           className='h-48 w-full bg-center bg-cover'
           style={{
             backgroundImage: `url(${restaurant.coverUrl})`,
             borderTopLeftRadius: '12px',
             borderTopRightRadius: '12px'
           }}
         />
         <div className='p-3'>
         <div className='flex items-center justify-between'>
           <h3 className='font-bold text'>{restaurant.name}</h3>
           <div className='flex items-center bg-gray-200 border-radius-3 px-2 py-1 rounded-full'>
             <FaStar   style={{marginRight:'2px'}}/>
             <span className='mr-3'> {restaurant.rate}</span>
           </div> 
         </div>
         <p className='py-2 text-gray-600'>
           {restaurant.items.map(item => (
             item
           )).join(', ')}
         </p> 
         </div>
        </div>
      ))
      }
     </div>
     <div  style={{margin:'80px 0px'}}>
       <h2 className='text-2xl sm:text-3xl font-bold text-center mb-3'>How it works</h2>
       <p className='text-center text-gray-600 sm:text-base'>Getting your favorite food delivered is easier than ever</p>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" style={{margin:'30px 0'}}>
         <div className="text-center flex flex-col items-center">
           <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-6 h-6 sm:w-8 sm:h-8 text-orange-500"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
           </div>
           <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{marginBottom:'14px'}}>Choose Restaurant</h3>
           <p className="text-gray-600 text-sm sm:text-base">Browse hundreds of restaurants and cuisines</p>
         </div>
         <div className="text-center flex flex-col items-center">
           <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-6 h-6 sm:w-8 sm:h-8 text-orange-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
           </div>
           <h3 className="text-lg sm:text-xl font-semibold mb-5 mt-4" style={{marginBottom:'14px'}}>Place Order</h3>
           <p className="text-gray-600 text-sm sm:text-base">Select your favorite dishes and place your order</p>
         </div>
         <div className="text-center flex flex-col items-center">
           <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck w-6 h-6 sm:w-8 sm:h-8 text-orange-500"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
           </div>
           <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{marginBottom:'14px'}}>Fast Delivery</h3>
           <p className="text-gray-600 text-sm sm:text-base">Get your food delivered hot and fresh to your door</p>
         </div>
       </div>
     </div>
    </div>
    <div className='bg-white' style={{padding:'80px 0px'}}>
        <h2 className='text-2xl sm:text-3xl font-bold text-center'>What Our Customers Say</h2>
        <p className='text-center text-gray-600 sm:text-base'>Don't just take our word for it</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8" style={{margin:'40px auto'}}>
          {[1, 2, 3].map((_, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-6 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={`https://randomuser.me/api/portraits/men/${idx + 10}.jpg`}
                  alt="Customer"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-800 mb-1">
                    {["John Doe", "Alex Smith", "Michael Lee"][idx]}
                  </span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                {[
                  "Amazing service! The food arrived hot and on time. Highly recommend this app.",
                  "Great selection of restaurants and super fast delivery. Will order again!",
                  "Easy to use and the delivery was quicker than expected. Loved the experience!"
                ][idx]}
              </p>
            </div>
          ))}
        </div>
     </div>
    </>
  )
}

export default Home
