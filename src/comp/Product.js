import React from 'react'
import Group17 from '../assets/Group 17.svg'
import Arrow1 from "../assets/Arrow 1.svg"
import Arrow2 from "../assets/Arrow 2.svg"
import Card from './Card'

const Product = () => {
  return (
    <section className='py-10'>
        {/* Section for header of this section */}
        <div className='flex  justify-between md:px-16 px-4 '>
            <div>
                <h1 className='md:pl-4 syne md:text-[90px] text-[40px] md:-mb-6 font-[600]'>New products</h1>
                <img className='w-full pr-4' src ={Group17} alt ='/'/>
            </div>
            <div className='md:flex gap-10 hidden'>
            <img src ={Arrow2} alt ='/'/>
            <img src ={Arrow1} alt ='/'/>
            </div>
        </div>
        {/* Foter section of this section */}
        <div className=' flex flex-col md:flex-row md:pl-16 pl-3 py-4 mx-2 '>
                <ul className='md:space-y-5 flex md:flex-col  gap-3 md:text-xl text-[14px] font-500'>
                    <li className=''>Apparels</li>
                    <li className=' md:text-3xl font-[600]'>Accessories</li>
                    <li className=''>Best Sellers</li>
                    <li className=''>50% off</li>
                </ul>
            
            <div className='flex overflow-hidden'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            
        </div>
        <div className='flex gap-10 md:hidden justify-center'>
            <img src ={Arrow2} alt ='/'/>
            <img src ={Arrow1} alt ='/'/>
            </div>
    </section>
  )
}

export default Product
