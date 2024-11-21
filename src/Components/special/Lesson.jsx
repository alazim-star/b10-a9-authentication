
import HeaderSecond from '../HeaderSecond';
import LessonVideo from '../StartLearning/LessonVideo';
import Categories from './Categories';


const Lesson = () => {
    return (
        <div>
       <div>
        <div className="bg-[#23085a]   text-white font-bold w-full h-40">
<h1 className=" py-5 lg:text-5xl text-3xl text-center">Explore our Learning system </h1>
<p className="text-center">We help you to learn interactive language become your expertness</p>
        </div>

        
<HeaderSecond></HeaderSecond>
<Categories></Categories>

<LessonVideo></LessonVideo>




        </div>



        </div>
    );
};

export default Lesson;