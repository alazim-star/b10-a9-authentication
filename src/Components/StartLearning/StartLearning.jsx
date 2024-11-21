import { Outlet } from "react-router-dom";
import Categories from "../special/Categories";
import LearningCard from "./LearningCard";
import LessonVideo from "./LessonVideo";
import Card from "../special/Card";
import CardProducts from "../special/CardProducts";
import Header from "../Header";






const StartLearning = () => {
    return (
        <div>
        <div className="bg-[#23085a]   text-white font-bold w-full h-40">
<h1 className=" py-5 lg:text-5xl text-3xl text-center">Explore our Learning system </h1>
<p className="text-center">We help you to learn interactive language become your expertness</p>
        </div>



<Outlet></Outlet>
<div className="flex">

<Categories></Categories>
<LearningCard></LearningCard>





</div>


<LessonVideo></LessonVideo>




        </div>





    );
};

export default StartLearning;