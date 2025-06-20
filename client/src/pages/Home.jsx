import React from 'react'
import restaurantCover1 from '../assets/images/restaurant-cover-1.avif';
import restaurantCover2 from '../assets/images/restaurantcover2.avif';
import restaurantCover3 from '../assets/images/restaurantcover3.avif';
import { useState } from 'react';
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

  const nextSlide = () => setCurrent((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

  return (
    <div className='container'>
      <div className='flex w-full h-[200px]' style={{margin:'22px 0px'}}>
        <div className='flex-1 bg-card shadow-sm bg-gradient-to-r from-green-500 to-green-700 overflow-hidden border-0 p-8' style={{borderTopLeftRadius:'12px', borderBottomLeftRadius:'12px'}}>
          <h3 className='text-white text-2xl font-bold' style={{marginBottom:'12px'}}>
            {carouselImages[current].title}
          </h3>
          <p className='text-white'>{carouselImages[current].description}</p>
          <button className='bg-white text-black h-10 hover:bg-gray-100 rounded-full px-6 py-2 text-sm transition-colors font-medium cursor-pointer' style={{margin:'12px 0px'}}>
            {carouselImages[current].button}
          </button>
          <div className="flex gap-2 mt-4">
            <button onClick={prevSlide} className="bg-white/30 text-white rounded-full px-3 py-1 text-xs hover:bg-white/50 transition-colors">&lt;</button>
            <button onClick={nextSlide} className="bg-white/30 text-white rounded-full px-3 py-1 text-xs hover:bg-white/50 transition-colors">&gt;</button>
          </div>
        </div>
        <div className='flex-1 bg-gray-500' style={{borderTopRightRadius:'12px', borderBottomRightRadius:'12px', overflow: 'hidden'}}>
          <img 
            src={carouselImages[current].src} 
            className='h-full object-cover' 
            style={{width: '100%', borderTopRightRadius: '12px', borderBottomRightRadius: '12px'}} 
            alt='' 
          />
        </div>
      </div>
    </div>
  )
}

export default Home
