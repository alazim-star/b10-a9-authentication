import React from "react";

const Header = () => {
  const languages = [
    {
      name: "German",
      learners: "7.3k Learners",
      flag: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
    },
    {
      name: "English",
      learners: "6.8k Learners",
      flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    },
    {
      name: "Japanese",
      learners: "5.3k Learners",
      flag: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg", // Japan flag added
    },
    {
      name: "French",
      learners: "4.9k Learners",
      flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    },
    {
      name: "Spanish",
      learners: "3.3k Learners",
      flag: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
    },
    {
      name: "Italian",
      learners: "NEW",
      flag: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
      isNew: true,
    },
  ];

  return (
    <div className="bg-[#23085a] p-4 rounded-lg shadow-md mt-20">
      <div className="flex items-center justify-between space-x-4">
        {languages.map((language, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
          >
            <img
              className="rounded-full w-10 h-10"
              src={language.flag}
              alt={`${language.name} flag`}
            />
            <div>
              <p className="text-white font-semibold">{language.name}</p>
              <p className="text-gray-300 text-sm">
                {language.isNew ? (
                  <span className="text-blue-400 font-bold">{language.learners}</span>
                ) : (
                  language.learners
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
   
    </div>
  );
};

export default Header;
