import React from 'react';
import { Tilt } from 'react-tilt';
import PropTypes from 'prop-types';

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

const ServicesCard = ({ service }) => {
  const { image, title, description } = service;

  return (
    <Tilt options={defaultOptions}  className=" w-64 text-center items-center rounded-lg overflow-hidden my-5 ">
      <div className='w-full '>
        <img src={image} alt={title} className='w-full h-40' />
      </div>
      <div className='bg-neutral h-40 flex flex-col justify-around'>
        <h5 className="text-xl text-secondary font-semibold ">{title}</h5>
        <p>{description}</p>
      </div>
    </Tilt>
  )
}

ServicesCard.propTypes = {
  service: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ServicesCard;
