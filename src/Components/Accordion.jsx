import React from "react";

const Accordion = () => {
  return (
    <div className="text-[#23085a] px-4 md:px-8">
      <h1 className="text-center mt-10 text-2xl md:text-4xl font-bold">
        Frequently Asked Questions
      </h1>
      <div className="bg-[#23085a] container mx-auto mt-10 md:mt-20 mb-10 md:mb-20 flex flex-col md:flex-row gap-8 items-center">
        {/* Accordion Section */}
        <div className="w-full md:w-1/2 space-y-4">
          <div className="collapse collapse-arrow bg-base-200 rounded-lg">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-lg md:text-xl font-medium">
              What languages and at which levels can I learn with your Teams?
            </div>
            <div className="collapse-content">
              <p className="text-sm md:text-base">
                Our Teams currently offers Japanese, Italian, Spanish, German, and English
                intensive courses only. You will be able to sign up for one of the following levels:
                German A1.1, A1.2, A2.1, A2.2, B1.1, B1.2, B1.3. English: A1.1, A1.2, A2.1, A2.2.
                Italian: A1.1, A1.2. Spanish: A1.1, A1.2, A2.1, A2.2.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 rounded-lg">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg md:text-xl font-medium">
              Could I download all documents that I need?
            </div>
            <div className="collapse-content">
              <p className="text-sm md:text-base">
                Yes. You can download all course materials for free from your account. No additional
                materials or textbooks are required. In addition to the online course with a teacher,
                we offer homework and a lesson practice section after your lessons so you can keep
                practicing.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 rounded-lg">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg md:text-xl font-medium">
              Can I receive a certificate?
            </div>
            <div className="collapse-content">
              <p className="text-sm md:text-base">
                Those who successfully pass the optional final assessment test at the end of the
                course will receive a certificate of successful completion.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="https://i.ibb.co/HHnTVM4/c430c5-9a036bca709341be933e0fe08be29ac2-mv2.jpg"
            alt="FAQ Illustration"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
