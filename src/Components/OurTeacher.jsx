import React from 'react';

const OurTeacher = () => {
    return (
        <div className='container mx-auto mt-10'>
            <div>
                <h3 className='mb-10 text-5xl  font-bold  text-[#23085a] text-center'>Meet Our Expert  <span className='text-purple-600'>Teachers</span></h3>
            </div>
            <div className='grid lg:grid-cols-3 gap-10 animate__animated animate__backInRight'>
            <div className="card bg-base-100 w-96 h-full shadow-xl relative">
  <figure >
    <img
      src="https://i.ibb.co.com/kS03x13/istockphoto-660142690-1024x1024.jpg"
      alt="Shoes" />
      <div className='flex'>
       <div>
      
       </div>
     <div>
   
     <img className='absolute  inset-2 mt-48  rounded-full w-10 h-10' src="https://i.ibb.co.com/pbdzpcN/Flag-of-Germany-svg.png" alt="" />
     </div>
     <div className=''>
     <p className='absolute text-pink-500 font-bold inset-2 mt-48 ml-12 '>Mr.Pawlo Hathon </p>
      <p className='absolute text-pink-500 font-bold inset-2 mt-52 ml-12' >Teaches : German</p>
      <p className='absolute text-pink-500 font-bold inset-2 mt-56 ml-12'>Speak:German & English </p>
     </div>
     </div>
     
  </figure>
  
</div>
<div className="card bg-base-100 w-96  shadow-xl">
  <figure>
    <img className=''
      src="https://i.ibb.co.com/C7kNgM1/istockphoto-666073510-1024x1024.jpg"
      alt="Shoes" />
  </figure>
  <div>
   
   <img className='absolute  inset-2 mt-48  rounded-full w-10 h-10' src="https://i.ibb.co.com/bbYHB7L/istockphoto-1404506290-612x612.jpg" alt="" />
   </div>
   <div className=''>
   <p className='absolute text-pink-500 font-bold inset-2 mt-48 ml-12 '>Abraham </p>
    <p className='absolute text-pink-500 font-bold inset-2 mt-52 ml-12' >Teaches : French</p>
    <p className='absolute text-pink-500 font-bold inset-2 mt-56 ml-12'>Speak:French & English </p>
   </div>
  
</div>
<div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://i.ibb.co.com/0s9nZ9M/istockphoto-2046629751-1024x1024.jpg"
      alt="Shoes" />
  </figure>
  <div>
   
   <img className='absolute  inset-2 mt-48  rounded-full w-10 h-10' src="https://i.ibb.co.com/mJQyzsR/japaneseflag-63748.jpg" alt="" />
   </div>
   <div className=''>
   <p className='absolute text-pink-500 font-bold inset-2 mt-48 ml-12 '>Huang Khaowa </p>
    <p className='absolute text-pink-500 font-bold inset-2 mt-52 ml-12' >Teaches : Japanese</p>
    <p className='absolute text-pink-500 font-bold inset-2 mt-56 ml-12'>Speak:Japanese & English </p>
   </div>

  
  </div>
</div>


            </div>

   
    );
};

export default OurTeacher;