import React, { useEffect, useState } from "react";

import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import img4 from "./assets/4.webp";
import img5 from "./assets/5.webp";
import img6 from "./assets/6.webp";

import data from "./fakedb.json";

// console.log(data)


const HomePage = () => {

  const [fakedata,setFakeData]=useState([])
  useEffect(()=>{


    setFakeData(data.slice(0,9))


  },[])

  const handleAddcart=(id)=>{

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

     // Check if the product is already in the cart
  if (!cart.includes(id)) {
    cart.push(id); // Add the product ID to the cart
  }



  // Save the updated cart back to local storage
  localStorage.setItem("cart", JSON.stringify(cart));

  console.log(`Product ${id} added to cart`, cart);


    // console.log(id)
    

  }
  
  return (
    <div>
      {/* adding carousel */}

      <div className="carousel w-full h-[700px] ">
        <div id="slide1" className="carousel-item relative w-full ">
          <img src={img1} className="w-full  object-fill " />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full object-fill" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full object-fill" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full object-fill" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      {/* starting of gallery section */}

      <button className="text-4xl font-pacifico p-4 rounded my-8 mb-0 bg-customRed ">
        Adorable, Soft, and Full of Love
      </button>
      <div className="flex gap-4 ">
        <div className="relative">
          <img src={img3} className=" rounded-lg h-full w-[1000px]" alt="" />
          {/* <button className='btn absolute bg-[#FB9EC6] border-none top-[70%] left-5  text-4xl '>Shop Now</button> */}
        </div>

        <div>
          <img src={img4} className="rounded-xl" alt="" />
          {/* <img src={img2} className='w-[50%] h-[50%]' alt="" /> */}
        </div>
      </div>

      {/* <img src={img6} className='w-full rounded-xl' alt="" /> */}




      <button className="text-4xl font-pacifico  rounded my-8 mb-0 bg-customRed btn " >All Favourites Toys</button>
      <div className="grid grid-cols-3 gap-8 m-4">
        

      {fakedata.map((res) => (



<div key={res.id}>
  <div className="card card-compact bg-base-100 w-[400px]  shadow-xl">
    <figure>
      <img className="w-full"
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{res.name}</h2>
      <p>{res.description}</p>
      <div className="card-actions justify-between ">
        <button className="btn bg-customRed">Buy Now</button>
        <button onClick={()=>handleAddcart(res.id)} className="btn bg-customRed ">Add to cart</button>
      </div>
    </div>
  </div>
</div>

))}


      </div>


    </div>
  );
};

export default HomePage;
