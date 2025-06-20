import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faPuzzlePiece,
  faHandsHelping,
  faBookReader,
  faPaintBrush,
  faCubes,
  faUsers,
  faBook,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const quizData = [
  {
    question: "If you had a free Saturday, what would you love to do? 🌟",
    options: [
      {
        text: "Draw and Create Art",
        icon: faPalette,
        color: "#FF4081",
        hoverIcon: faPaintBrush,
      },
      {
        text: "Build Something Cool",
        icon: faPuzzlePiece,
        color: "#FFC107",
        hoverIcon: faCubes,
      },
      {
        text: "Help Others",
        icon: faHandsHelping,
        color: "#4CAF50",
        hoverIcon: faUsers,
      },
      {
        text: "Read and Learn",
        icon: faBookReader,
        color: "#9C27B0",
        hoverIcon: faBook,
      },
    ],
  },
  // Add more questions here following the same structure
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const totalQuestions = quizData.length;
  const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100;
  const currentQuestionData = quizData[currentQuestion];

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedOption(null);
      } else {
        // Handle quiz completion
        console.log("Quiz completed!");
      }
    }
  };

  const handlePrevious = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
    setSelectedOption(null);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8 relative">
        {/* Decorative elements */}
        <div className="absolute -top-4 right-4 w-12 h-12 bg-[#FFC107]/20 rounded-full blur-lg animate-pulse"></div>
        <div className="absolute bottom-0 left-8 w-8 h-8 bg-[#FF4081]/20 rounded-full blur-md animate-bounce"></div>

        {/* Quiz header */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-[#212121] mb-3">
            Let's Discover Your Super Powers!{" "}
          </h2>
          <p className="text-gray-600">
            Answer these fun questions and let's find out what makes you
            special!
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[#1A73E8] font-medium">
              Question {currentQuestion + 1} of {totalQuestions}
            </span>
            <span className="text-sm text-[#4CAF50]">
              {Math.round(progressPercentage)}% Complete
            </span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#1A73E8] to-[#4CAF50] rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Question and options */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-[#F5F7FA] to-white p-6 rounded-xl border border-gray-100">
            <h3 className="text-xl text-[#212121] font-medium mb-6">
              {currentQuestionData.question}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentQuestionData.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  className={`group relative bg-white p-4 rounded-xl border-2 transition-all transform hover:scale-102 ${
                    selectedOption === index
                      ? "border-[#1A73E8] scale-102"
                      : "border-gray-100 hover:border-[#1A73E8]"
                  }`}
                >
                  <div
                    className={`absolute -top-2 -right-2 w-8 h-8 bg-[#1A73E8] rounded-full flex items-center justify-center transition-opacity ${
                      selectedOption === index
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={option.hoverIcon}
                      className="text-white text-sm"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={option.icon}
                      className="text-2xl"
                      style={{ color: option.color }}
                    />
                    <span className="text-[#212121]">{option.text}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          {/* Navigation buttons */}
          <div className="flex justify-between pt-6">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`px-6 py-2 rounded-full border-2 transition-all ${
                currentQuestion === 0
                  ? "border-gray-200 text-gray-400 cursor-not-allowed"
                  : "border-gray-200 text-gray-500 hover:border-[#1A73E8] hover:text-[#1A73E8]"
              }`}
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={selectedOption === null}
              className={`px-6 py-2 rounded-full transition-all flex items-center gap-2 ${
                selectedOption === null
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-[#1A73E8] hover:bg-[#1557B0]"
              } text-white`}
            >
              {currentQuestion < totalQuestions - 1 ? "Next" : "See Results"}
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
