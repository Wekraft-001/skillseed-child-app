import React, { useState } from "react";
import { PageMetadata } from "../components/PageMetadata";
import AllBadgesModal from "../components/AllBadgesModal";
import {
  Trophy,
  Medal,
  Star,
  BookOpen,
  Calculator,
  Lock,
  Atom,
  Code,
  Bot,
  Users,
  MessageSquare,
  Rocket,
  Leaf,
  Calendar,
  Target,
  Gift,
} from "lucide-react";

const Achievements = () => {
  const [showAllBadgesModal, setShowAllBadgesModal] = useState(false);

  return (
    <>
      <PageMetadata
        title="Achievements | SkillSeed"
        description="View your amazing achievements and badges earned on your learning journey"
      />
      <main className="bg-[#F5F7FA] min-h-screen">
        {/* Main Content */}
        <div className="container mx-auto px-6 py-8">
          {/* Hero Section */}
          <section
            id="achievements-hero"
            className="relative bg-gradient-to-br from-[#1A73E8]/10 via-[#FFC107]/10 to-[#FF4081]/10 rounded-3xl p-8 mb-8 overflow-hidden"
          >
            {/* Floating Bubbles */}
            <div className="absolute top-4 right-8 w-16 h-16 bg-[#FFC107]/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-8 left-12 w-12 h-12 bg-[#1A73E8]/20 rounded-full animate-bounce"></div>
            <div
              className="absolute top-12 left-1/3 w-8 h-8 bg-[#FF4081]/20 rounded-full animate-bounce"
              style={{ animationDelay: "0.3s" }}
            ></div>
            <div
              className="absolute bottom-4 right-1/4 w-10 h-10 bg-[#4CAF50]/20 rounded-full animate-pulse"
              style={{ animationDelay: "0.7s" }}
            ></div>

            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-[#212121] mb-2">
                  🏆 My Amazing Achievements!
                </h1>
                <p className="text-gray-600">
                  Look at all the awesome badges you've earned on your learning
                  adventure!
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1A73E8] mb-1">
                    24
                  </div>
                  <p className="text-sm text-gray-600">Total Badges</p>
                  <div className="flex justify-center gap-1 mt-2">
                    <Medal className="w-5 h-5 text-[#FFC107]" />
                    <Medal className="w-5 h-5 text-[#FFC107]" />
                    <Medal className="w-5 h-5 text-[#FFC107]" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Badge Categories */}
          <section
            id="badge-categories"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            <div
              id="academic-badges"
              className="bg-white rounded-2xl p-6 shadow-sm relative overflow-hidden"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#1A73E8]/10 rounded-full"></div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-[#212121]">
                  📚 Academic
                </h3>
                <span className="bg-[#1A73E8]/10 text-[#1A73E8] px-3 py-1 rounded-full text-sm font-medium">
                  8 badges
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-12 h-12 bg-[#1A73E8]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Atom className="w-6 h-6 text-[#1A73E8]" />
                  </div>
                  <span className="text-xs mt-2 text-gray-600">Science</span>
                </div>
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-12 h-12 bg-[#1A73E8]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Calculator className="w-6 h-6 text-[#1A73E8]" />
                  </div>
                  <span className="text-xs mt-2 text-gray-600">Math</span>
                </div>
                <div className="flex flex-col items-center opacity-40">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Lock className="w-6 h-6 text-gray-400" />
                  </div>
                  <span className="text-xs mt-2 text-gray-400">Locked</span>
                </div>
              </div>
            </div>

            <div
              id="skill-badges"
              className="bg-white rounded-2xl p-6 shadow-sm relative overflow-hidden"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#4CAF50]/10 rounded-full"></div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-[#212121]">
                  🎯 Skills
                </h3>
                <span className="bg-[#4CAF50]/10 text-[#4CAF50] px-3 py-1 rounded-full text-sm font-medium">
                  6 badges
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-12 h-12 bg-[#4CAF50]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Code className="w-6 h-6 text-[#4CAF50]" />
                  </div>
                  <span className="text-xs mt-2 text-gray-600">Coding</span>
                </div>
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-12 h-12 bg-[#4CAF50]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Bot className="w-6 h-6 text-[#4CAF50]" />
                  </div>
                  <span className="text-xs mt-2 text-gray-600">Robotics</span>
                </div>
                <div className="flex flex-col items-center opacity-40">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Lock className="w-6 h-6 text-gray-400" />
                  </div>
                  <span className="text-xs mt-2 text-gray-400">Locked</span>
                </div>
              </div>
            </div>

            <div
              id="social-badges"
              className="bg-white rounded-2xl p-6 shadow-sm relative overflow-hidden"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#FF4081]/10 rounded-full"></div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-[#212121]">
                  🤝 Social
                </h3>
                <span className="bg-[#FF4081]/10 text-[#FF4081] px-3 py-1 rounded-full text-sm font-medium">
                  5 badges
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-12 h-12 bg-[#FF4081]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-[#FF4081]" />
                  </div>
                  <span className="text-xs mt-2 text-gray-600">Team</span>
                </div>
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-12 h-12 bg-[#FF4081]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-6 h-6 text-[#FF4081]" />
                  </div>
                  <span className="text-xs mt-2 text-gray-600">Chat</span>
                </div>
                <div className="flex flex-col items-center opacity-40">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Lock className="w-6 h-6 text-gray-400" />
                  </div>
                  <span className="text-xs mt-2 text-gray-400">Locked</span>
                </div>
              </div>
            </div>

            <div
              id="project-badges"
              className="bg-white rounded-2xl p-6 shadow-sm relative overflow-hidden"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#FFC107]/10 rounded-full"></div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-[#212121]">
                  🚀 Projects
                </h3>
                <span className="bg-[#FFC107]/10 text-[#FFC107] px-3 py-1 rounded-full text-sm font-medium">
                  5 badges
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-12 h-12 bg-[#FFC107]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Rocket className="w-6 h-6 text-[#FFC107]" />
                  </div>
                  <span className="text-xs mt-2 text-gray-600">Space</span>
                </div>
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-12 h-12 bg-[#FFC107]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Leaf className="w-6 h-6 text-[#FFC107]" />
                  </div>
                  <span className="text-xs mt-2 text-gray-600">Nature</span>
                </div>
                <div className="flex flex-col items-center opacity-40">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Lock className="w-6 h-6 text-gray-400" />
                  </div>
                  <span className="text-xs mt-2 text-gray-400">Locked</span>
                </div>
              </div>
            </div>
          </section>

          {/* Recent Achievements */}
          <section id="recent-achievements" className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#212121]">
                🌟 Recent Super Achievements!
              </h2>
              <button
                onClick={() => setShowAllBadgesModal(true)}
                className="bg-[#1A73E8] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1557b0] transition-colors"
              >
                View All Badges
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div
                id="achievement-1"
                className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-[#FFC107] relative overflow-hidden"
              >
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FFC107]/20 rounded-full animate-pulse"></div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#FFC107]/10 rounded-full flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-[#FFC107]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#212121]">
                        Science Explorer 🔬
                      </h4>
                      <p className="text-sm text-gray-600">
                        Completed all experiments!
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    2 days ago
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#FFC107]" />
                  <span className="text-sm font-medium text-[#1A73E8]">
                    +500 points earned!
                  </span>
                </div>
              </div>

              <div
                id="achievement-2"
                className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-[#4CAF50] relative overflow-hidden"
              >
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#4CAF50]/20 rounded-full animate-pulse"></div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#4CAF50]/10 rounded-full flex items-center justify-center">
                      <Code className="w-6 h-6 text-[#4CAF50]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#212121]">
                        Code Master 💻
                      </h4>
                      <p className="text-sm text-gray-600">
                        Built your first game!
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    1 week ago
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#FFC107]" />
                  <span className="text-sm font-medium text-[#1A73E8]">
                    +750 points earned!
                  </span>
                </div>
              </div>

              <div
                id="achievement-3"
                className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-[#FF4081] relative overflow-hidden"
              >
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FF4081]/20 rounded-full animate-pulse"></div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#FF4081]/10 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-[#FF4081]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#212121]">
                        Team Player 🤝
                      </h4>
                      <p className="text-sm text-gray-600">
                        Led an awesome group project!
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    2 weeks ago
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#FFC107]" />
                  <span className="text-sm font-medium text-[#1A73E8]">
                    +600 points earned!
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Progress and Next Goals */}
          <section
            id="achievement-progress"
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            <div
              id="progress-chart"
              className="bg-white rounded-2xl p-6 shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 w-6 h-6 bg-[#1A73E8]/20 rounded-full animate-bounce"></div>
              <h3 className="text-xl font-semibold text-[#212121] mb-6">
                🎯 Level Progress
              </h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="relative inline-block">
                    <div className="w-24 h-24 rounded-full border-8 border-[#1A73E8]/20 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1A73E8] to-[#4CAF50] flex items-center justify-center">
                        <span className="text-white font-bold text-lg">5</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-[#212121] mt-2">
                    Level 5 Explorer
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Progress to Level 6</span>
                    <span className="text-sm font-medium text-[#1A73E8]">
                      75%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-gradient-to-r from-[#1A73E8] to-[#4CAF50] rounded-full"></div>
                  </div>
                  <p className="text-sm text-gray-600 text-center">
                    250 more points to reach Level 6! 🚀
                  </p>
                </div>
              </div>
            </div>

            <div
              id="next-achievements"
              className="bg-white rounded-2xl p-6 shadow-sm relative overflow-hidden"
            >
              <div
                className="absolute top-4 right-4 w-6 h-6 bg-[#FFC107]/20 rounded-full animate-bounce"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <h3 className="text-xl font-semibold text-[#212121] mb-6">
                🎁 Almost There!
              </h3>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-[#FFC107]/30 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#FFC107]/10 rounded-full flex items-center justify-center">
                      <Target className="w-5 h-5 text-[#FFC107]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#212121]">
                        Math Wizard
                      </h4>
                      <p className="text-sm text-gray-600">
                        Complete 3 more math challenges
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-2 border-dashed border-[#4CAF50]/30 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#4CAF50]/10 rounded-full flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-[#4CAF50]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#212121]">
                        Reading Champion
                      </h4>
                      <p className="text-sm text-gray-600">
                        Read 2 more adventure stories
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-2 border-dashed border-[#FF4081]/30 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#FF4081]/10 rounded-full flex items-center justify-center">
                      <Gift className="w-5 h-5 text-[#FF4081]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#212121]">
                        Helper Hero
                      </h4>
                      <p className="text-sm text-gray-600">
                        Help 5 classmates with projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <AllBadgesModal
        isOpen={showAllBadgesModal}
        onClose={() => setShowAllBadgesModal(false)}
      />
    </>
  );
};

export default Achievements;
