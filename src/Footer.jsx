
import React from 'react'
import logo from './assets/logo1.png'
const Footer = () => {
  return (
    <div>



<footer  className="relative footer rounded  text-base-content p-10 font-pacifico bg-[#FCFFC1]">
  <aside>
 <img  src={logo} className='w-[300px] absolute top-0 left-0' alt="" />
    <p className='text-2xl'>
        
      FurryFables Products  Ltd.
      <br />
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>


    </div>
  )
}

export default Footer