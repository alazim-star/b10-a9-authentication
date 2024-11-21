import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [cards, setCards] = useState([]);
  const [visibleCards, setVisibleCards] = useState(10); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [modalContent, setModalContent] = useState({}); 
  const navigate = useNavigate();

  useEffect(() => {

    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("ERROR", error));

    
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("ERROR", error));
  }, []);

  const pronounceWord = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "ja-JP"; 
  };

  const handleCardClick = (word) => {
    pronounceWord(word); 
  };

  const toggleModal = (card) => {
    setModalContent(card); 
    setIsModalOpen(!isModalOpen); 
  };

  return (
    <div className="h-auto p-3 bg-white rounded-3xl mt-10 ml-10 mr-10">
  
      <div className="flex flex-wrap gap-2 ml-40">
        {categories.length > 0 ? (
          categories.map((category) => (
            <NavLink
              to={`/learning/${category.category}`}
              key={category.category}
              className={({ isActive }) =>
                `btn px-4 py-2 rounded-xl ${
                  isActive ? "btn-primary" : "bg-gray-200 hover:bg-gray-300"
                }`
              }
            >
              {category.category}
            </NavLink>
          ))
        ) : (
          <p>Loading categories...</p>
        )}
      </div>


      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 container mx-auto">
        {cards.slice(0, visibleCards).map((card) => (
          <div
            key={card.id}
            className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md cursor-pointer text"
            onClick={() => handleCardClick(card.word)} 
          >
            <p className="text-sm font-bold truncate">Word: {card.word}</p>
            <p className="text-sm text-gray-600 truncate">
              Meaning: {card.meaning}
            </p>
            <p className="text-sm text-blue-600 truncate">
              Part of Speech: {card.part_of_speech}
            </p>

            {/* When to Say Button */}
            <button
              className="mt-2 px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
              onClick={(e) => {
                e.stopPropagation(); 
                toggleModal(card);
              }}
            >
              When to Say
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-lg font-bold mb-2">Word Details</h3>
            <p>
              <strong>Word:</strong> {modalContent.word}
            </p>
            <p>
              <strong>Meaning:</strong> {modalContent.meaning}
            </p>
            <p>
              <strong>When to Say:</strong> {modalContent.when_to_say}
            </p>
            <p>
              <strong>Example:</strong> {modalContent.example}
            </p>
            <div className="flex justify-end mt-4">
              <button
                className="btn btn-primary"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
