import React from "react";

const ChooseLearn = () => {
  return (

<div>
    <h2 className="  mt-10  mb-10 text-[#23085a] text-center text-4xl font-bold">Choose your learning preference</h2>
    <div className="text-[#23085a] container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-10">
       
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="relative">
        <img
          src="https://i.ibb.co.com/RCff9pf/premium-photo-1661440102417-fe9ea01d0518.jpg" // Replace with your image URL
          alt="Learning Challenge"
          className="w-full  object-cover"
        />
        <span className=" absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold py-1 px-2 rounded">
          Save up to 30%
        </span>
      </div>
      <div className="p-4">
        <h2 className="text-purple-600 font-bold text-sm uppercase">Sprint</h2>
        <h3 className=" text-xl font-bold mt-2 mb-4">
        Beat the 2-month learning challenge!
        </h3>
        <ul className="text-gray-700 space-y-2">
          <li className="flex items-center text-[#23085a]">
            <span className="text-purple-600 mr-2">✔</span>
            30 or 60 classes in 2 months
          </li>
          <li className="flex items-center">
            <span className="text-purple-600 mr-2">✔</span>
           <p className="text-[#23085a]"> Continuous learning over 2 months</p>
          </li>
          <li className="flex items-center text-[#23085a]">
            <span className="text-purple-600 mr-2">✔</span>
            Win 50% money or class credits back
          </li>
        </ul>
        <button className="mt-4 w-full btn text-white bg-[#23085a] btn-primary">
          More about Sprint
        </button>
      </div>
    </div>


    <div className=" max-w-sm bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="relative">
        <img
          src="https://i.ibb.co.com/vVPsn4k/360-F-306636176-KQbxtt-Ydx-WHs-H3-S6b-YCD47-Nv-VGd-TL2x-V.jpg" // Replace with your image URL
          alt="Learning Challenge"
          className="w-full  object-cover"
        />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold py-1 px-2 rounded">
          Save up to 40%
        </span>
      </div>
      <div className="p-4">
        <h2 className="text-purple-600 font-bold text-sm uppercase">Flex</h2>
        <h3 className="text-xl font-bold mt-2 mb-4">
        Take your classes whenever you want!
        </h3>
        <ul className=" space-y-2 text-[#23085a]">
          <li className="flex items-center">
            <span className="text-purple-600 mr-2">✔</span>
            Live classes available 24/7 – full flexibility
          </li>
          <li className="flex items-center">
            <span className="text-purple-600 mr-2">✔</span>
            Continuous learning over 2 months
          </li>
          <li className="flex items-center">
            <span className="text-purple-600 mr-2">✔</span>
            Win 50% money or class credits back
          </li>
        </ul>
        <button className="mt-4 w-full btn text-white bg-[#23085a] btn-primary">
          More about Flex
        </button>
      </div>
      </div>


      <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="relative">
        <img
          src="https://i.ibb.co.com/QFpmFk0/african-teen-girl-talking-to-diverse-friends-on-video-group-conference-call-2-DF11-EJ.jpg" // Replace with your image URL
          alt="Learning Challenge"
          className="w-full  h-64 object-cover"
        />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold py-1 px-2 rounded">
          Save up to 30%
        </span>
      </div>
      <div className="p-4">
        <h2 className="text-purple-600 font-bold text-sm uppercase">Teams</h2>
        <h3 className="text-xl font-bold mt-2 mb-4">
        Complete a course together with a dedicated team!
        </h3>
        <ul className="text-[#23085a] space-y-2">
          <li className="flex items-center">
            <span className="text-purple-600 mr-2">✔</span>
            Progress with the same teacher and team
          </li>
          <li className="flex items-center">
            <span className="text-purple-600 mr-2">✔</span>
            Continuous learning over 2 months
          </li>
          <li className="flex items-center">
            <span className="text-purple-600 mr-2">✔</span>
            Win 50% money or class credits back
          </li>
        </ul>
        <button className="mt-4 w-full btn text-white bg-[#23085a] btn-primary">
          More about Teams
        </button>
      </div>
    </div>


    </div>
    </div>


  );
};

export default ChooseLearn
