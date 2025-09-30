import React, { useState } from "react";

const Quiz6to8 = ({ quiz, onAnswer, onSubmit, answers, isSubmitting }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = quiz.questions;

  if (!quiz || questions.length === 0) {
    return <div>Loading quiz...</div>;
  }

  const currentQuestionData = questions[currentQuestion];
  const totalQuestions = questions.length;

  console.log(currentQuestionData, "checking");

  const handleAnswerClick = (answer) => {
    if (isSubmitting) return;

    onAnswer(currentQuestion, answer);

    // Move to next question
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz completed
      onSubmit();
    }
  };

  // Create colorful options for kids
  const getOptionStyle = (index) => {
    const colors = [
      "bg-pink-400 hover:bg-pink-500",
      "bg-yellow-400 hover:bg-yellow-500",
      "bg-blue-400 hover:bg-blue-500",
      "bg-green-400 hover:bg-green-500",
      "bg-purple-400 hover:bg-purple-500",
      "bg-orange-400 hover:bg-orange-500",
    ];
    const baseColor = colors[index % colors.length];

    if (isSubmitting) {
      return baseColor.split(" hover:")[0] + " opacity-50 cursor-not-allowed";
    }
    return baseColor;
  };

  const getOptionIcon = (index) => {
    const icons = [
      "fa-solid fa-star",
      "fa-solid fa-heart",
      "fa-solid fa-sun",
      "fa-solid fa-rainbow",
      "fa-solid fa-rocket",
      "fa-solid fa-smile",
    ];
    return icons[index % icons.length];
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Progress Dots */}
        <div className="flex justify-center gap-4 overflow-x-auto mb-8">
          {[...Array(Math.min(totalQuestions))].map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index <= currentQuestion ? "bg-[#FFC107]" : "bg-gray-300"
              } ${index === currentQuestion ? "scale-125 animate-pulse" : ""}`}
            ></div>
          ))}
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mb-8 border-4 border-[#FFC107]/30">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-[#FFC107] to-[#FF9800] rounded-full mx-auto mb-6 flex items-center justify-center animate-bounce">
              <span className="text-3xl">🤔</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#212121] mb-4">
              {currentQuestionData.text || currentQuestionData.question}
            </h2>
            <p className="text-gray-600">
              {isSubmitting
                ? "Processing your answer..."
                : "Choose the one that feels right for you!"}
            </p>
          </div>

          {/* Answer Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQuestionData.answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(answer)}
                className={`${getOptionStyle(
                  index
                )} text-white rounded-2xl p-6 transform transition-all duration-200 shadow-lg group ${
                  isSubmitting ? "" : "hover:scale-105 hover:shadow-xl"
                }`}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <i className={`${getOptionIcon(index)} text-2xl`}></i>
                  </div>
                  <span className="text-lg font-semibold text-center">
                    {answer}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz6to8;
