
import React, { useEffect, useState } from 'react'
import data from "./fakedb.json";

const DashBoard = () => {


    // const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const [orderList, setOrderList] = useState([]);

 
    
    useEffect(() => {
        // Fetch cart data from local storage
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
        // Match product IDs in the cart with the database
        const orderedProducts = data.filter((product) => cart.includes(product.id));
    
        // Update the state with ordered products
        setOrderList(orderedProducts);
      }, []);

      console.log(orderList)


    //   useEffect(()=>{
    //     const cart = JSON.parse(localStorage.getItem("cart")) || [];
    //     setOrderList(cart)
        
    //   },[orderList])


    const handleremove = (id) => {
        // Get the current cart from local storage
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
      
        // Filter out the product ID to remove it from the cart
        const updatedCart = cart.filter((productId) => productId !== id);
      
        // Update the cart in local storage
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      
        // Filter the products again based on the updated cart
        const updatedOrderList = data.filter((product) => updatedCart.includes(product.id));
      
        // Update the state with the new order list
        setOrderList(updatedOrderList);
      };
      

  return (
    <div>
        <p>This is Dashboard</p>

        <p>Order list</p>
        {
            orderList.map(res=>

               
                        <div key={res.id} className="card lg:card-side bg-base-100 h-[200px]  shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{res.name}</h2>
    <p>{res.description}</p>
    <p>$ {res.price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-warning" onClick={()=>handleremove(res.id)}>remove</button>
      <button className="btn btn-primary">Click to Confirm</button>
    </div>
  </div>
</div>



          
            )
        }







    </div>
  )
}

export default DashBoard