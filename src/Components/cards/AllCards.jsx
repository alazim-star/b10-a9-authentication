import { useEffect, useState } from "react";

import Card from './../special/Card';



const AllCards = () => {
const [coffees,setcoffees]=useState([])
useEffect(()=>{
fetch('/japanese_data.json')
.then(res=>res.json())
.then(data=>setcoffees(data))



},[])




    return (

<div className="lg:mt-5 container mx-auto ">


        
          
       
       
        <div className=" grid lg:grid-cols-8 md:grid-cols-5 grid-cols-4">
        {
    coffees.map(coffee=><Card key={coffee.id} coffee={coffee}>








        
    </Card>)
}



















            </div>

        </div>
    );
};

export default AllCards;