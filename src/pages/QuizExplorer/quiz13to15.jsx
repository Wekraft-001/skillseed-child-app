
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Quiz13to15 = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      id: 1,
      question: "What matters most to you in your future career?",
      scenario: "Imagine you're 25 and looking back on your career choice...",
      options: [
        { text: "Making a real impact on society", icon: "fa-solid fa-globe", insight: "Social Impact Driven" },
        { text: "Creative expression and innovation", icon: "fa-solid fa-lightbulb", insight: "Creative Innovator" },
        { text: "Financial stability and growth", icon: "fa-solid fa-chart-line", insight: "Success Oriented" },
        { text: "Work-life balance and flexibility", icon: "fa-solid fa-balance-scale", insight: "Balance Seeker" }
      ]
    },
    {
      id: 2,
      question: "When facing a complex problem, your approach is to...",
      scenario: "Think about how you handle challenging situations in school or life...",
      options: [
        { text: "Research thoroughly before acting", icon: "fa-solid fa-search", insight: "Analytical Thinker" },
        { text: "Brainstorm creative solutions", icon: "fa-solid fa-brain", insight: "Creative Problem Solver" },
        { text: "Seek advice from experts", icon: "fa-solid fa-users", insight: "Collaborative Learner" },
        { text: "Jump in and learn by doing", icon: "fa-solid fa-rocket", insight: "Action-Oriented" }
      ]
    },
    {
      id: 3,
      question: "What type of environment helps you thrive?",
      scenario: "Consider where you feel most productive and energized...",
      options: [
        { text: "Quiet, focused individual work", icon: "fa-solid fa-user", insight: "Independent Worker" },
        { text: "Dynamic team collaboration", icon: "fa-solid fa-people-group", insight: "Team Player" },
        { text: "Fast-paced, high-energy setting", icon: "fa-solid fa-bolt", insight: "High-Energy Performer" },
        { text: "Structured, organized environment", icon: "fa-solid fa-list", insight: "Structure Oriented" }
      ]
    },
    {
      id: 4,
      question: "Which skill would you most like to master?",
      scenario: "If you could become exceptional at one skill...",
      options: [
        { text: "Advanced technology and coding", icon: "fa-solid fa-code", insight: "Tech Enthusiast" },
        { text: "Public speaking and leadership", icon: "fa-solid fa-microphone", insight: "Natural Leader" },
        { text: "Design and visual communication", icon: "fa-solid fa-palette", insight: "Visual Communicator" },
        { text: "Data analysis and research", icon: "fa-solid fa-chart-bar", insight: "Data-Driven Thinker" }
      ]
    },
    {
      id: 5,
      question: "What motivates you to push through difficult challenges?",
      scenario: "Reflect on what drives you when things get tough...",
      options: [
        { text: "The potential to help others", icon: "fa-solid fa-heart", insight: "Service-Minded" },
        { text: "Personal growth and learning", icon: "fa-solid fa-seedling", insight: "Growth-Focused" },
        { text: "Recognition and achievement", icon: "fa-solid fa-trophy", insight: "Achievement-Oriented" },
        { text: "The thrill of discovery", icon: "fa-solid fa-magnifying-glass", insight: "Curiosity-Driven" }
      ]
    }
  ];

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate('/results');
    }
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
            <span className="text-sm font-medium text-[#FF4081]">{currentQuestion + 1}/{questions.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-[#FF4081] to-[#E91E63] h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
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
                <h2 className="text-xl font-bold">{questions[currentQuestion].question}</h2>
                <p className="text-pink-100 text-sm mt-1">{questions[currentQuestion].scenario}</p>
              </div>
            </div>
          </div>

          {/* Options */}
          <div className="p-6">
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.text)}
                  className="w-full bg-gray-50 hover:bg-gradient-to-r hover:from-[#FF4081]/10 hover:to-[#E91E63]/10 rounded-xl p-4 text-left transition-all duration-300 hover:shadow-lg border border-transparent hover:border-[#FF4081]/30 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#FF4081] to-[#E91E63] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <i className={`${option.icon} text-white text-lg`}></i>
                    </div>
                    <div>
                      <div className="text-[#212121] font-semibold mb-1">{option.text}</div>
                      <div className="text-sm text-[#FF4081] font-medium">{option.insight}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index <= currentQuestion 
                  ? 'bg-[#FF4081]' 
                  : 'bg-gray-300'
              } ${
                index === currentQuestion ? 'scale-125' : ''
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz13to15;
