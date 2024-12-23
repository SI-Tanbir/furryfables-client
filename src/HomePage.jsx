import React from 'react'

import img1 from './assets/1.png'
import img2 from './assets/2.png'
import img3 from './assets/3.png'
import img4 from './assets/4.webp'
import img5 from './assets/5.webp'
import img6 from './assets/6.webp'

const HomePage = () => {
  return (
    <div>

{/* adding carousel */}


<div className="carousel w-full h-[700px] ">
 
 
  <div id="slide1" className="carousel-item relative w-full ">
    <img
      src={img1}
      className="w-full  object-fill " />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={img2}
      className="w-full object-fill" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={img3}
      className="w-full object-fill" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={img4}
      className="w-full object-fill" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>



{/* starting of gallery section */}
<h3 className='text-center text-4xl font-extrabold bg-[#FBB4A5] rounded mb-2 p-2'>Our Popular Products</h3>
<div className='flex gap-4 '>


<div className='relative'>
<img src={img3} className=' rounded-lg h-full w-[1000px]'  alt="" />
    <button className='btn absolute bg-[#FB9EC6] border-none top-[70%] left-5  text-4xl '>Shop Now</button>

    </div>    
    


<div>
<img src={img4} className='rounded-xl'  alt="" />
    {/* <img src={img2} className='w-[50%] h-[50%]' alt="" /> */}
    
</div>


</div>
<button   
 className='text-4xl font-pacifico p-4 rounded my-8 mb-0 bg-customRed '>Adorable,  Soft,    and    Full    of Love</button>
    <img src={img6} className='w-full rounded-xl' alt="" />


    </div>
  )
}

export default HomePage