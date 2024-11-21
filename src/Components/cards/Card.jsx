import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ coffee }) => {
  const navigate = useNavigate();
  const { id, word, meaning, category, difficulty = "easy", part_of_speech, when_to_say, example } = coffee || {};

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to pronounce a word
  const pronounceWord = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "ja-JP"; 
    window.speechSynthesis.speak(utterance);
  };

  // Function to toggle modal
  const toggleModal = (e) => {
    e.stopPropagation(); 
    setIsModalOpen(!isModalOpen);
  };

  // Conditional classes based on difficulty
  const cardColor =
    difficulty === "easy"
      ? "border-green-500 bg-green-100"
      : difficulty === "medium"
      ? "border-yellow-500 bg-yellow-100"
      : "border-red-500 bg-red-100";

  return (
    <div
      className={`rounded-lg shadow-md hover:shadow-lg cursor-pointer duration-300 ease-in-out flex flex-col justify-between items-center p-5 ${cardColor}`}
      role="button"
      tabIndex="0"
      onClick={() => pronounceWord(word)} 
    >
      {/* Card Content */}
      <div className="text-center">
        <p className="text-sm font-semibold">{category}</p>
        <p className="text-sm font-bold truncate">Word: {word}</p>
        <p className="text-sm text-gray-600 truncate">Meaning: {meaning}</p>
        <p className="text-sm text-blue-600 truncate">Part of Speech: {part_of_speech}</p>
      </div>

      {/* "When to Say" Button */}
      <button
        className="mt-2 px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
        onClick={toggleModal} 
      >
        When to Say
      </button>

      {/* Back to Lesson Button */}
      <button
        className="mt-3 px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
        onClick={(e) => {
          e.stopPropagation(); 
          navigate("/lessons");
        }}
      >
        Back to Lesson
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-lg font-bold mb-2">Word Details</h3>
            <p>
              <strong>Word:</strong> {word}
            </p>
            <p>
              <strong>Meaning:</strong> {meaning}
            </p>
            <p>
              <strong>When to Say:</strong> {when_to_say}
            </p>
            <p>
              <strong>Example:</strong> {example}
            </p>
            <div className="flex justify-end mt-4">
              <button className="mr-3 btn btn-primary" onClick={toggleModal}>
                Close
              </button>
            </div>
          </div>
        

        </div>
      )}
      
    </div>
  );
};

export default Card;
