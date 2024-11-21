import React from 'react';
import moment from 'moment';
import 'animate.css';
const Progress = () => {
    return ( 

    <div>
        <div className='lg:flex md:flex bg-[#23085a] items-center justify-center lg:gap-20 md:gap-5 '>
            <h3 className='animate__animated animate__backInUp text-white mt-10 mb-10 text-5xl ml-10 font-extrabold cursor-pointer'>The best way to <br /> <span className='text-pink-500'>learn a language</span></h3>
            <div className="stats stats-vertical shadow lg:w-96 md:w-full w-80  mb-20 md:ml-5 text-center lg:mt-10">
  <div className="stat ">
    <div className="stat-title">Our User</div>
    <div className="stat-value">31M</div>
    <div className="stat-desc">
    <p className='text-center'>Jan 1st 21 to</p>
         <p className='text-center'>{moment().format("MMM Do YY")}</p>
         </div>
  </div>

  <div className="stat">
    <div className="stat-title">Total Vocabulary </div>
    <div className="stat-value">50,200M</div>
    <div className="stat-desc">Read (92%)</div>
  </div>

  <div className="stat">
    <div className="stat-title">Lesson</div>
    <div className="stat-value">700</div>
    <div className="stat-desc">↘︎ Finish (75%)</div>
  </div>
  <div className="stat">
    <div className="stat-title">Our Tutorial</div>
    <div className="stat-value">1,900</div>
    <div className="stat-desc">↘︎ Total view (85%)</div>
  </div>
</div>




<div className="carousel carousel-vertical rounded-box h-96 ">
  <div className="carousel-item h-full">
    <img className='w-full' src="https://i.ibb.co.com/4YW00wV/istockphoto-857445232-1024x1024.jpg" />
  </div>
  <div className="carousel-item h-full">
    <img  className='w-full' src="https://i.ibb.co.com/f0z4t2n/istockphoto-1098199924-1024x1024.jpg" />
  </div>
  <div className="carousel-item h-full">
    <img  className='w-full' src="https://i.ibb.co.com/yWBzbMJ/istockphoto-1310412144-1024x1024.jpg" />
  </div>
  <div className="carousel-item h-full">
    <img  className='w-full' src="https://i.ibb.co.com/4NZ8gw8/Getty-Images-1365527944.jpg" />
  </div>
  <div className="carousel-item h-full">
    <img  className='w-full' src="https://i.ibb.co.com/LvCp8pK/High-Dosage-Tutoring-4.webp" />
  </div>
  <div className="carousel-item h-full">
    <img  className='w-full' src="https://i.ibb.co.com/RCff9pf/premium-photo-1661440102417-fe9ea01d0518.jpg" />
  </div>
  <div className="carousel-item h-full">
    <img  className='w-full' src="https://i.ibb.co.com/xhHt2tX/classroom-success.jpg" />
  </div>
</div>





        </div>
        </div>
    );
};

export default Progress;