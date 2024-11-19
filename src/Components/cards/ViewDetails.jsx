import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const {word,pronunciation,meaning,part_of_speech,difficulty,lesson_no,when_to_say,example}=useLoaderData()

    return (
        <div className='container mx-auto '>
            <div className="card  w-96 shadow-xl">
  <figure>
    
  </figure>
  <div className="card-body">
  <p>Lesson No :{lesson_no}</p>
    <h2 className="card-title">Word: {word}</h2>
    <p>Pronunciation: {pronunciation}</p>
    <p>Meaning: {meaning}</p>
    <p>Part of speech: {part_of_speech}</p>
    <p>Difficulty: {difficulty}</p>
   
    <p>When to say :{when_to_say}</p>
    <p>Example: {example}</p>
    <div className="card-actions justify-end">
     <Link to="/"> <button className="btn btn-primary">Back Home</button></Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default ViewDetails;