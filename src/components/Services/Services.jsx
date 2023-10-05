import React from 'react'
import { ServiceList } from './ServiceList';

const Services = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <h4 className='text-4xl text-secondary'>Our Services</h4>
      <p>All our services are available for you right now!</p>

      <div className="flex flex-wrap gap-4 w-full justify-center p-7">
        {ServiceList.map((service, index) => (
          <div key={index} className="p-4 w-64 text-center items-center min-h-max my-5 bg-accent">
            <div className='w-full h-2/3'>
              <img src={service.image} alt={service.title} className='w-full' />
            </div>
            <h5 className="text-xl font-semibold pb-10">{service.title}</h5>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Services;
