import React, { useEffect, useState } from 'react'
import { ServiceList } from './ServiceList';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ServicesCard from './ServicesCard';
import SlidePrev from './SlidePrev';
import SlideNext from './SlideNext';

const Services = () => {
  const [slidesInview, setSlidesInView] = useState(3);

  const handleResize = () => {
    if(window.innerWidth < 640){
      setSlidesInView(1)
    } else if(window.innerWidth >= 640 && window.innerWidth < 768){
      setSlidesInView(2)
    } else {
      setSlidesInView(3)
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className='w-full flex flex-col items-center'>
      <h4 className='text-4xl text-secondary'>Our Services</h4>
      <p>All our services are available for you right now!</p>

      <Swiper
        spaceBetween={10}
        slidesPerView={slidesInview}
        className="flex flex-wrap gap-7 w-full justify-center p-4 relative"
      >
        <SlidePrev />
        <SlideNext />
        
        {ServiceList.map((service, index) => (
          <SwiperSlide className='p-0 m-0 flex justify-center'>
            <ServicesCard key={index} service={service} />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}

export default Services;
