import React from "react";
import { PageMetadata } from "../components/PageMetadata";
import { Star, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Community = () => {
  const navigate = useNavigate();

  const handleCommunityClick = (communityId) => {
    navigate(`/community/${communityId}`);
  };

  return (
    <>
      <PageMetadata
        title="Community | SkillSeed"
        description="Connect with friends, share achievements, and learn together in amazing communities"
      />
      <main className="bg-[#F5F7FA] min-h-screen">
        {/* Main Content */}
        <div className="container mx-auto px-6 py-8">
          {/* Hero Section */}
          <section
            id="community-hero"
            className="relative bg-gradient-to-br from-[#1A73E8]/10 via-[#FFC107]/10 to-[#FF4081]/10 rounded-3xl p-8 mb-8 overflow-hidden h-[300px] flex items-center"
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
            <div
              className="absolute top-20 right-1/3 w-6 h-6 bg-[#9C27B0]/20 rounded-full animate-bounce"
              style={{ animationDelay: "1.2s" }}
            ></div>
            <div
              className="absolute top-6 left-20 w-14 h-14 bg-[#FF5722]/20 rounded-full animate-pulse"
              style={{ animationDelay: "0.9s" }}
            ></div>

            <div className="text-center w-full z-10">
              <h1 className="text-4xl font-bold text-[#212121] mb-4">
                🌟 Join Amazing Communities! 🎉
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Connect with friends, share your achievements, and learn
                together!
              </p>
              <div className="flex justify-center items-center gap-4">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                  alt="Emma"
                  className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                />
                <div className="text-3xl">🤝</div>
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                  alt="Sarah"
                  className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                />
                <div className="text-3xl">💫</div>
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg"
                  alt="Mia"
                  className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                />
              </div>
            </div>
          </section>

          {/* Featured Communities */}
          <section id="featured-communities" className="mb-8">
            <h2 className="text-2xl font-bold text-[#212121] mb-6 flex items-center gap-3">
              <Star className="w-6 h-6 text-[#FFC107]" />
              Featured Communities
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Science Explorers */}
              <div
                id="science-community"
                className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer community-card"
                onClick={() => handleCommunityClick("science-explorers")}
              >
                <div className="relative bg-gradient-to-br from-[#4CAF50]/20 to-[#4CAF50]/10 p-6 h-32">
                  <div className="absolute top-2 right-2 w-6 h-6 bg-[#4CAF50]/30 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-2 left-4 w-4 h-4 bg-[#4CAF50]/30 rounded-full animate-bounce"></div>
                  <div className="text-4xl mb-2">🔬</div>
                  <h3 className="text-xl font-bold text-[#212121]">
                    Science Explorers
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Discover amazing experiments, share cool science facts, and
                    explore the wonders of our world together!
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex -space-x-2">
                      <img
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                        alt="Member"
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                      <img
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                        alt="Member"
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                      <img
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                        alt="Member"
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                      <div className="w-8 h-8 bg-[#4CAF50] rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                        +24
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">27 members</span>
                  </div>
                  <button className="w-full bg-[#4CAF50] text-white py-3 rounded-full font-semibold hover:bg-[#45a049] transition-colors">
                    Join Community 🚀
                  </button>
                </div>
              </div>

              {/* Art & Creativity */}
              <div
                id="art-community"
                className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer community-card"
                onClick={() => handleCommunityClick("art-creativity")}
              >
                <div className="relative bg-gradient-to-br from-[#FF4081]/20 to-[#FF4081]/10 p-6 h-32">
                  <div className="absolute top-2 right-2 w-6 h-6 bg-[#FF4081]/30 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-2 left-4 w-4 h-4 bg-[#FF4081]/30 rounded-full animate-bounce"></div>
                  <div className="text-4xl mb-2">🎨</div>
                  <h3 className="text-xl font-bold text-[#212121]">
                    Art & Creativity
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Share your artwork, learn new drawing techniques, and get
                    inspired by amazing creative projects!
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex -space-x-2">
                      <img
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                        alt="Member"
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                      <img
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg"
                        alt="Member"
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                      <img
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg"
                        alt="Member"
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                      <div className="w-8 h-8 bg-[#FF4081] rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                        +18
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">21 members</span>
                  </div>
                  <button className="w-full bg-[#FF4081] text-white py-3 rounded-full font-semibold hover:bg-[#e91e63] transition-colors">
                    Join Community 🎨
                  </button>
                </div>
              </div>

              {/* Tech Wizards */}
              <div
                id="tech-community"
                className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer community-card"
                onClick={() => handleCommunityClick("tech-wizards")}
              >
                <div className="relative bg-gradient-to-br from-[#1A73E8]/20 to-[#1A73E8]/10 p-6 h-32">
                  <div className="absolute top-2 right-2 w-6 h-6 bg-[#1A73E8]/30 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-2 left-4 w-4 h-4 bg-[#1A73E8]/30 rounded-full animate-bounce"></div>
                  <div className="text-4xl mb-2">💻</div>
                  <h3 className="text-xl font-bold text-[#212121]">
                    Tech Wizards
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Learn coding, build cool apps, and discover the latest
                    technology trends with fellow young developers!
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex -space-x-2">
                      <img
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg"
                        alt="Member"
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                      <img
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-9.jpg"
                        alt="Member"
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                      <img
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                        alt="Member"
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                      <div className="w-8 h-8 bg-[#1A73E8] rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                        +32
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">35 members</span>
                  </div>
                  <button className="w-full bg-[#1A73E8] text-white py-3 rounded-full font-semibold hover:bg-[#1557b0] transition-colors">
                    Join Community 💻
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* All Communities */}
          <section id="all-communities" className="mb-8">
            <h2 className="text-2xl font-bold text-[#212121] mb-6 flex items-center gap-3">
              <Users className="w-6 h-6 text-[#FFC107]" />
              All Communities
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Reading Club */}
              <div
                id="reading-community"
                className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer community-card"
              >
                <div className="relative bg-gradient-to-br from-[#9C27B0]/20 to-[#9C27B0]/10 p-4 h-24">
                  <div className="absolute top-1 right-1 w-4 h-4 bg-[#9C27B0]/30 rounded-full animate-pulse"></div>
                  <div className="text-3xl">📚</div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#212121] mb-2">
                    Reading Club
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Share favorite books and stories!
                  </p>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex -space-x-1">
                      <img
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                        alt="Member"
                        className="w-6 h-6 rounded-full border border-white"
                      />
                      <img
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                        alt="Member"
                        className="w-6 h-6 rounded-full border border-white"
                      />
                      <div className="w-6 h-6 bg-[#9C27B0] rounded-full border border-white flex items-center justify-center text-white text-xs">
                        +8
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">10 members</span>
                  </div>
                  <button className="w-full bg-[#9C27B0] text-white py-2 rounded-full text-sm font-semibold hover:bg-[#7b1fa2] transition-colors">
                    Join 📖
                  </button>
                </div>
              </div>

              {/* Sports Champions */}
              <div
                id="sports-community"
                className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer community-card"
              >
                <div className="relative bg-gradient-to-br from-[#FF5722]/20 to-[#FF5722]/10 p-4 h-24">
                  <div className="absolute top-1 right-1 w-4 h-4 bg-[#FF5722]/30 rounded-full animate-pulse"></div>
                  <div className="text-3xl">⚽</div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#212121] mb-2">
                    Sports Champions
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Share sports achievements and tips!
                  </p>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex -space-x-1">
                      <img
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                        alt="Member"
                        className="w-6 h-6 rounded-full border border-white"
                      />
                      <img
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg"
                        alt="Member"
                        className="w-6 h-6 rounded-full border border-white"
                      />
                      <div className="w-6 h-6 bg-[#FF5722] rounded-full border border-white flex items-center justify-center text-white text-xs">
                        +12
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">14 members</span>
                  </div>
                  <button className="w-full bg-[#FF5722] text-white py-2 rounded-full text-sm font-semibold hover:bg-[#e64a19] transition-colors">
                    Join ⚽
                  </button>
                </div>
              </div>

              {/* Music Makers */}
              <div
                id="music-community"
                className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer community-card"
              >
                <div className="relative bg-gradient-to-br from-[#FFC107]/20 to-[#FFC107]/10 p-4 h-24">
                  <div className="absolute top-1 right-1 w-4 h-4 bg-[#FFC107]/30 rounded-full animate-pulse"></div>
                  <div className="text-3xl">🎵</div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#212121] mb-2">
                    Music Makers
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Create and share your music!
                  </p>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex -space-x-1">
                      <img
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg"
                        alt="Member"
                        className="w-6 h-6 rounded-full border border-white"
                      />
                      <img
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                        alt="Member"
                        className="w-6 h-6 rounded-full border border-white"
                      />
                      <div className="w-6 h-6 bg-[#FFC107] rounded-full border border-white flex items-center justify-center text-white text-xs">
                        +6
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">8 members</span>
                  </div>
                  <button className="w-full bg-[#FFC107] text-white py-2 rounded-full text-sm font-semibold hover:bg-[#ffb300] transition-colors">
                    Join 🎵
                  </button>
                </div>
              </div>

              {/* Young Entrepreneurs */}
              <div
                id="entrepreneur-community"
                className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer community-card"
              >
                <div className="relative bg-gradient-to-br from-[#607D8B]/20 to-[#607D8B]/10 p-4 h-24">
                  <div className="absolute top-1 right-1 w-4 h-4 bg-[#607D8B]/30 rounded-full animate-pulse"></div>
                  <div className="text-3xl">💡</div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#212121] mb-2">
                    Young Entrepreneurs
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Share business ideas and dreams!
                  </p>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex -space-x-1">
                      <img
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg"
                        alt="Member"
                        className="w-6 h-6 rounded-full border border-white"
                      />
                      <img
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg"
                        alt="Member"
                        className="w-6 h-6 rounded-full border border-white"
                      />
                      <div className="w-6 h-6 bg-[#607D8B] rounded-full border border-white flex items-center justify-center text-white text-xs">
                        +5
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">7 members</span>
                  </div>
                  <button className="w-full bg-[#607D8B] text-white py-2 rounded-full text-sm font-semibold hover:bg-[#546e7a] transition-colors">
                    Join 💡
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Community;
