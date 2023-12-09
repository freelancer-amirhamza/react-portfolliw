import React from 'react';
import Logo from '../assets/logo.svg'

const Header = () => {
  return(
  <header className="py-8">
       <div className="container mx-auto">
    <div className='flex justify-between items-center'>
      {/* Images */}
      <a 
      className='text-gradient lg:text-6xl text-5xl gap-x-3 flex flex-col lg:flex-row leading-none uppercase'
      href="#">
        <span>Amir</span>
        <span> hamza</span>
       {/* Amir Hamza */}
      </a>
      {/* Button  */}
      <button className="btn btn-sm">Work With Me</button>
    </div>
   </div>
  </header>
  );
};

export default Header;
