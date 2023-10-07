import React from 'react'
import { ServiceList } from './ServiceList';
import { Tilt } from 'react-tilt';

const defaultOptions = {
	reverse:        true,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
};

const Services = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <h4 className='text-4xl text-secondary'>Our Services</h4>
      <p>All our services are available for you right now!</p>

      <div className="flex flex-wrap gap-7 w-full justify-center p-4">
        {ServiceList.map((service, index) => (
          <Tilt options={defaultOptions} key={index} className=" w-64 text-center items-center rounded-lg overflow-hidden my-5 ">
            <div className='w-full '>
              <img src={service.image} alt={service.title} className='w-full h-40' />
            </div>
            <div className='bg-neutral h-40 flex flex-col justify-around'>
              <h5 className="text-xl text-secondary font-semibold ">{service.title}</h5>
              <p>{service.description}</p>
            </div>
          </Tilt>
        ))}
      </div>

    </div>
  )
}

export default Services;
