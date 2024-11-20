import React, { useState } from "react";

const AboutLearning = () => {

  const [activeSlide, setActiveSlide] = useState("item1");

  // Function to handle slide change
  const handleSlideChange = (slideId) => {
    setActiveSlide(slideId);
    document.getElementById(slideId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container mx-auto px-4">
  
      <div className="text-center mt-10 mb-10">
        <h3 className="text-xl md:text-3xl lg:text-4xl text-purple-700 font-bold">
          How We Work for You?<br />& Our Mission
        </h3>
        <p className="text-sm md:text-base mt-2">
          About what happens in a class, how to get started, and how we will help you speak with confidence.
        </p>
      </div>

      {/* Carousel Section */}
      <div>
        <div className="carousel w-full">
          {/* Slide 1 */}
          <div id="item1" className="carousel-item w-full flex flex-col md:flex-row items-center md:items-start">
            <div className="bg-[#23085a] card card-side shadow-xl flex flex-col md:flex-row w-full">
              <div className="p-6 md:p-10 text-white flex-1">
                <h2 className="card-title text-lg md:text-2xl lg:text-4xl">
                  Interactive, Immersive Classes
                </h2>
                <p className="mt-4 text-sm md:text-base">
                  Our teachers will immerse you in the target language from the start,
                  so you’ll get used to hearing and speaking it quickly.
                </p>
              </div>
              <img
                className="w-full md:w-1/2 object-cover rounded-md"
                src="https://i.ibb.co/9YYfGC6/depositphotos-95728870-stock-photo-teens-talking-in-cafe.webp"
                alt="Interactive Classes"
              />
            </div>
          </div>

          {/* Slide 2 */}
          <div id="item2" className="carousel-item w-full flex flex-col md:flex-row items-center md:items-start">
            <div className="bg-[#23085a] card card-side shadow-xl flex flex-col md:flex-row w-full">
              <div className="p-6 md:p-10 text-white flex-1">
                <h2 className="card-title text-lg md:text-2xl lg:text-4xl">
                  World-Class Curriculum
                </h2>
                <p className="mt-4 text-sm md:text-base">
                  Our structured curriculum is designed to help you speak about interesting topics you can use in everyday life.
                </p>
              </div>
              <img
                className="w-full md:w-1/2 object-cover rounded-md"
                src="https://i.ibb.co/Jtg2QPs/istockphoto-1220226086-1024x1024.jpg"
                alt="World-Class Curriculum"
              />
            </div>
          </div>

          {/* Slide 3 */}
          <div id="item3" className="carousel-item w-full flex flex-col md:flex-row items-center md:items-start">
            <div className="bg-[#23085a] card card-side shadow-xl flex flex-col md:flex-row w-full">
              <div className="p-6 md:p-10 text-white flex-1">
                <h2 className="card-title text-lg md:text-2xl lg:text-4xl">
                  Keep Learning After Class
                </h2>
                <p className="mt-4 text-sm md:text-base">
                  Stay on target with our smart self-learning tools like flashcards, quizzes, and bite-sized exercises.
                </p>
              </div>
              <img
                className="w-full md:w-1/2 object-cover rounded-md"
                src="https://i.ibb.co/X3xSTgR/istockphoto-524175878-612x612.jpg"
                alt="Keep Learning"
              />
            </div>
          </div>

          {/* Slide 4 */}
          <div id="item4" className="carousel-item w-full flex flex-col md:flex-row items-center md:items-start">
            <div className="bg-[#23085a] card card-side shadow-xl flex flex-col md:flex-row w-full">
              <div className="p-6 md:p-10 text-white flex-1">
                <h2 className="card-title text-lg md:text-2xl lg:text-4xl">
                  Discuss with Friends and Teachers
                </h2>
                <p className="mt-4 text-sm md:text-base">
                  Our teachers will immerse you in the target language from the start,
                  so you’ll get used to hearing and speaking it quickly.
                </p>
              </div>
              <img
                className="w-full md:w-1/2 object-cover rounded-md"
                src="https://i.ibb.co/SX06SFr/istockphoto-863497498-1024x1024.jpg"
                alt="Discuss with Teachers"
              />
            </div>
          </div>
        </div>

        {/* Pagination Buttons */}
<div className="flex justify-center gap-2 py-4">
 <button className={`btn btn-xs ${activeSlide === "item1" ? "bg-purple-700 text-white" : "bg-[#23085a] text-white"}`}onClick={() => handleSlideChange("item1")}> 1</button>
 <button className={`btn btn-xs ${activeSlide === "item2" ? "bg-purple-700 text-white" : "bg-[#23085a] text-white"}`}onClick={() => handleSlideChange("item2")}
          >
            2
          </button>
          <button
            className={`btn btn-xs ${
              activeSlide === "item3" ? "bg-purple-700 text-white" : "bg-[#23085a] text-white"
            }`}
            onClick={() => handleSlideChange("item3")}
          >
            3
          </button>
          <button
            className={`btn btn-xs ${
              activeSlide === "item4" ? "bg-purple-700 text-white" : "bg-[#23085a] text-white"
            }`}
            onClick={() => handleSlideChange("item4")}
          >
            4
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutLearning;
