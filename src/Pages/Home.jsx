import React from 'react';
import Banner from '../Components/Banner';
import Accordion from '../Components/Accordion';







import { Outlet } from 'react-router-dom';
import AllCards from '../Components/cards/AllCards';
import ChooseLearn from '../Components/ChooseLearn';
import Header from '../Components/Header';
import Progress from '../Components/Progress';

















const Home = () => {
    return (
        <div >
           <Banner></Banner>
        
          
           <Outlet></Outlet>
           <Header></Header>
           
           
           <AllCards></AllCards>
           <Progress></Progress>
       
      <ChooseLearn></ChooseLearn>

           
           <Accordion></Accordion>
         
        </div>
    );
};

export default Home;