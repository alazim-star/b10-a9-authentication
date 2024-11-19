import React from 'react';

const Accordion = () => {
    return (
        
        
        <div className='text-[#23085a]' >
                 <h1 className=' text-center mt-10  text-4xl font-bold'>Frequently asked questions</h1>
          <div className='container mx-auto mt-20 mb-20 flex'>     


<div className="collapse collapse-arrow bg-base-200">

  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium">What languages and at which levels can I learn with your Teams?</div>
  <div className="collapse-content">
    <p>Our Teams currently offers Japanese, Italian, Spanish, German and English intensive courses only. You will be able to sign up for one of the following levels: German A1.1, A1.2, A2.1, A2.2, B1.1, B1.2, B1.3. English:  A1.1, A1.2, A2.1, A2.2. Italian: A1.1, A1.2. Spanish: A1.1, A1.2, A2.1, A2.2.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">Could i download all document that need?</div>
  <div className="collapse-content">
    <p>Yes. You can download all course materials for free from your account. No additional materials or textbooks are required. In addition to the online course with a teacher,we offers homework and a lesson practice section after your lessons so you can keep practising.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">Can i receive a certificate</div>
  <div className="collapse-content">
    <p>who successfully pass the optional final assessment test and the end of the course will receive a certificate of successful completion</p>
  </div>
</div>
<div>
  <img src="https://i.ibb.co.com/HHnTVM4/c430c5-9a036bca709341be933e0fe08be29ac2-mv2.jpg" alt="" />
</div>

             </div>
        </div>
    );
};

export default Accordion;