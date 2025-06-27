import React from "react";

const AgeSelection = ({ selectedAge, onAgeSelect, onContinue }) => {
  const ageGroups = [
    {
      range: "6-8",
      title: "Ages 6 - 8",
      subtitle: "Early Explorers 🌟",
      description:
        "Fun questions with colorful pictures and simple choices. Perfect for little adventurers!",
      icon: "fa-solid fa-child-reaching",
      gradient: "from-[#FFC107] to-[#FF9800]",
      hoverColor: "hover:border-[#FFC107]",
      animation: "animate-bounce",
    },
    {
      range: "9-12",
      title: "Ages 9 - 12",
      subtitle: "Budding Innovators 🚀",
      description:
        "Interactive challenges with cool animations and brain-teasing puzzles for young innovators!",
      icon: "fa-solid fa-lightbulb",
      gradient: "from-[#1A73E8] to-[#0D47A1]",
      hoverColor: "hover:border-[#1A73E8]",
      animation: "animate-pulse",
    },
    {
      range: "13-15",
      title: "Ages 13 - 15",
      subtitle: "Teen Trailblazers 🔥",
      description:
        "Deep thinking questions with real-world scenarios and future career insights!",
      icon: "fa-solid fa-brain",
      gradient: "from-[#FF4081] to-[#E91E63]",
      hoverColor: "hover:border-[#FF4081]",
      animation: "animate-ping",
    },
    {
      range: "16-17",
      title: "Ages 16 - 17",
      subtitle: "Visionary Achievers 👑",
      description:
        "Advanced assessments focusing on values, skills, and future career pathways!",
      icon: "fa-solid fa-graduation-cap",
      gradient: "from-[#4CAF50] to-[#2E7D32]",
      hoverColor: "hover:border-[#4CAF50]",
      animation: "animate-spin",
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8 relative">
          <div className="absolute -top-8 left-1/4 w-20 h-20 bg-[#FFC107]/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-4 right-1/3 w-16 h-16 bg-[#FF4081]/20 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute bottom-0 left-1/2 w-12 h-12 bg-[#1A73E8]/20 rounded-full blur-md animate-pulse"></div>

          <div className="mb-8">
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg">
              <i className="fa-solid fa-magic-wand-sparkles text-[#FFC107] text-2xl animate-spin"></i>
              <span className="text-[#212121] font-semibold">
                Let's Discover Your Superpowers!
              </span>
              <i className="fa-solid fa-sparkles text-[#FF4081] text-xl"></i>
            </div>
          </div>

          <h1 className="text-2xl md:text-5xl font-bold text-[#212121] mb-4">
            What's Your Age Range?
            <span className="text-[#1A73E8]">🎯</span>
          </h1>
          <p className="md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Choose your age group, answer these fun questions & let's find out
            what makes you special!
          </p>
        </div>

        {/* Age Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {ageGroups.map((group) => (
            <div
              key={group.range}
              className={`age-card group cursor-pointer bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-4 ${
                selectedAge === group.range
                  ? "border-[#1A73E8] bg-gradient-to-br from-blue-50 to-white"
                  : `border-transparent ${group.hoverColor}`
              }`}
              onClick={() => onAgeSelect(group.range)}
            >
              <div className="text-center relative">
                <div className="absolute -top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <i
                    className={`fa-solid fa-star text-[#FFC107] text-2xl ${group.animation}`}
                  ></i>
                </div>

                <div
                  className={`w-24 h-24 bg-gradient-to-br ${group.gradient} rounded-full mx-auto mb-6 flex items-center justify-center`}
                >
                  <i className={`${group.icon} text-white text-3xl`}></i>
                </div>

                <h3 className="text-2xl font-bold text-[#212121] mb-3">
                  {group.title}
                </h3>
                <p className="text-[#1A73E8] font-semibold text-lg mb-4">
                  {group.subtitle}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {group.description}
                </p>

                <div className="mt-6 flex justify-center gap-2">
                  <div className="w-3 h-3 bg-[#FFC107] rounded-full animate-bounce"></div>
                  <div
                    className="w-3 h-3 bg-[#FF4081] rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-3 h-3 bg-[#1A73E8] rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <button
            onClick={onContinue}
            className={`bg-gradient-to-r from-[#1A73E8] to-[#4CAF50] text-white px-12 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all ${
              !selectedAge ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!selectedAge}
          >
            <i className="fa-solid fa-rocket mr-3"></i>
            Start My Quiz Adventure!
            <i className="fa-solid fa-arrow-right ml-3"></i>
          </button>

          <div className="mt-6 flex justify-center items-center gap-4 text-gray-500">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-clock text-[#FFC107]"></i>
              <span className="text-sm">5-10 minutes</span>
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-gamepad text-[#FF4081]"></i>
              <span className="text-sm">Fun & Interactive</span>
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-trophy text-[#4CAF50]"></i>
              <span className="text-sm">Unlock Superpowers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeSelection;
