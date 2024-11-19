import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#23085a]   '>
          
          <footer >
 <div className=" footer text-neutral-content p-10">
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


  <nav >
 <h3 className='text-2xl text-gray-500 font-bold'> Contact With Us</h3>
 <div className='flex gap-5 text-xl'>
 
 <img src="https://i.ibb.co.com/QbDx2BH/icons8-youtube-48.png"
  alt="" />
  <img src="https://i.ibb.co.com/PZgyBM7/icons8-instagram-48.png" alt="" />
  <img src="https://i.ibb.co.com/0fG8g9z/icons8-fb-48.png" alt="" />
 </div>
 <h3 className='text-gray-500 text-3xl font-bold'>Find Us</h3>
<div className='flex gap-10 mt-5'>
<img className='w-10 h-10' src="https://i.ibb.co.com/5MbHtPN/playstore.png" alt="" />
<img className=' ' src="https://i.ibb.co.com/8DK7Z5b/Apple-play-store.png" alt="" />
</div>
   
   
  </nav>

  </div>
<div className='text-white text-center '>
<hr />
<p> © bingoLingo.com,Copyright 2050 -All rights reserved.</p>
</div>
</footer>

        </div>
    );
};

export default Footer;