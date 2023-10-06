import React from 'react'
import { ServiceList } from './ServiceList';

const Services = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <h4 className='text-4xl text-secondary'>Our Services</h4>
      <p>All our services are available for you right now!</p>

      <div className="flex flex-wrap gap-4 w-full justify-center p-7">
        {ServiceList.map((service, index) => (
          <div key={index} className="p-4 w-64 text-center items-center h-fit my-5">
            <div className='w-full h-2/3'>
              <img src={service.image} alt={service.title} className='w-full h-40 rounded-lg' />
            </div>
            <h5 className="text-xl text-secondary font-semibold py-5">{service.title}</h5>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Services;
