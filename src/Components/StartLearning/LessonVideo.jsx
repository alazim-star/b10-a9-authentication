
import { Link } from 'react-router-dom';

const LessonVideo = () => {
    return (
        <div>
         <div className=' mb-10 text-center'>
             <h1 className='lg:text-5xl text-3xl font-bold text-[#23085a]'>Why learn Japanese  online with us? </h1>
          <p className='text-[#23085a] mt-5'>It helps to explore lessening and build capability to catch language </p>
</div>
           

<div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 container mx-auto'>


<div className="card bg-base-100 w-96 shadow-xl ">
  <figure>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/wD3FJgij79c?si=aFiFv4N8dckY9f0M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Hiragana read and write  
 
    </h2>
    <p>If you dont know basic hiragana you can not read word </p>
    <div className="card-actions justify-end">
    <Link  to='/tutorials' ><button className="btn bg-[#23085a] text-white">View More</button></Link>
    </div>
  </div>
</div>


<div className="card bg-base-100 w-96 shadow-xl">
  <figure>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/27YZdr5uuyM?si=AbmHSCLtwSA3ivp3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
   Lesson 1 to lesson 10 word meaning
   
    </h2>
    <p>You have to learn vocabulary to progress you skill</p>
    <div className="card-actions justify-end">
    <Link  to='/tutorials' ><button className="btn bg-[#23085a] text-white">View More</button></Link>
    </div>
  </div>
</div>



<div className="card bg-base-100 w-96 shadow-xl">
  <figure>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/vEnQtNcR4iA?si=uo2jyMFyvTdupHp0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    Hiragana pronunciation Practice
     
    </h2>
    <p>For well in your goal you must know the wright pronunciation </p>
    <div className="card-actions justify-end">
    <Link  to='/tutorials' ><button className="btn bg-[#23085a] text-white">View More</button></Link>
    </div>
  </div>
</div>




<div className="card bg-base-100 w-96 shadow-xl">
  <figure>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/PuvURn4bYlo?si=7dabApB4H7QkxXOq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     Katakana is one of the alphabet of Japanese language 
     
    </h2>
    <p>You must know katakana for english word pronunciation </p>
    <div className="card-actions justify-end">
    <Link  to='/tutorials' ><button className="btn bg-[#23085a] text-white">View More</button></Link>
    </div>
  </div>
</div>


<div className="card bg-base-100 w-96 shadow-xl">
  <figure>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/b2fLwA5VTp4?si=9zPgPo_YpYbh1v_b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    Japanese double word pronunciation is easy just technic 

    </h2>
    <p>the double word is make you easy to pronunciation correctly</p>
    <div className="card-actions justify-end">
    <Link  to='/tutorials' ><button className="btn bg-[#23085a] text-white">View More</button></Link>
    </div>
  </div>
</div>


<div className="card bg-base-100 w-96 shadow-xl">
  <figure>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/hUm4DFNXIDY?si=Nqnf824KQxhRjrbz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     This Japanese Count and you will learn how to count down
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>it helps you to know Japanese language properly </p>
    <div className="card-actions justify-end">
    <Link  to='/tutorials' ><button className="btn bg-[#23085a] text-white">View More</button></Link>
      
    </div>
  </div>
</div>




</div>

        </div>
    );
};

export default LessonVideo;