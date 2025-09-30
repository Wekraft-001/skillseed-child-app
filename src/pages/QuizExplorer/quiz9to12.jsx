import React, { useState } from "react";

const Quiz9to12 = ({ quiz, onAnswer, onSubmit, answers, isSubmitting }) => {
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

  // Colorful gradient options
  const getOptionColor = (index) => {
    const colors = [
      "from-blue-500 to-blue-600",
      "from-pink-500 to-pink-600",
      "from-green-500 to-green-600",
      "from-purple-500 to-purple-600",
      "from-yellow-500 to-orange-500",
      "from-cyan-500 to-cyan-600",
    ];
    return colors[index % colors.length];
  };

  const getOptionIcon = (index) => {
    const icons = [
      "fa-solid fa-star",
      "fa-solid fa-heart",
      "fa-solid fa-lightbulb",
      "fa-solid fa-rocket",
      "fa-solid fa-crown",
      "fa-solid fa-magic-wand-sparkles",
    ];
    return icons[index % icons.length];
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg mb-6">
            <i className="fa-solid fa-brain text-[#1A73E8] text-2xl animate-pulse"></i>
            <span className="text-[#212121] font-semibold">
              Budding Innovator Quest
            </span>
            <i className="fa-solid fa-rocket text-[#FF4081] text-xl"></i>
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#1A73E8]">
                {currentQuestion + 1}
              </div>
              <div className="text-sm text-gray-500">Question</div>
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-[#1A73E8] to-[#4CAF50] rounded-full"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#4CAF50]">
                {totalQuestions}
              </div>
              <div className="text-sm text-gray-500">Total</div>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#1A73E8] to-[#4CAF50] h-2 rounded-full transition-all duration-700 ease-out"
              style={{
                width: `${((currentQuestion + 1) / totalQuestions) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-2xl mb-8 border border-blue-100">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-[#1A73E8] to-[#0D47A1] rounded-full mx-auto mb-6 flex items-center justify-center animate-pulse">
              <i className="fa-solid fa-lightbulb text-white text-3xl"></i>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#212121] mb-4">
              {currentQuestionData.text || currentQuestionData.question}
            </h2>
            <p className="text-gray-600">
              {isSubmitting
                ? "Processing your answer..."
                : "Choose what resonates with you most!"}
            </p>
          </div>

          {/* Interactive Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentQuestionData.answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(answer)}
                disabled={isSubmitting}
                className={`bg-gradient-to-r ${getOptionColor(
                  index
                )} text-white rounded-2xl p-6 transform transition-all duration-300 shadow-lg group relative overflow-hidden ${
                  isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:scale-105 hover:rotate-1 hover:shadow-2xl"
                }`}
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className={`${getOptionIcon(index)} text-2xl`}></i>
                  </div>
                  <span className="text-lg font-semibold text-left">
                    {answer}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-3">
          {[...Array(totalQuestions)].map((_, index) => (
            <div
              key={index}
              className={`transition-all duration-500 rounded-full ${
                index < currentQuestion
                  ? "w-3 h-3 bg-[#4CAF50]"
                  : index === currentQuestion
                  ? "w-6 h-3 bg-[#1A73E8] animate-pulse"
                  : "w-3 h-3 bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz9to12;
