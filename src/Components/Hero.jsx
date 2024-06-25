import React from 'react';
import Thumbnail from '../img/thumbnail.jpg'
const Hero = () => {
  return (
    <>
    <div className="w-full h-[90vh] items-center">

        <img src={Thumbnail} alt="" 
        className="w-full h-full 
        object-cover" />
        
        <div className="max-w-[1140px] m-auto content-center" >
            <div className='absolute top-[40%]
            w-full md:-[50%] max-w-[500px] h-full
            flex flex-col text-white p-4'>
            <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
            <h2 className='text-4xl py-4 italic'>With Weekway</h2>
            <p>
                Lorem ipsum dolor, sit amet 
                consectetur adipisicing elit. 
                Ea, voluptates voluptate? Corrupti, 
                illum, aliquid obcaecati esse quae 
                sed nulla voluptas veniam aperiam 
                consectetur repellendus illo odit! 
                Consequuntur ipsam sint dolorum.
            </p>
            </div>
           
        </div>
    
    
    </div>
    </>
  );
}

export default Hero;
