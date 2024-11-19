import { NavLink } from "react-router-dom";

const Card = ({product}) => {
const {id,word,meaning}= product

    return (
        <div>


            
   
   
 <div>

    

 <div className="">
 <p className=' text-sm'> {id}</p>
 <p className=' text-sm'> {word}</p>
 <p className='text-sm'> {meaning}</p>
 </div>
 

 <div className=""></div>

<NavLink to={`/details/${id}`}>
     <button className="  text-sm   text-purple-600 ">
        View Details
   </button>
   </NavLink>

 </div>

 </div>
         
     
    );
};

export default Card;