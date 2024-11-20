import { useEffect, useState } from "react";
import Card from "./Card";



const AllCards = () => {
const [products,setProducts]=useState([])
useEffect(()=>{
fetch('/japanese_data.json')
.then(res=>res.json())
.then(data=>setProducts(data))



},[])




    return (

<div className=" mt-5 container   mx-auto ">


        
          
       
       
        <div className=" grid grid-cols-8">
        {
    products.map(product=><Card key={product.id} product={product}>








        
    </Card>)
}



















            </div>

        </div>
    );
};

export default AllCards;