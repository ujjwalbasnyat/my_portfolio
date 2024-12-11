import React from 'react'
import { IconType } from 'react-icons';

interface ButtonProps {
  person: { value: string };
  size: number;
  Icon: IconType;
}

function Button({person, Icon, size }:ButtonProps) {
  return (
    <button className='bg-btn-bg text-btn-text px-6 py-3 rounded-full flex items-center gap-3 hover:bg-btn-hover'>
      <div className='text-sm sm:text-base md:text-lg'>{person.value}</div>
      <Icon size={size} />
    </button>
  );
}

export default Button