import React, { useState } from "react";

const Quiz16to18 = ({ quiz, onAnswer, onSubmit, answers, isSubmitting }) => {
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

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] text-white rounded-full px-8 py-4 shadow-lg mb-6">
            <i className="fa-solid fa-crown text-2xl"></i>
            <span className="font-bold text-lg">
              Visionary Achiever Assessment
            </span>
            <i className="fa-solid fa-graduation-cap text-2xl"></i>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive evaluation designed to identify your professional
            strengths and career pathway alignment.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-medium text-gray-600">
              Assessment Progress
            </div>
            <div className="text-sm font-bold text-[#4CAF50]">
              {Math.round(((currentQuestion + 1) / totalQuestions) * 100)}%
              Complete
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] h-3 rounded-full transition-all duration-700"
              style={{
                width: `${((currentQuestion + 1) / totalQuestions) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 p-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                  {currentQuestion + 1}
                </span>
              </div>
              <div>
                {currentQuestionData.context && (
                  <div className="text-sm font-medium text-[#4CAF50] mb-1">
                    {currentQuestionData.context}
                  </div>
                )}
                <h2 className="text-xl font-bold text-[#212121]">
                  {currentQuestionData.text || currentQuestionData.question}
                </h2>
              </div>
            </div>
            {isSubmitting && (
              <p className="text-gray-600 text-sm text-center mt-4">
                Processing your response...
              </p>
            )}
          </div>

          {/* Options */}
          <div className="p-8">
            <div className="space-y-4">
              {currentQuestionData.answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(answer)}
                  disabled={isSubmitting}
                  className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 group ${
                    isSubmitting
                      ? "border-gray-100 bg-gray-50 opacity-50 cursor-not-allowed"
                      : "border-gray-100 hover:border-[#4CAF50]/50 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-8 h-8 bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${
                        isSubmitting ? "" : "group-hover:scale-110"
                      }`}
                    >
                      <span className="text-white font-bold text-sm">
                        {String.fromCharCode(65 + index)}
                      </span>
                    </div>
                    <div>
                      <div className="text-[#212121] font-semibold text-lg mb-2">
                        {answer}
                      </div>
                      {currentQuestionData.descriptions &&
                        currentQuestionData.descriptions[index] && (
                          <div className="text-gray-600 text-sm leading-relaxed">
                            {currentQuestionData.descriptions[index]}
                          </div>
                        )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Question Navigator */}
        <div className="flex justify-center mt-8 gap-3">
          {[...Array(totalQuestions)].map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-500 ${
                index < currentQuestion
                  ? "bg-[#4CAF50] scale-110"
                  : index === currentQuestion
                  ? "bg-[#4CAF50] scale-125 ring-4 ring-[#4CAF50]/30"
                  : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz16to18;
