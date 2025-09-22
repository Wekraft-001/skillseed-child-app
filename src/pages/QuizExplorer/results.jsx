import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get data passed from Quiz component
  const { analysis, answers, quizId, ageRange, user } = location.state || {};

  // If no data, redirect back to quiz home
  if (!analysis || !answers) {
    return (
      <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">
            No results found. Please take the quiz first.
          </p>
          <button
            onClick={() => navigate("/quizHome")}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Take Quiz
          </button>
        </div>
      </div>
    );
  }

  // Parse the analysis to extract key insights
  const parseAnalysis = (analysisText) => {
    const sections = analysisText
      .split(/\d+\.\s/)
      .filter((section) => section.trim());

    return {
      overview:
        sections[0] ||
        "Based on your responses, here's what we discovered about you!",
      careers:
        sections[1] ||
        "Various career paths align with your interests and strengths.",
      skills:
        sections[2] ||
        "Focus on developing skills that match your natural talents.",
      education:
        sections[3] || "Consider educational paths that support your goals.",
      nextSteps:
        sections[4] ||
        "Explore opportunities to learn more about your interests.",
    };
  };

  const parsedAnalysis = parseAnalysis(analysis);

  // Generate superpower profile based on analysis content
  const generateSuperpowers = (analysisText, answersData) => {
    const lowerAnalysis = analysisText.toLowerCase();
    const superpowers = [];

    // Determine superpowers based on analysis content
    if (
      lowerAnalysis.includes("creative") ||
      lowerAnalysis.includes("art") ||
      lowerAnalysis.includes("design")
    ) {
      superpowers.push({
        title: "Creative Genius",
        description:
          "You love making beautiful things and thinking outside the box!",
        icon: "fa-solid fa-palette",
        color: "text-[#FF4081]",
        bgColor: "bg-[#FF4081]/20",
      });
    }

    if (
      lowerAnalysis.includes("help") ||
      lowerAnalysis.includes("social") ||
      lowerAnalysis.includes("team")
    ) {
      superpowers.push({
        title: "Team Helper",
        description:
          "You're amazing at working with others and helping friends!",
        icon: "fa-solid fa-users",
        color: "text-[#4CAF50]",
        bgColor: "bg-[#4CAF50]/20",
      });
    }

    if (
      lowerAnalysis.includes("problem") ||
      lowerAnalysis.includes("puzzle") ||
      lowerAnalysis.includes("analytic")
    ) {
      superpowers.push({
        title: "Problem Solver",
        description: "You never give up and always find clever solutions!",
        icon: "fa-solid fa-lightbulb",
        color: "text-[#1A73E8]",
        bgColor: "bg-[#1A73E8]/20",
      });
    }

    // Default superpowers if none detected
    if (superpowers.length === 0) {
      superpowers.push(
        {
          title: "Focused Achiever",
          description:
            "You excel at completing tasks with attention to detail!",
          icon: "fa-solid fa-target",
          color: "text-[#FF9800]",
          bgColor: "bg-[#FF9800]/20",
        },
        {
          title: "Reliable Worker",
          description: "Others can count on you to get things done well!",
          icon: "fa-solid fa-shield-heart",
          color: "text-[#9C27B0]",
          bgColor: "bg-[#9C27B0]/20",
        },
        {
          title: "Detail Master",
          description: "You notice the important details others might miss!",
          icon: "fa-solid fa-search",
          color: "text-[#00BCD4]",
          bgColor: "bg-[#00BCD4]/20",
        }
      );
    }

    return superpowers.slice(0, 3); // Limit to 3 superpowers
  };

  const superpowers = generateSuperpowers(analysis, answers);

  // Generate profile title based on analysis
  const generateProfileTitle = (analysisText) => {
    const lowerAnalysis = analysisText.toLowerCase();

    if (lowerAnalysis.includes("creative") && lowerAnalysis.includes("help")) {
      return "Creative Helper with Amazing Potential ✨";
    } else if (
      lowerAnalysis.includes("detail") ||
      lowerAnalysis.includes("organized")
    ) {
      return "Detail-Oriented Achiever ✨";
    } else if (
      lowerAnalysis.includes("practical") ||
      lowerAnalysis.includes("structured")
    ) {
      return "Practical Problem Solver ✨";
    } else {
      return "Amazing Learner with Unique Strengths ✨";
    }
  };

  const profileTitle = generateProfileTitle(analysis);

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

              <h1 className="text-3xl md:text-4xl font-bold text-[#212121] mb-4">
                Amazing Work {user?.firstName}!
                <span className="text-[#1A73E8]">🎉</span>
              </h1>
              <p className="md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                You've completed the quiz! Here's what we discovered about your
                unique strengths and interests.
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
                  {profileTitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {superpowers.map((superpower, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 text-center shadow-sm"
                  >
                    <div
                      className={`w-16 h-16 ${superpower.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <i
                        className={`${superpower.icon} ${superpower.color} text-2xl`}
                      ></i>
                    </div>
                    <h3 className="text-lg font-semibold text-[#212121] mb-2">
                      {superpower.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {superpower.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Analysis */}
            <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#212121] mb-6 flex items-center gap-3">
                <i className="fa-solid fa-chart-line text-[#1A73E8]"></i>
                Your Personal Analysis
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-[#212121] mb-3 flex items-center gap-2">
                    <i className="fa-solid fa-user text-[#1A73E8]"></i>
                    About You
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {parsedAnalysis.overview}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-[#212121] mb-3 flex items-center gap-2">
                    <i className="fa-solid fa-briefcase text-[#4CAF50]"></i>
                    Career Suggestions
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {parsedAnalysis.careers}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-[#212121] mb-3 flex items-center gap-2">
                    <i className="fa-solid fa-graduation-cap text-[#9C27B0]"></i>
                    Learning Path
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {parsedAnalysis.education}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-[#212121] mb-3 flex items-center gap-2">
                    <i className="fa-solid fa-rocket text-[#FF9800]"></i>
                    Next Steps
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {parsedAnalysis.nextSteps}
                  </p>
                </div>
              </div>
            </div>

            {/* Response Summary */}
            <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#212121] mb-6 flex items-center gap-3">
                <i className="fa-solid fa-list-check text-[#1A73E8]"></i>
                Your Quiz Responses ({answers.length} questions)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {answers.slice(0, 10).map((item, index) => (
                  <div key={index} className="bg-[#F5F7FA] rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#212121] font-medium text-sm">
                        Question {item.questionIndex + 1}
                      </span>
                      <span className="text-[#1A73E8] text-xs">
                        Age {ageRange}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="fa-solid fa-comment text-[#4CAF50]"></i>
                      <span className="text-gray-700 text-sm">
                        {item.answer}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {answers.length > 10 && (
                <div className="text-center mt-4">
                  <p className="text-gray-500 text-sm">
                    Showing first 10 of {answers.length} responses
                  </p>
                </div>
              )}
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
                    Get Career Recommendations
                  </h3>
                  <p className="text-blue-100 mb-6 text-sm leading-relaxed text-center">
                    Let our AI suggest learning paths and career ideas based on
                    your responses!
                  </p>

                  <Link
                    to="/career-recommendations"
                    state={{ quizId, user }}
                    className="w-full bg-white text-[#1A73E8] rounded-full py-3 px-6 font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <i className="fa-solid fa-sparkles"></i>
                    Get Recommendations
                  </Link>
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

                  <Link
                    to="/ai-advisor"
                    state={{ analysis, answers, quizId, ageRange }}
                    className="w-full bg-white text-[#4CAF50] rounded-full py-3 px-6 font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <i className="fa-solid fa-comment-dots"></i>
                    Start Chatting
                  </Link>
                </div>
              </div>
            </div>

            {/* Achievement Badge */}
            <div className="text-center mt-12">
              <Link
                to="/home"
                className="inline-flex items-center gap-4 bg-gradient-to-r from-[#FFC107] to-[#FF9800] text-white rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <i className="fa-solid fa-medal text-2xl animate-bounce"></i>
                <div>
                  <p className="font-bold text-lg">Achievement Unlocked!</p>
                  <p className="text-sm opacity-90">Continue Learning</p>
                </div>
                <i className="fa-solid fa-star text-2xl animate-spin"></i>
              </Link>
            </div>

            {/* Share Results */}
            <div className="bg-white rounded-2xl p-6 mt-8 shadow-lg">
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#212121] mb-4">
                  Share Your Results! 🌟
                </h3>
                <p className="text-gray-600 mb-6">
                  Let your friends and family know about your amazing
                  discoveries!
                </p>

                <div className="flex justify-center gap-4 flex-wrap">
                  <button className="bg-[#1A73E8] text-white rounded-full px-6 py-2 text-sm hover:bg-[#1557B0] transition-all flex items-center gap-2">
                    <i className="fa-solid fa-share"></i>
                    Share Results
                  </button>
                  <button className="bg-[#4CAF50] text-white rounded-full px-6 py-2 text-sm hover:bg-[#388E3C] transition-all flex items-center gap-2">
                    <i className="fa-solid fa-download"></i>
                    Save Report
                  </button>
                  <Link
                    to="/quizHome"
                    className="bg-[#FF4081] text-white rounded-full px-6 py-2 text-sm hover:bg-[#E91E63] transition-all flex items-center gap-2"
                  >
                    <i className="fa-solid fa-redo"></i>
                    Retake Quiz
                  </Link>
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
