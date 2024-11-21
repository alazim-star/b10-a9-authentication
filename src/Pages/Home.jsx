import React from 'react';
import Banner from '../Components/Banner';
import Accordion from '../Components/Accordion';

import { Outlet } from 'react-router-dom';

import ChooseLearn from '../Components/ChooseLearn';
import Header from '../Components/Header';
import Progress from '../Components/Progress';

import OurTeacher from '../Components/OurTeacher';
import AboutLearning from '../Components/AboutLearning';




const Home = () => {
    return (
        <div >
           <Banner></Banner>
    
           <Header></Header>

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