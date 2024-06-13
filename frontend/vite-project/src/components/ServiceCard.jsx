import React from 'react';
import Button from './Button';

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white border border-gray-300 p-6 shadow-lg rounded-2xl w-full max-w h-[600px] m-2">
      <h2 className=" flex w-[100px] text-[16px] justify-center p-2 font-bold mb-2 bg-gray-200 rounded-full text-center">{service.name}</h2>
      <p className="text-gray-700 mb-4">{service.tagline}</p>
      <p className="text-[90px] font-bold mb-4">${service.cost}<span className='text-[20px] text-gray-400'>/mo</span></p>
      <p>{service.payment}</p>
      <Button></Button>
        <div className='mb-4'>{service.card}</div>
        <div>What's Included:</div>
      <ul className="text-gray-700 mb-4">
        {service.features.map((feature, index) => (
          <li key={index} className="mb-1">✔️{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
