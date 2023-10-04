import React from 'react'
import { Link } from 'react-router-dom';

const HeroContent = () => {
  return (
    <div className='bg-accent w-5/6 hero-content flex flex-col gap-7  max-w-2xl py-14 px-7 text-center'>
      <h1 className='text-secondary text-5xl'>Amazing laundry services</h1>
      <p>
        We provide amazing laundry services that make it easy for you to look and feel your best. Our extensive range of washers, dryers, and other services ensure that all your clothes are cleaned with the utmost care. Plus, our fast turnaround times mean you won't have to wait long to get them back!
      </p>
      <div className='flex gap-2 uppercase'>
        <a href='#' className='bg-secondary text-primary px-3 py-1'>Learn More</a>
        <a href='#' className='border border-secondary text-secondary px-3 py-1'>Book Now</a>
      </div>
    </div>
  )
}

export default HeroContent;
