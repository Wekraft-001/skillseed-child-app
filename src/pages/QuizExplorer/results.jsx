import React from "react";
const Results = () => {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <main>
        {/* Quiz Results Summary */}
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Results Header */}
            <div className="text-center mb-12 relative">
              <div className="absolute -top-8 left-1/4 w-20 h-20 bg-[#FFC107]/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute top-4 right-1/3 w-16 h-16 bg-[#FF4081]/20 rounded-full blur-lg animate-bounce"></div>

              <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg mb-6">
                <i className="fa-solid fa-trophy text-[#FFC107] text-2xl animate-bounce"></i>
                <span className="text-[#212121] font-semibold">
                  Quiz Complete!
                </span>
                <i className="fa-solid fa-star text-[#FF4081] text-xl animate-spin"></i>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-[#212121] mb-4">
                Amazing Work, Emma!
                <span className="text-[#1A73E8]">🎉</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                You've discovered some incredible superpowers! Here's what we
                learned about you.
              </p>
            </div>

            {/* Superpower Discovery */}
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 mb-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-[#FFC107] to-[#FF9800] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <i className="fa-solid fa-magic-wand-sparkles text-white text-3xl animate-pulse"></i>
                </div>
                <h2 className="text-3xl font-bold text-[#212121] mb-3">
                  Your Superpower Profile
                </h2>
                <p className="text-[#1A73E8] font-semibold text-lg">
                  Creative Explorer with Leadership Spark ✨
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="w-16 h-16 bg-[#FF4081]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fa-solid fa-palette text-[#FF4081] text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-[#212121] mb-2">
                    Creative Genius
                  </h3>
                  <p className="text-gray-600 text-sm">
                    You love making beautiful things and thinking outside the
                    box!
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="w-16 h-16 bg-[#4CAF50]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fa-solid fa-users text-[#4CAF50] text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-[#212121] mb-2">
                    Team Helper
                  </h3>
                  <p className="text-gray-600 text-sm">
                    You're amazing at working with others and helping friends!
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="w-16 h-16 bg-[#1A73E8]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fa-solid fa-lightbulb text-[#1A73E8] text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-[#212121] mb-2">
                    Problem Solver
                  </h3>
                  <p className="text-gray-600 text-sm">
                    You never give up and always find clever solutions!
                  </p>
                </div>
              </div>
            </div>

            {/* Response Summary */}
            <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#212121] mb-6 flex items-center gap-3">
                <i className="fa-solid fa-list-check text-[#1A73E8]"></i>
                Your Quiz Responses
              </h2>

              <div className="space-y-4">
                {[
                  {
                    question: "Favorite Saturday Activity",
                    answer: "Draw and Create Art",
                    icon: "fa-solid fa-palette",
                    color: "text-[#FF4081]",
                  },
                  {
                    question: "Learning Style",
                    answer: "Working with Friends",
                    icon: "fa-solid fa-users",
                    color: "text-[#4CAF50]",
                  },
                  {
                    question: "Problem Solving",
                    answer: "Try Different Solutions",
                    icon: "fa-solid fa-lightbulb",
                    color: "text-[#FFC107]",
                  },
                  {
                    question: "Future Dreams",
                    answer: "Design Amazing Things",
                    icon: "fa-solid fa-rocket",
                    color: "text-[#9C27B0]",
                  },
                  {
                    question: "Helping Others",
                    answer: "Love Helping Friends",
                    icon: "fa-solid fa-heart",
                    color: "text-[#FF4081]",
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-[#F5F7FA] rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#212121] font-medium">
                        {item.question}
                      </span>
                      <span className="text-[#1A73E8] text-sm">
                        Question {index + 1}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className={`${item.icon} ${item.color}`}></i>
                      <span className="text-gray-700">{item.answer}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* AI Recommendations */}
              <div className="bg-gradient-to-br from-[#1A73E8] to-[#0D47A1] rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-20">
                  <i className="fa-solid fa-robot text-6xl"></i>
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                    <i className="fa-solid fa-magic-wand-sparkles text-white text-2xl"></i>
                  </div>

                  <h3 className="text-2xl font-bold mb-3">
                    Get AI Recommendations
                  </h3>
                  <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                    Let our AI suggest fun activities, learning paths, and
                    career ideas based on your superpowers!
                  </p>

                  <button className="w-full bg-white text-[#1A73E8] rounded-full py-3 px-6 font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                    <i className="fa-solid fa-sparkles"></i>
                    Get My Recommendations
                  </button>
                </div>
              </div>

              {/* Chat with AI Advisor */}
              <div className="bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-20">
                  <i className="fa-solid fa-comments text-6xl"></i>
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                    <i className="fa-solid fa-user-astronaut text-white text-2xl"></i>
                  </div>

                  <h3 className="text-2xl font-bold mb-3">
                    Chat with AI Advisor
                  </h3>
                  <p className="text-green-100 mb-6 text-sm leading-relaxed">
                    Ask questions about your results, explore career paths, or
                    get advice from our friendly AI mentor!
                  </p>

                  <button className="w-full bg-white text-[#4CAF50] rounded-full py-3 px-6 font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                    <i className="fa-solid fa-comment-dots"></i>
                    Start Chatting
                  </button>
                </div>
              </div>
            </div>

            {/* Achievement Badge */}
            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#FFC107] to-[#FF9800] text-white rounded-full px-8 py-4 shadow-lg">
                <i className="fa-solid fa-medal text-2xl animate-bounce"></i>
                <div>
                  <p className="font-bold text-lg">Achievement Unlocked!</p>
                  <p className="text-sm opacity-90">
                    Quiz Explorer Badge Earned
                  </p>
                </div>
                <i className="fa-solid fa-star text-2xl animate-spin"></i>
              </div>
            </div>

            {/* Share Results */}
            <div className="bg-white rounded-2xl p-6 mt-8 shadow-lg">
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#212121] mb-4">
                  Share Your Superpowers! 🌟
                </h3>
                <p className="text-gray-600 mb-6">
                  Let your friends and family know about your amazing
                  discoveries!
                </p>

                <div className="flex justify-center gap-4">
                  <button className="bg-[#1A73E8] text-white rounded-full px-6 py-2 text-sm hover:bg-[#1557B0] transition-all flex items-center gap-2">
                    <i className="fa-solid fa-share"></i>
                    Share Results
                  </button>
                  <button className="bg-[#4CAF50] text-white rounded-full px-6 py-2 text-sm hover:bg-[#388E3C] transition-all flex items-center gap-2">
                    <i className="fa-solid fa-download"></i>
                    Save Certificate
                  </button>
                  <button className="bg-[#FF4081] text-white rounded-full px-6 py-2 text-sm hover:bg-[#E91E63] transition-all flex items-center gap-2">
                    <i className="fa-solid fa-redo"></i>
                    Retake Quiz
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Results;
