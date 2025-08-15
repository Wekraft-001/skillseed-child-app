import React from "react";
import { PageMetadata } from "../components/PageMetadata";
import {
  Crown,
  Plus,
  CloudUpload,
  Rocket,
  FlaskConical,
  Palette,
  BookOpen,
  Video,
  Gamepad,
  PenLine,
  Book,
  Vibrate,
  VideoIcon,
} from "lucide-react";

const Home = () => {
  return (
    <>
      <PageMetadata
        title="Dashboard | SkillSeed"
        description="Your SkillSeed dashboard - Track your learning progress and access your courses"
      />

      {/* Dashboard Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar - My Garden */}
          <div id="my-garden-sidebar" className="lg:col-span-3 space-y-6">
            {/* Profile Card */}
            <div
              id="profile-card"
              className="bg-white rounded-2xl p-6 shadow-sm text-center relative overflow-hidden"
            >
              {/* Decorative Elements */}
              <div className="absolute -top-8 right-8 w-16 h-16 bg-[#FFC107]/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute top-12 left-4 w-10 h-10 bg-[#4CAF50]/20 rounded-full blur-lg animate-pulse"></div>
              <div className="absolute bottom-8 right-4 w-12 h-12 bg-[#FF4081]/20 rounded-full blur-lg animate-pulse"></div>

              <div className="relative inline-block">
                <div className="w-28 h-28 rounded-full mx-auto relative">
                  {/* Animated Ring */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFC107]/40 via-[#FF4081]/40 to-[#4CAF50]/40 rounded-full animate-pulse"></div>
                  {/* Floating Bubbles */}
                  <div className="absolute -top-4 -right-2 w-6 h-6 bg-[#1A73E8]/30 rounded-full animate-bounce"></div>
                  <div
                    className="absolute -bottom-2 -left-3 w-4 h-4 bg-[#FFC107]/30 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="absolute top-2 -left-4 w-5 h-5 bg-[#FF4081]/30 rounded-full animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>

                  <img
                    className="w-full h-full rounded-full border-4 border-[#FFC107] object-cover"
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/83dc32b293-ed23666f72dd44ce7bc8.png"
                    alt="happy smiling kid girl avatar with pigtails, cute cartoon style, pastel colors, white background"
                  />
                </div>
                {/* Achievement Badge */}
                <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-[#FFC107] to-[#FF4081] rounded-full p-2.5 shadow-lg">
                  <Crown size={16} className="text-white" />
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-4 text-[#212121]">
                Emily's Garden
              </h3>
              <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
                <span className="text-[#FFC107]">✨</span>
                Super Explorer Level 5
              </p>

              <div className="mt-6 w-full grid grid-cols-2 gap-4">
                <div className="bg-[#1A73E8]/5 rounded-xl text-center flex flex-col items-center justify-center px-3 py-1">
                  <div className="text-2xl font-bold text-[#1A73E8]">12</div>
                  <div className="text-xs text-gray-500">Magic Badges</div>
                </div>
                {/* <div className="bg-[#FF4081]/5 rounded-xl text-center flex flex-col items-center justify-center px-3">
                  <div className="text-2xl font-bold text-[#FF4081]">89</div>
                  <div className="text-xs text-gray-500">Adventures</div>
                </div> */}
                <div className="bg-[#FFC107]/5 rounded-xl flex flex-col items-center justify-center px-3 py-1">
                  <div className="text-2xl font-bold text-[#FFC107]">156</div>
                  <div className="text-xs text-gray-500">Stars</div>
                </div>
              </div>
            </div>

            {/* My Garden Section */}
            <div
              id="my-garden-section"
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-[#212121]">My Projects</h3>
                <button className="w-8 h-8 rounded-full bg-[#FFC107]/10 flex items-center justify-center">
                  <Plus size={16} className="text-[#FFC107]" />
                </button>
              </div>

              <div className="space-y-4">
                {/* Project Showcase */}
                <div className="border border-gray-100 rounded-xl p-4">
                  <div className="flex items-center gap-4 mb-3">
                    <img
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/de43d241d9-f6224617d46087a56283.png"
                      alt="Project"
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div>
                      <h4 className="font-medium text-[#212121]">
                        My Art Project
                      </h4>
                      <p className="text-sm text-gray-500">
                        Completed yesterday
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                      alt="Mentor"
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-xs text-gray-500">
                      Reviewed by Mr. John
                    </span>
                  </div>
                </div>

                {/* Upload Section */}
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center">
                  <CloudUpload
                    size={24}
                    className="text-[#1A73E8] mx-auto mb-2"
                  />
                  <p className="text-sm text-gray-500">
                    Upload your latest project
                  </p>
                  <button className="mt-3 px-4 py-2 bg-[#1A73E8] text-white rounded-full text-sm">
                    Choose File
                  </button>
                </div>
              </div>
            </div>

            {/* Badges Showcase */}
            <div
              id="badges-showcase"
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-[#212121]">Recent Badges</h3>
                <button className="text-sm text-[#1A73E8] hover:underline">
                  View All
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="badge-item group relative cursor-pointer">
                  <div className="w-14 h-14 rounded-full bg-[#FFC107]/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <Rocket size={24} className="text-[#FFC107]" />
                  </div>
                  <p className="text-xs text-center mt-2 text-gray-600">
                    Space Explorer
                  </p>
                </div>
                <div className="badge-item group relative cursor-pointer">
                  <div className="w-14 h-14 rounded-full bg-[#4CAF50]/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <FlaskConical size={24} className="text-[#4CAF50]" />
                  </div>
                  <p className="text-xs text-center mt-2 text-gray-600">
                    Science Whiz
                  </p>
                </div>
                <div className="badge-item group relative cursor-pointer">
                  <div className="w-14 h-14 rounded-full bg-[#FF4081]/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <Palette size={24} className="text-[#FF4081]" />
                  </div>
                  <p className="text-xs text-center mt-2 text-gray-600">
                    Art Master
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div id="main-content" className="lg:col-span-9 space-y-6">
            {/* Learning Progress */}
            <div
              id="learning-progress"
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-[#212121]">
                  My Learning Journey
                </h2>
                <div className="flex items-center gap-2">
                  <span className="text-[#FF4081]">🔥</span>
                  <span className="text-sm font-medium">5 Day Streak!</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#1A73E8]/5 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#1A73E8]/10 flex items-center justify-center">
                        <BookOpen size={20} className="text-[#1A73E8]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#212121]">Reading</h4>
                        <p className="text-sm text-gray-500">
                          15 books completed
                        </p>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full border-4 border-[#1A73E8] flex items-center justify-center">
                      <span className="text-sm font-bold text-[#1A73E8]">
                        85%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#4CAF50]/5 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#4CAF50]/10 flex items-center justify-center">
                        <VideoIcon size={20} className="text-[#4CAF50]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#212121]">Videos</h4>
                        <p className="text-sm text-gray-500">
                          8 videos watched
                        </p>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full border-4 border-[#4CAF50] flex items-center justify-center">
                      <span className="text-sm font-bold text-[#4CAF50]">
                        92%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#FFC107]/5 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#FFC107]/10 flex items-center justify-center">
                        <div className="text-[#FFC107]">🧩</div>
                      </div>
                      <div>
                        <h4 className="font-medium text-[#212121]">
                          Problem Solving
                        </h4>
                        <p className="text-sm text-gray-500">
                          12 projects completed
                        </p>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full border-4 border-[#FFC107] flex items-center justify-center">
                      <span className="text-sm font-bold text-[#FFC107]">
                        78%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Feed */}
            <div id="learning-feed" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-[#212121]">
                  Recommended for You
                </h2>
                <div className="flex gap-2">
                  <button className="px-4 py-2 rounded-full bg-white text-sm font-medium text-[#1A73E8] hover:bg-[#1A73E8] hover:text-white transition-colors">
                    <Video size={16} className="inline mr-2" />
                    Videos
                  </button>
                  <button className="px-4 py-2 rounded-full bg-white text-sm font-medium text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white transition-colors">
                    <Book size={16} className="inline mr-2" />
                    Books
                  </button>
                  <button className="px-4 py-2 rounded-full bg-white text-sm font-medium text-[#FF4081] hover:bg-[#FF4081] hover:text-white transition-colors">
                    <PenLine size={16} className="inline mr-2" />
                    Projects
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Video Card */}
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden group cursor-pointer">
                  <div className="relative">
                    <img
                      className="w-full h-48 object-cover"
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/b3b163a882-8c9cd26389bac7647515.png"
                      alt="educational video thumbnail showing space exploration for kids with colorful planets and astronauts, cartoon style"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-4 right-4 bg-[#1A73E8] rounded-full w-10 h-10 flex items-center justify-center transform translate-y-12 group-hover:translate-y-0 transition-transform">
                      <div className="text-white">▶️</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-white bg-[#1A73E8] px-2 py-1 rounded-full">
                        Science
                      </span>
                      <span className="text-xs text-gray-500">15 mins</span>
                    </div>
                    <h3 className="font-medium text-[#212121] mb-1">
                      Space Adventure: Journey to the Stars
                    </h3>
                    <p className="text-sm text-gray-500">
                      Learn about planets, stars, and space exploration!
                    </p>
                  </div>
                </div>

                {/* Game Card */}
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden group cursor-pointer">
                  <div className="relative">
                    <img
                      className="w-full h-48 object-cover"
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/4afcdfe405-2c6bf681b5e3e4f3a72c.png"
                      alt="educational math game interface for kids with cute characters and numbers, cartoon style"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-4 right-4 bg-[#4CAF50] rounded-full w-10 h-10 flex items-center justify-center transform translate-y-12 group-hover:translate-y-0 transition-transform">
                      <Gamepad size={20} className="text-white" />
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-white bg-[#4CAF50] px-2 py-1 rounded-full">
                        Math
                      </span>
                      <span className="text-xs text-gray-500">Interactive</span>
                    </div>
                    <h3 className="font-medium text-[#212121] mb-1">
                      Number Ninja: Math Challenge
                    </h3>
                    <p className="text-sm text-gray-500">
                      Practice math skills with fun mini-games!
                    </p>
                  </div>
                </div>

                {/* Project Card */}
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden group cursor-pointer">
                  <div className="relative">
                    <img
                      className="w-full h-48 object-cover"
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/de43d241d9-f6224617d46087a56283.png"
                      alt="kids art and craft project materials with colorful papers, scissors, and glue, flat lay style"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute bottom-4 right-4 bg-[#FF4081] rounded-full w-10 h-10 flex items-center justify-center transform translate-y-12 group-hover:translate-y-0 transition-transform">
                      <PenLine size={20} className="text-white" />
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-white bg-[#FF4081] px-2 py-1 rounded-full">
                        Art
                      </span>
                      <span className="text-xs text-gray-500">DIY Project</span>
                    </div>
                    <h3 className="font-medium text-[#212121] mb-1">
                      Creative Paper Crafts
                    </h3>
                    <p className="text-sm text-gray-500">
                      Make amazing art with simple materials!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
