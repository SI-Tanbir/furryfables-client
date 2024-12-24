
import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div    className="navbar bg-[#FB9EC6] rounded font-pacifico">
    <div   className="flex-1">
      <a   className="btn btn-ghost text-xl">FurryFables</a>
    </div>
    <div>
    <ul   className="flex gap-6">
        <Link  to={'/'}  className="   hover:bg-customBg cursor-pointer p-2 rounded">Home</Link>
        <Link  to={'/myproducts'}  className="   hover:bg-customBg cursor-pointer p-2 rounded">My Products</Link>
        <Link to={'/login'}   className="   hover:bg-customBg cursor-pointer p-2 rounded">Login</Link>
        <Link to={'/signup'}  className="   hover:bg-customBg cursor-pointer p-2 rounded">Signup</Link>
    </ul>
</div>


  </div>
  )
}

export default Header