import { NavLink } from "react-router-dom";

const Card = ({ product }) => {
  const { id, word, meaning } = product;

  // Pronounce the word
  const pronounceWord = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "ja-JP"; 
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div
      className=" rounded-lg shadow-md hover:shadow-lg cursor-pointer  duration-300 ease-in-out
        flex flex-col justify-between items-center p-5 "
      onClick={() => pronounceWord(word)}
      role="button"
      tabIndex="0"
     
    >
      {/* Card Content */}
      <div className="text-center">
        <p className="text-sm font-semibold">Lesson: {id}</p>
        <p className="text-sm font-bold truncate">Word: {word}</p>
        <p className="text-sm text-gray-600 truncate">Meaning: {meaning}</p>
      </div>

      {/* View Details Button */}
      <NavLink to={`/details/${id}`}>
        <button
          className="mt-3 text-sm text-purple-600 hover:text-purple-800 font-medium underline"
          onClick={(e) => e.stopPropagation()} 
        >
          View Details
        </button>
      </NavLink>
    </div>
  );
};

export default Card;
