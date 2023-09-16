import React from 'react'
import images from '../assets/2022.svg'
import bannerimg from "../assets/bannerimg.svg"
import star from '../assets/Star.svg'
import line from '../assets/line.svg'
import linestar from '../assets/Star 4.png'
const Banner = () => {
  return (
    <div className='text-white   md:h-[555px]   overflow-hidden md:px-16 px-4 py-20  h-screen'>
        <div className='flex flex-col  md:gap-5 gap-0 z-20 md:-my-10  mt-[250px]' >
          <h1 className='typos-md text-[45px] md:text-[90px] z-10 ' >Fresh</h1>
          <img className='h-[30%] w-[50%] z-10 md:ml-[200px] ml-[150px]' src={images} alt='2022'/>
          <h1 className=' mx-20  typos-md text-[45px] md:text-[90px] z-10'>Look</h1>
        </div>
          <img  className=' absolute top-[129px] -right-[10px] md:right-20  w-[367px] h-[371px]'src ={star} alt='/'/>
          <img  className=' absolute top-[133px] right-[10] md:w-[432px] w-[321px] h-[599px] md:h-[655px] md:right-20 'src ={bannerimg} alt='/'/>
          <div className=' absolute z-0 top-[345px] right-0 text-left opacity-80 w-[1150px] h-[345px] bg-[#F07E15] flex flex-col text-[14px] font-[400] text-black p-5 justify-end  items-end ' >
            <h1>OREGON JACKET</h1>
            <h2>$124</h2>
          </div>
          <div>
            <img className='absolute bottom-20 left-0 w-[1150px]' src ={line} alt='line'/>
            <img className=' absolute bottom-9 left-[1125px]'src ={linestar} alt='start'/>
            <button  className='mx-16 absolute -bottom-4   px-1 border border-white left-10'> See More</button>
          </div>

    </div>
  )
}

export default Banner
