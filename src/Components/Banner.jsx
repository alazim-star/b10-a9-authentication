import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
  
       <div className=' '>

<div
  className="absolute hero h-[600px] bg-cover    "
  style={{
    backgroundImage: "url(https://i.ibb.co.com/KqTPwg8/pexels-max-fischer-5212703.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-"></div>
  <div className="hero-content mb-32 mr-96 text-neutral-content text-center">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold">Achieve your language goal together with a dedicated team</h1>
      
      <Link to="/learning"><button className="btn-primary mt-32 btn text-white">Get Started</button></Link>
    </div>
  </div>
</div>










      <div className="carousel w-[500px] ml-[720px] h-64 mt-64 relative">  
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/N2p3cYX/pexels-max-fischer-5212345.jpg"
          className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/mSDQTYm/pexels-yankrukov-8199135.jpg"
          className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/xhHt2tX/classroom-success.jpg"
          className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/zVCTWw0/celebrate-student-success-feat.jpg"
          className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
    

 
</div>


       
    );
};

export default Banner;