import { NavLink } from "react-router-dom";
import React, { useState } from "react";

const LessonCard = ({ product}) => {
  const {
    id,
    word,
    meaning,
    pronunciation,
    part_of_speech,
    difficulty,
    when_to_say,
    example,
  } = product;

  // State to control the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Conditional classes based on difficulty
  const cardColor =
    difficulty === "easy"
      ? "border-green-500 bg-green-100"
      : difficulty === "medium"
      ? "border-yellow-500 bg-yellow-100"
      : "border-red-500 bg-red-100";

  // Pronunciation functionality
  const pronounceWord = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "ja-JP"; // Set to English by default (adjust as needed)
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div>
      {/* Word Card */}
      <div
        className={`card border ${cardColor}`}
        onClick={() => pronounceWord(word)}
      >
        <div className="card-body items-center text-center">
          <h2 className="card-title">{word}</h2>
          <p>Pronunciation : {pronunciation}</p>
          <p>Meaning : {meaning}</p>
          <p>Part of speech : {part_of_speech}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary" onClick={(e) => { 
              e.stopPropagation(); // Prevent event propagation to the card's click
              toggleModal(); 
            }}>
              When to Say
            </button>
            <NavLink to="/learning">
              <button className="btn btn-primary">Let's Learn</button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={toggleModal} // Close modal on background click
        >
          <div
            className="bg-white rounded-lg p-6 w-96 shadow-lg z-60"
            onClick={(e) => e.stopPropagation()} // Prevent background click from closing modal
          >
            <h3 className="text-xl font-semibold">{word}</h3>
            <p className="mt-2">
              <strong>Meaning:</strong> {meaning}
            </p>
            <p className="mt-2">
              <strong>When to Say:</strong> {when_to_say}
            </p>
            <p className="mt-2">
              <strong>Example:</strong> {example}
            </p>
            <div className="mt-4 flex justify-end">
              <button className="btn btn-primary" onClick={toggleModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LessonCard;
