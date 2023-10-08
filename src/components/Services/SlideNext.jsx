import React from 'react'
import { BiSkipNextCircle } from 'react-icons/bi'
import { useSwiper } from 'swiper/react';

const SlideNext = () => {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()}>
      <BiSkipNextCircle
        className='text-3xl active:scale-110 active:text-accent' 
      />
    </button>
  );
}

export default SlideNext;
