import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="">


      {/* Carousel Section */}
      <div className="carousel w-full lg:h-[500px] relative object-cover ">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full ">
          <img
            src="https://i.ibb.co.com/BBYvP4h/pexels-max-fischer-5212345.jpg"
            className="w-full h-full rounded-md"
            alt="Slide 1"
          />
          <div className='absolute  top-48 lg:left-80 text-white'>
            <h1 className='lg:text-5xl text-2xl font-bold text-[#f13081]'>Start <span className='text-7xl text-[#796bf0]'>Learning & </span> Define Your Future </h1>
          </div>
          <div className="absolute left-2 lg:left-5 right-2 lg:right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/mSDQTYm/pexels-yankrukov-8199135.jpg"
            className="w-full object-cover rounded-md"
            alt="Slide 2"
          />
          <div className='absolute top-48 lg:left-96 text-white'>
            <h1 className='lg:text-5xl text-2xl font-bold text-[#f13081]'>Best Education <span className='text-7xl text-[#796bf0]'>Platform</span>For Learning</h1>
          </div>
          <div className="absolute left-2 lg:left-5 right-2 lg:right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/xhHt2tX/classroom-success.jpg"
            className="w-full object-cover rounded-md"
            alt="Slide 3"
          />
          <div className='absolute top-48 lg:left-96 text-white'>
            <h1 className='lg:text-5xl text-2xl font-bold text-[#f13081]'>Explore your <span className='text-7xl text-[#796bf0]'>Learning</span>Your Dream</h1>
          </div>
          <div className="absolute left-2 lg:left-5 right-2 lg:right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/9V57xZ5/istockphoto-1220226086-1024x1024.jpg"
            className="w-full object-cover rounded-md"
            alt="Slide 4"
          />
            <div className='absolute top-48 lg:left-96 text-white'>
            <h1 className='lg:text-5xl text-2xl font-bold text-[#f13081]'>Learn<span className='text-7xl text-[#796bf0]'>At</span>Your Home</h1>
          </div>
          <div className="absolute left-2 lg:left-5 right-2 lg:right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
