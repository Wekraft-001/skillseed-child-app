import React from "react";
import {
  BookOpen,
  FlaskRound,
  Gamepad,
  Heart,
  Laptop,
  Music,
  Palette,
  PaletteIcon,
  Plus,
  SendIcon,
  ShieldPlus,
  SmileIcon,
  Star,
  Users,
} from "lucide-react";

const Community = () => {
  return (
    <div className="bg-[#F5F7FA] ">
      <div className="container mx-auto px-6 py-8">
        {/* Community Hub */}
        {/* Welcome Section */}
        <div id="welcome-section" className="text-center mb-8 relative">
          <div className="absolute -top-4 left-1/4 w-16 h-16 bg-[#FFC107]/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-2 right-1/3 w-12 h-12 bg-[#FF4081]/20 rounded-full blur-lg animate-bounce"></div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#212121] mb-4">
            Welcome to Kids Community!
            <span className="text-[#FFC107]">🌟</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Connect with friends who love the same things you do! Share ideas,
            learn together, and have fun!
          </p>

          <button className="bg-[#1A73E8] text-white rounded-full px-8 py-3 font-semibold hover:bg-[#1557B0] transition-all transform hover:scale-105 flex items-center gap-2 mx-auto">
            <Plus className="w-4 h-4" />
            Join a Community
          </button>
        </div>

        {/* Interest Categories */}
        <div id="categories-section" className="mb-8">
          <h2 className="text-2xl font-bold text-[#212121] mb-6 flex items-center gap-3">
            <Heart className="w-5 h-5 text-[#FF4081] fill-[#FF4081]" />
            Find Your Interests
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all cursor-pointer group">
              <div className="w-16 h-16 bg-[#FF4081]/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Palette className="w-7 h-7 text-[#FF4081] " />
              </div>
              <h3 className="font-semibold text-[#212121] text-sm">
                Arts &amp; Crafts
              </h3>
              <p className="text-xs text-gray-500 mt-1">124 kids</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all cursor-pointer group">
              <div className="w-16 h-16 bg-[#1A73E8]/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <FlaskRound className="w-7 h-7 text-[#1A73E8] fill-[#1A73E8]" />
              </div>
              <h3 className="font-semibold text-[#212121] text-sm">
                Science Fun
              </h3>
              <p className="text-xs text-gray-500 mt-1">89 kids</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all cursor-pointer group">
              <div className="w-16 h-16 bg-[#4CAF50]/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Laptop className="w-7 h-7 text-[#4CAF50]" />
              </div>
              <h3 className="font-semibold text-[#212121] text-sm">
                Tech &amp; Coding
              </h3>
              <p className="text-xs text-gray-500 mt-1">156 kids</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all cursor-pointer group">
              <div className="w-16 h-16 bg-[#FFC107]/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Music className="w-7 h-7 text-[#FFC107]" />
              </div>
              <h3 className="font-semibold text-[#212121] text-sm">
                Music &amp; Dance
              </h3>
              <p className="text-xs text-gray-500 mt-1">97 kids</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all cursor-pointer group">
              <div className="w-16 h-16 bg-[#9C27B0]/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7 text-[#9C27B0]" />
              </div>
              <h3 className="font-semibold text-[#212121] text-sm">
                Reading Club
              </h3>
              <p className="text-xs text-gray-500 mt-1">203 kids</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all cursor-pointer group">
              <div className="w-16 h-16 bg-[#FF9800]/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Gamepad className="w-7 h-7 text-[#FF9800]" />
              </div>
              <h3 className="font-semibold text-[#212121] text-sm">
                Games &amp; Fun
              </h3>
              <p className="text-xs text-gray-500 mt-1">178 kids</p>
            </div>
          </div>
        </div>

        {/* Active Communities */}
        <div
          id="active-communities"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Main Chat Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#FF4081] to-[#E91E63] p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <PaletteIcon className="w-6 h-6" />
                      Arts &amp; Crafts Club
                    </h3>
                    <p className="text-pink-100 text-sm">
                      Share your amazing creations!
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">124 online</span>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div
                id="chat-messages"
                className="h-96 overflow-y-auto p-6 space-y-4"
              >
                <div className="flex items-start gap-3">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                    alt="Maya"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="bg-[#F5F7FA] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                    <p className="text-[#1A73E8] font-semibold text-sm">Maya</p>
                    <p className="text-[#212121] text-sm">
                      Look at my rainbow painting! 🌈
                    </p>
                    <div className="mt-2 bg-white rounded-xl p-2">
                      <img
                        className="w-full h-20 rounded-lg object-cover"
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/184e1ad47e-9501565c763e5de94bea.png"
                        alt="colorful rainbow painting by child, watercolor style, bright colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                    alt="Alex"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="bg-[#F5F7FA] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                    <p className="text-[#4CAF50] font-semibold text-sm">Alex</p>
                    <p className="text-[#212121] text-sm">
                      Wow Maya! That's so beautiful! I love the colors! ✨
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-[#1A73E8] text-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                    <p className="text-blue-100 font-semibold text-sm">You</p>
                    <p className="text-white text-sm">
                      Amazing work Maya! Want to try making one together? 🎨
                    </p>
                  </div>
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                    alt="You"
                    className="w-8 h-8 rounded-full"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg"
                    alt="Sofia"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="bg-[#F5F7FA] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                    <p className="text-[#9C27B0] font-semibold text-sm">
                      Sofia
                    </p>
                    <p className="text-[#212121] text-sm">
                      I just finished my clay elephant! 🐘
                    </p>
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div className="border-t p-4">
                <div className="flex items-center gap-3">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      placeholder="Type your message... 😊"
                      className="w-full bg-[#F5F7FA] rounded-full px-4 py-3 text-[#212121] focus:outline-none focus:ring-2 focus:ring-[#1A73E8]"
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#FFC107] transition-colors">
                      <SmileIcon className="w-6 h-6" />
                    </button>
                  </div>
                  <button className="bg-[#1A73E8] text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#1557B0] transition-colors">
                    <SendIcon className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Online Friends */}
            <div
              id="online-friends"
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-bold text-[#212121] mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-[#4CAF50]" />
                Friends Online
              </h3>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#F5F7FA] cursor-pointer">
                  <div className="relative">
                    <img
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                      alt="Maya"
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#4CAF50] rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <p className="text-[#212121] font-medium text-sm">Maya</p>
                    <p className="text-gray-500 text-xs">Creating art 🎨</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#F5F7FA] cursor-pointer">
                  <div className="relative">
                    <img
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                      alt="Alex"
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#4CAF50] rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <p className="text-[#212121] font-medium text-sm">Alex</p>
                    <p className="text-gray-500 text-xs">Science explorer 🔬</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#F5F7FA] cursor-pointer">
                  <div className="relative">
                    <img
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg"
                      alt="Sofia"
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#FFC107] rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <p className="text-[#212121] font-medium text-sm">Sofia</p>
                    <p className="text-gray-500 text-xs">
                      Away - Clay crafting
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Projects */}
            <div
              id="recent-projects"
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-bold text-[#212121] mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-[#FFC107]" />
                Amazing Projects
              </h3>

              <div className="space-y-4">
                <div className="bg-[#F5F7FA] rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                      alt="Leo"
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-[#212121] font-medium text-sm">
                      Leo
                    </span>
                  </div>
                  <img
                    className="w-full h-16 rounded-lg object-cover mb-2"
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/5b1d2dc97d-bae87a88b1f1b5f42895.png"
                    alt="robot drawing by child, colorful markers, simple design"
                  />
                  <p className="text-xs text-gray-600">My robot friend! 🤖</p>
                </div>

                <div className="bg-[#F5F7FA] rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg"
                      alt="Zara"
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-[#212121] font-medium text-sm">
                      Zara
                    </span>
                  </div>
                  <img
                    className="w-full h-16 rounded-lg object-cover mb-2"
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/552ca8c292-16e3bd4a570c024ad0c5.png"
                    alt="butterfly craft made with paper, colorful wings, child artwork"
                  />
                  <p className="text-xs text-gray-600">Paper butterfly! 🦋</p>
                </div>
              </div>
            </div>

            {/* Safety Reminder */}
            <div
              id="safety-reminder"
              className="bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] rounded-2xl p-6 text-white"
            >
              <div className="text-center flex flex-col items-center">
                <ShieldPlus className="w-7 h-7 text-3xl mb-3" />
                <h3 className="font-bold mb-2">Stay Safe!</h3>
                <p className="text-green-100 text-sm mb-3">
                  Remember to be kind and never share personal information!
                </p>
                <button className="bg-white text-[#4CAF50] rounded-full px-4 py-2 text-sm font-semibold hover:bg-gray-50 transition-colors">
                  Safety Tips
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
