import React, { useState } from 'react'
import Group16 from "../assets/Group 16.png"
import Banner from './Banner'
import close from '../assets/shape.png';
import Menu from "../assets/hamburger menu.png"


const Navbar = () => {

  const [open,setOpen] = useState(false);
  const[opendrop,setOpendrop]= useState(true);

  const handleOpen= ()=>{
    setOpen(!open);
  }
  return (
    <section className={open?"text-white bg-black md:px-16 px-4 py-4 ":"text-white bg-[#121211] md:px-16 px-4 py-4 "}>
        <div className='flex flex-col gap-1'>
            <div className='flex justify-between items-baseline'>
                <h1 className='text-4xl font-[300]'>ShopKart</h1>
                <ul className=' hidden md:flex uppercase text-md flex gap-4 -mb-5 font-bold'>
                    <li><h1>WishList (0)</h1></li>
                    <li>Bag (0)</li>
                </ul>
                
                <div onClick={handleOpen} className='md:hidden  '>
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
            
            <div className={open? "bg-black  " :"hidden"}>
              <ul className=' b bg-black uppercase font-bold text-white text-2xl flex flex-col  p-16 text-center gap-16'>
                <li className='bg-black  text-white px-8 py-4 '>Home</li> 
                <li className='bg-black  text-white px-8 py-4'>About</li>  
                <li className='bg-black  text-white px-8 py-4' >Our Products</li>
                <li className='bg-black  text-white px-8 py-4'>Contact us</li>
                </ul>
            
        </div>
        {open ? '' :<Banner/>}
    </section>
  )
}

export default Navbar
