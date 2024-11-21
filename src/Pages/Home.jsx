import React from 'react';
import Banner from '../Components/Banner';
import Accordion from '../Components/Accordion';







import { Outlet } from 'react-router-dom';

import ChooseLearn from '../Components/ChooseLearn';
import Header from '../Components/Header';
import Progress from '../Components/Progress';
import HeaderSecond from '../Components/HeaderSecond';
import OurTeacher from '../Components/OurTeacher';
import AboutLearning from '../Components/AboutLearning';
import Categories from '../Components/special/Categories';



















const Home = () => {
    return (
        <div >
           <Banner></Banner>
        
          
          
         
       
           <Header></Header>
           <HeaderSecond></HeaderSecond>   
           <Outlet></Outlet>
           
        
           <Progress></Progress>
       
      <ChooseLearn></ChooseLearn>
      <OurTeacher></OurTeacher>
      <AboutLearning></AboutLearning>

           
           <Accordion></Accordion>
         
        </div>
    );
};

export default Home;