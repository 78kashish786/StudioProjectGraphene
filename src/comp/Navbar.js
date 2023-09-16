import React, { useState } from 'react'
import Group16 from "../assets/Group 16.png"
import Banner from './Banner'
import close from '../assets/shape.png';
import Menu from "../assets/hamburger menu.png"


const Navbar = () => {

  const [open,setOpen] = useState(false);
  const[opendrop,setOpendrop]= useState(true);

  return (
    <section className='text-white bg-[#121211] md:px-16 px-4 py-4 '>
        <div className='flex flex-col gap-1'>
            <div className='flex justify-between items-baseline'>
                <h1 className='text-4xl font-[300]'>ShopKart</h1>
                <ul className=' hidden md:flex uppercase text-md flex gap-4 -mb-5 font-bold'>
                    <li><h1>WishList (0)</h1></li>
                    <li>Bag (0)</li>
                </ul>
                
                <div onClick={()=>setOpen(!open)} className='md:hidden'>
                  {
                    open ? (
                      <img className='p-1 border-2 border-white' src ={close} alt='close '/>
                    ):(
                      <img  src ={Menu} alt="open"/>
                    )
                  }
                  
                </div>
            </div>
            

            </div>
            {/* vector */}
            <img className='w-full' src ={Group16} alt="/"/>
  <div className='  px-16'>
                    <ul className='hidden md:flex gap-20 font-bold text-[18px]'>
                      <li>Home</li>
                      <li>About</li>
                      <li onClick={()=>setOpendrop(!opendrop)} className='font-[400] border-2'>
                        <div>
                          <h1 className='underline'>Our Products</h1>
                          <ul className='text-sm font-[300]'>
                            <li>Products1</li>
                            <li>Products1</li>
                            <li>Products1</li>
                            <li>Products1</li>
                          </ul>
                        </div>
                      </li>
                      <li>Contact</li>
                    </ul>
                  </div>
            {/* Menu */}
            <div className='md:px-16  hidden'>
            <div className={open ? " " :"hidden"}>
              <ul className='uppercase font-bold text-2xl flex flex-col h-screen p-16 text-center gap-16'>
                <li>Home</li> 
                <li>About</li>  
                <li >Our Products</li>
                <li>Contact us</li>
                </ul>
            </div>
        </div>
        <Banner/>
    </section>
  )
}

export default Navbar
