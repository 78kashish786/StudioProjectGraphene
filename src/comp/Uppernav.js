import React from 'react'
import vector1 from '../assets/Vector (1).png'
import vector2 from '../assets/Vector (2).png'
import vector3 from '../assets/Vector (3).png'
import vector4 from '../assets/Group 6.png'
import Vector from '../assets/Vector.png'


const Uppernav = () => {
  return (
    <section className='md:px-16 px-4 py-2 text-[#626262] bg-[#1a1a1a]'>
    <div className='flex text-[10px]  justify-between items-center'>
    <div >
      <ul className='flex md:gap-3 gap-1 items-center '>
        <li className='  flex gap-1 items-center'><img src ={Vector} alt="/"/>Free Delivery</li>
        <li>|</li>
        <li>Return Policy</li>
      </ul>
    </div>
    <div className='flex md:gap-5 gap-3 items-center'>
    <div><h1>Login</h1></div>
    <div>
      <ul className='flex gap-3 items-center '>
        <li className="hidden md:flex" >Follow us</li>
        <li><img src ={vector1} alt='facebok'/></li>
        <li><img src ={vector2} alt='facebok'/></li>
        <li><img src ={vector3} alt='facebok'/></li>
        <li><img src ={vector4} alt='facebok'/></li>
      </ul>
    </div>
      
    </div>

    </div>
    
  </section>
  )
}

export default Uppernav
