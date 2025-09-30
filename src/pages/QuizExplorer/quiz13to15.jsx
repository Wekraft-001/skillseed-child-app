import React, { useState } from "react";

const Quiz13to15 = ({ quiz, onAnswer, onSubmit, answers, isSubmitting }) => {
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

  // Icon options for answers
  const getOptionIcon = (index) => {
    const icons = [
      "fa-solid fa-globe",
      "fa-solid fa-lightbulb",
      "fa-solid fa-heart",
      "fa-solid fa-rocket",
      "fa-solid fa-star",
      "fa-solid fa-brain",
    ];
    return icons[index % icons.length];
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF4081] to-[#E91E63] text-white rounded-full px-6 py-3 shadow-lg mb-6">
            <i className="fa-solid fa-fire text-2xl animate-pulse"></i>
            <span className="font-semibold">Teen Trailblazer Assessment</span>
            <i className="fa-solid fa-star text-xl"></i>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-600">Progress</span>
            <span className="text-sm font-medium text-[#FF4081]">
              {currentQuestion + 1}/{totalQuestions}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-[#FF4081] to-[#E91E63] h-2 rounded-full transition-all duration-500"
              style={{
                width: `${((currentQuestion + 1) / totalQuestions) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8">
          {/* Question Header */}
          <div className="bg-gradient-to-r from-[#FF4081] to-[#E91E63] text-white p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold">{currentQuestion + 1}</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">
                  {currentQuestionData.text || currentQuestionData.question}
                </h2>
                {currentQuestionData.scenario && (
                  <p className="text-pink-100 text-sm mt-1">
                    {currentQuestionData.scenario}
                  </p>
                )}
              </div>
            </div>
            {isSubmitting && (
              <p className="text-pink-100 text-sm text-center">
                Processing your answer...
              </p>
            )}
          </div>

          {/* Options */}
          <div className="p-6">
            <div className="space-y-4">
              {currentQuestionData.answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(answer)}
                  disabled={isSubmitting}
                  className={`w-full rounded-xl p-4 text-left transition-all duration-300 border group ${
                    isSubmitting
                      ? "bg-gray-50 opacity-50 cursor-not-allowed border-transparent"
                      : "bg-gray-50 hover:bg-gradient-to-r hover:from-[#FF4081]/10 hover:to-[#E91E63]/10 hover:shadow-lg border-transparent hover:border-[#FF4081]/30"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r from-[#FF4081] to-[#E91E63] rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${
                        isSubmitting ? "" : "group-hover:scale-110"
                      }`}
                    >
                      <i
                        className={`${getOptionIcon(index)} text-white text-lg`}
                      ></i>
                    </div>
                    <div>
                      <div className="text-[#212121] font-semibold mb-1">
                        {answer}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2">
          {[...Array(totalQuestions)].map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index <= currentQuestion ? "bg-[#FF4081]" : "bg-gray-300"
              } ${index === currentQuestion ? "scale-125" : ""}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz13to15;
