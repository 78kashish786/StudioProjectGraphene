import React from 'react'

const GetInTouch = () => {
  return (
    <section className='md:px-20  px-4 py-20 imagesbg '>
        <div className='md:flex gap-20 mx-10 mb-4 text-white opacity-50 mx-4 mb-5'>
        <div className='md:gap-3 gap-5 text-center md:text-left'>
            <h1 className='md:text-3xl text-xl'>Newslletter</h1>
            <h2 className='md:text-xl text-md'>Get news about articles and updates <br/> in your inbox</h2>
        </div>
        <div className='flex flex-col gap-4 md:mx-5 mt-10 md:mt-0'>
            <input placeholder='NAME' className=' md:ml-10 px-4 py-1 md:w-[558px] w-full bg-transparent text-md font-[400] mb-3 border-b-2'/>
            <input placeholder='EMAIL' className=' md:ml-10 px-4 py-1 md:w-[558px] w-full bg-transparent text-md font-[400] mb-3 border-b-2'/>
            <input placeholder='MESSAGE' className=' md:ml-10 px-4 py-1 md:w-[558px] w-full bg-transparent text-md font-[400] mb-3 border-b-2'/>
        </div>

        </div>

        <div className='relative  mx-auto flex md:justify-between justify-center  items-center md:items-start  '>
            <span className='relative md:text-[135px] leading-[37px] md:leading-[147px] get text-[45px]   font-bold  text-white '>GET<br/>
            IN TOUCH</span>
            <button className='md:position  md:right-[100px] right-10 md:bottom-14 absolute  hover:bg-[#f07e15] hover:text-white h-[100px] w-[100px] md:h-[181px] md:w-[181px] border border-2 rounded-full md:text-3xl text-[#F07E15] border-[#F07E15]'>SEND</button>
        </div>
    </section>
  )
}

export default GetInTouch
