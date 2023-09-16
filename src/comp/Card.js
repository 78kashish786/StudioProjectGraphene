import React from 'react'
import Vector4 from '../assets/Vector (4).png'
import cardIMG from "../assets/cardimg.png";
const Card = () => {
  return (
    <div>
        <div className=' md:m-5  m-3  md:w-[310px] w-full  '>
            <div className='relative md:w-[310px] h-[322px] '>
              <img src ={cardIMG} alt='/'/>
        
                <img className='absolute  bg-black p-3 bottom-0 right-0' src ={Vector4} alt='ifon'/>             
            </div>
            <div className='py-1  w-[310px]'>  
                <h1 className='text-[26px] syne font-600 uppercase'>FLORIDA JACKET </h1>
                <p className='font-500 text-gray-400 text-md text-[14px] '> Suffered alteration in some form, bysuffalterattion in some forme, byinjected humor, or randomised</p>
                <h5 className='text-3xl syne'>$100</h5>
            </div>
        </div>
      
    </div>
  )
}

export default Card
