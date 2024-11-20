import { useEffect, useState } from "react";
import Card from "../cards/Card";
import LessonCard from "./LessonCard";

const LessonsCard = () => {
const [products,setProducts]=useState([])
useEffect(()=>{
fetch('/japanese_data.json')
.then(res=>res.json())
.then(data=>setProducts(data))

},[])

    return (

<div className=" mt-5 container border p-5 mx-auto  ">
     
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 gap-5 ">
        {
    products.map(product=><LessonCard key={product.id} product={product}>
    </LessonCard>)
}


            </div>

        </div>
    );
};

export default LessonsCard;