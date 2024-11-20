import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
       
           <div className='text-center mt-56'> <h1 className='text-center text-5xl  font-bold text-[#23085a]'>ERROR PAGE..</h1>
           <p><Link to="/">  <button className='btn-primary btn mt-10'>Go Back Home</button></Link></p>
           </div>
        </div>
    );
};

export default ErrorPage;