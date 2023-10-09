import React from 'react';
import { BiSkipPreviousCircle } from 'react-icons/bi';
import { useSwiper } from 'swiper/react';

const SlidePrev = () => {
  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slidePrev()}>
      <BiSkipPreviousCircle className='text-3xl active:scale-110 active:text-accent' />
    </button>
  )
}

export default SlidePrev;
