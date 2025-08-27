import React, { useState } from "react";
import { PageMetadata } from "../components/PageMetadata";
import {
  ArrowLeft,
  TrendingUp,
  Users,
  Lightbulb,
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

const CommunityDetail = () => {
  const navigate = useNavigate();
  const { communityId } = useParams();
  const [hasJoined, setHasJoined] = useState(false);

  const handleBackClick = () => {
    navigate("/community");
  };

  const handleJoinCommunity = () => {
    setHasJoined(true);
    // Here you could add actual join logic, API calls, etc.
  };

  return (
    <>
      <PageMetadata
        title="Science Explorers | Community Details"
        description="Join the Science Explorers community and discover amazing experiments together"
      />
      <main className="bg-[#F5F7FA] min-h-screen">
        {/* Main Content */}
        <div className="container mx-auto px-6 py-8">
          {/* Back Button */}
          <div id="back-navigation" className="mb-6">
            <button
              onClick={handleBackClick}
              className="flex items-center gap-2 text-[#1A73E8] hover:text-[#0f5cb8] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Communities</span>
            </button>
          </div>

          {/* Community Header */}
          <section
            id="community-header"
            className="relative bg-gradient-to-br from-[#4CAF50]/20 to-[#4CAF50]/10 rounded-3xl p-8 mb-8 overflow-hidden h-[250px] flex items-center"
          >
            {/* Floating Bubbles */}
            <div className="absolute top-4 right-8 w-12 h-12 bg-[#4CAF50]/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-8 left-12 w-8 h-8 bg-[#4CAF50]/30 rounded-full animate-bounce"></div>
            <div
              className="absolute top-12 left-1/3 w-6 h-6 bg-[#4CAF50]/30 rounded-full animate-bounce"
              style={{ animationDelay: "0.3s" }}
            ></div>
            <div
              className="absolute bottom-4 right-1/4 w-10 h-10 bg-[#4CAF50]/30 rounded-full animate-pulse"
              style={{ animationDelay: "0.7s" }}
            ></div>

            <div className="flex items-center justify-between w-full z-10">
              <div className="flex items-center gap-6">
                <div className="text-6xl">🔬</div>
                <div>
                  <h1 className="text-3xl font-bold text-[#212121] mb-2">
                    Science Explorers
                  </h1>
                  <p className="text-lg text-gray-600 mb-4">
                    Discover amazing experiments, share cool science facts, and
                    explore the wonders of our world together!
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      <img
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                        alt="Member"
                        className="w-10 h-10 rounded-full border-2 border-white"
                      />
                      <img
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                        alt="Member"
                        className="w-10 h-10 rounded-full border-2 border-white"
                      />
                      <img
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                        alt="Member"
                        className="w-10 h-10 rounded-full border-2 border-white"
                      />
                      <div className="w-10 h-10 bg-[#4CAF50] rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-bold">
                        +24
                      </div>
                    </div>
                    <span className="text-[#212121] font-semibold">
                      27 amazing explorers!
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleJoinCommunity}
                disabled={hasJoined}
                className={`px-8 py-4 rounded-full font-semibold text-lg transition-colors ${
                  hasJoined
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-[#4CAF50] text-white hover:bg-[#45a049]"
                }`}
              >
                {hasJoined ? "Joined! ✓" : "Join Community 🚀"}
              </button>
            </div>
          </section>

          {/* Community Tabs */}
          <Tabs defaultValue="posts" className="mb-8">
            <div className="flex gap-8">
              {/* Left Side - Tabs */}
              <div className="w-64">
                <TabsList className="flex flex-col w-full h-auto bg-white p-2 gap-2 rounded-2xl shadow-sm">
                  <TabsTrigger
                    value="posts"
                    className="w-full justify-start px-4 py-3 font-semibold data-[state=active]:text-[#1A73E8] data-[state=active]:bg-[#1A73E8]/10 rounded-xl text-gray-600 hover:text-[#1A73E8] transition-colors"
                  >
                    📝 Posts
                  </TabsTrigger>
                  <TabsTrigger
                    value="achievements"
                    className="w-full justify-start px-4 py-3 font-semibold data-[state=active]:text-[#1A73E8] data-[state=active]:bg-[#1A73E8]/10 rounded-xl text-gray-600 hover:text-[#1A73E8] transition-colors"
                  >
                    🏆 Achievements
                  </TabsTrigger>
                  <TabsTrigger
                    value="members"
                    className="w-full justify-start px-4 py-3 font-semibold data-[state=active]:text-[#1A73E8] data-[state=active]:bg-[#1A73E8]/10 rounded-xl text-gray-600 hover:text-[#1A73E8] transition-colors"
                  >
                    👥 Members
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Right Side - Content */}
              <div className="flex-1">
                {/* Posts Tab Content */}
                <TabsContent value="posts" className="mt-0">
                  <section
                    id="community-posts"
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                  >
                    {/* Main Posts Feed */}
                    <div id="posts-feed" className="lg:col-span-2 space-y-6">
                      {/* Create Post */}
                      <div
                        id="create-post"
                        className="bg-white rounded-3xl p-6 shadow-sm"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <img
                            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                            alt="You"
                            className="w-12 h-12 rounded-full border-2 border-[#4CAF50]"
                          />
                          <input
                            type="text"
                            placeholder="Share your amazing science discovery! 🧪"
                            className="flex-1 bg-gray-100 rounded-full px-4 py-3 text-gray-600"
                          />
                        </div>
                        <div className="flex justify-end">
                          <button className="bg-[#4CAF50] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#45a049] transition-colors">
                            Share 📤
                          </button>
                        </div>
                      </div>

                      {/* Post 1 */}
                      <div
                        id="post-1"
                        className="bg-white rounded-3xl p-6 shadow-sm"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <img
                            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                            alt="Alex"
                            className="w-12 h-12 rounded-full border-2 border-[#4CAF50]"
                          />
                          <div>
                            <h3 className="font-bold text-[#212121]">
                              Alex Thompson
                            </h3>
                            <p className="text-sm text-gray-500">
                              2 hours ago • Science Explorers
                            </p>
                          </div>
                        </div>
                        <p className="text-[#212121] mb-4">
                          Just made a volcano erupt in my kitchen! 🌋 Mom wasn't
                          too happy about the mess, but it was AMAZING! Here's
                          what I learned about chemical reactions...
                        </p>
                        <div className="bg-gradient-to-br from-[#FF4081]/10 to-[#FF5722]/10 rounded-2xl p-4 mb-4">
                          <div className="text-6xl text-center mb-2">🌋</div>
                          <p className="text-sm text-gray-600 text-center">
                            Baking soda + vinegar = Explosive fun!
                          </p>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 hover:text-[#4CAF50] transition-colors">
                              <Heart className="w-4 h-4" />
                              <span>12 likes</span>
                            </button>
                            <button className="flex items-center gap-2 hover:text-[#1A73E8] transition-colors">
                              <MessageCircle className="w-4 h-4" />
                              <span>5 comments</span>
                            </button>
                          </div>
                          <button className="flex items-center gap-2 hover:text-[#FFC107] transition-colors">
                            <Share2 className="w-4 h-4" />
                            <span>Share</span>
                          </button>
                        </div>
                      </div>

                      {/* Post 2 */}
                      <div
                        id="post-2"
                        className="bg-white rounded-3xl p-6 shadow-sm"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <img
                            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                            alt="Emma"
                            className="w-12 h-12 rounded-full border-2 border-[#4CAF50]"
                          />
                          <div>
                            <h3 className="font-bold text-[#212121]">
                              Emma Wilson
                            </h3>
                            <p className="text-sm text-gray-500">
                              5 hours ago • Science Explorers
                            </p>
                          </div>
                        </div>
                        <p className="text-[#212121] mb-4">
                          Look what I grew in my science garden! 🌱 These
                          crystals took 3 weeks to form. Science is so cool when
                          you're patient!
                        </p>
                        <div className="bg-gradient-to-br from-[#9C27B0]/10 to-[#1A73E8]/10 rounded-2xl p-4 mb-4">
                          <div className="text-6xl text-center mb-2">💎</div>
                          <p className="text-sm text-gray-600 text-center">
                            Beautiful salt crystals grown at home!
                          </p>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 hover:text-[#4CAF50] transition-colors">
                              <Heart className="w-4 h-4" />
                              <span>18 likes</span>
                            </button>
                            <button className="flex items-center gap-2 hover:text-[#1A73E8] transition-colors">
                              <MessageCircle className="w-4 h-4" />
                              <span>8 comments</span>
                            </button>
                          </div>
                          <button className="flex items-center gap-2 hover:text-[#FFC107] transition-colors">
                            <Share2 className="w-4 h-4" />
                            <span>Share</span>
                          </button>
                        </div>
                      </div>

                      {/* Achievement Post */}
                      <div
                        id="achievement-post"
                        className="bg-white rounded-3xl p-6 shadow-sm border-2 border-[#FFC107]/30"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <img
                            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                            alt="Sam"
                            className="w-12 h-12 rounded-full border-2 border-[#FFC107]"
                          />
                          <div>
                            <h3 className="font-bold text-[#212121]">
                              Sam Rodriguez
                            </h3>
                            <p className="text-sm text-gray-500">
                              1 day ago • Science Explorers
                            </p>
                          </div>
                          <div className="ml-auto">
                            <span className="bg-[#FFC107] text-white px-3 py-1 rounded-full text-xs font-bold">
                              🏆 Achievement!
                            </span>
                          </div>
                        </div>
                        <p className="text-[#212121] mb-4">
                          I just earned my "Young Scientist" badge! 🧬 Completed
                          10 experiments this month and learned so much about
                          chemistry!
                        </p>
                        <div className="bg-gradient-to-br from-[#FFC107]/20 to-[#FF5722]/20 rounded-2xl p-6 mb-4 text-center">
                          <div className="text-5xl mb-2">🧬</div>
                          <h4 className="font-bold text-[#212121] mb-1">
                            Young Scientist
                          </h4>
                          <p className="text-sm text-gray-600">
                            Completed 10+ experiments
                          </p>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 hover:text-[#4CAF50] transition-colors">
                              <Heart className="w-4 h-4" />
                              <span>25 likes</span>
                            </button>
                            <button className="flex items-center gap-2 hover:text-[#1A73E8] transition-colors">
                              <MessageCircle className="w-4 h-4" />
                              <span>12 comments</span>
                            </button>
                          </div>
                          <button className="flex items-center gap-2 hover:text-[#FFC107] transition-colors">
                            <Share2 className="w-4 h-4" />
                            <span>Share</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Sidebar */}
                    <div id="community-sidebar" className="space-y-6">
                      {/* Community Stats */}
                      <div
                        id="community-stats"
                        className="bg-white rounded-3xl p-6 shadow-sm"
                      >
                        <h3 className="font-bold text-[#212121] mb-4 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-[#4CAF50]" />
                          Community Stats
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Total Members</span>
                            <span className="font-bold text-[#4CAF50]">27</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">
                              Posts This Week
                            </span>
                            <span className="font-bold text-[#1A73E8]">15</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">
                              Achievements Shared
                            </span>
                            <span className="font-bold text-[#FFC107]">8</span>
                          </div>
                        </div>
                      </div>

                      {/* Active Members */}
                      <div
                        id="active-members"
                        className="bg-white rounded-3xl p-6 shadow-sm"
                      >
                        <h3 className="font-bold text-[#212121] mb-4 flex items-center gap-2">
                          <Users className="w-5 h-5 text-[#4CAF50]" />
                          Most Active Members
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <img
                              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                              alt="Alex"
                              className="w-10 h-10 rounded-full border-2 border-[#4CAF50]"
                            />
                            <div className="flex-1">
                              <p className="font-semibold text-[#212121] text-sm">
                                Alex Thompson
                              </p>
                              <p className="text-xs text-gray-500">
                                12 posts this week
                              </p>
                            </div>
                            <div className="text-xl">🏆</div>
                          </div>
                          <div className="flex items-center gap-3">
                            <img
                              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                              alt="Emma"
                              className="w-10 h-10 rounded-full border-2 border-[#4CAF50]"
                            />
                            <div className="flex-1">
                              <p className="font-semibold text-[#212121] text-sm">
                                Emma Wilson
                              </p>
                              <p className="text-xs text-gray-500">
                                8 posts this week
                              </p>
                            </div>
                            <div className="text-xl">🥈</div>
                          </div>
                          <div className="flex items-center gap-3">
                            <img
                              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                              alt="Sam"
                              className="w-10 h-10 rounded-full border-2 border-[#4CAF50]"
                            />
                            <div className="flex-1">
                              <p className="font-semibold text-[#212121] text-sm">
                                Sam Rodriguez
                              </p>
                              <p className="text-xs text-gray-500">
                                6 posts this week
                              </p>
                            </div>
                            <div className="text-xl">🥉</div>
                          </div>
                        </div>
                      </div>

                      {/* Suggested Communities */}
                      <div
                        id="suggested-communities"
                        className="bg-white rounded-3xl p-6 shadow-sm"
                      >
                        <h3 className="font-bold text-[#212121] mb-4 flex items-center gap-2">
                          <Lightbulb className="w-5 h-5 text-[#FFC107]" />
                          You Might Like
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#FF4081]/20 to-[#FF4081]/10 rounded-full flex items-center justify-center text-2xl">
                              🎨
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-[#212121] text-sm">
                                Art & Creativity
                              </p>
                              <p className="text-xs text-gray-500">
                                21 members
                              </p>
                            </div>
                            <button className="bg-[#FF4081] text-white px-3 py-1 rounded-full text-xs font-semibold hover:bg-[#e91e63] transition-colors">
                              Join
                            </button>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#1A73E8]/20 to-[#1A73E8]/10 rounded-full flex items-center justify-center text-2xl">
                              💻
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-[#212121] text-sm">
                                Tech Wizards
                              </p>
                              <p className="text-xs text-gray-500">
                                35 members
                              </p>
                            </div>
                            <button className="bg-[#1A73E8] text-white px-3 py-1 rounded-full text-xs font-semibold hover:bg-[#1557b0] transition-colors">
                              Join
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </TabsContent>

                {/* Achievements Tab Content */}
                <TabsContent value="achievements" className="mt-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                      <h2 className="text-2xl font-bold text-[#212121] mb-6">
                        🏆 Community Achievements
                      </h2>

                      {/* Achievement Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-3xl p-6 shadow-sm border-l-4 border-[#FFC107]">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 bg-[#FFC107]/20 rounded-full flex items-center justify-center">
                              <span className="text-2xl">🧪</span>
                            </div>
                            <div>
                              <h3 className="font-bold text-[#212121]">
                                Master Experimenter
                              </h3>
                              <p className="text-sm text-gray-600">
                                Complete 10 science experiments
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">
                              Earned by 15 members
                            </span>
                            <span className="bg-[#FFC107] text-white px-3 py-1 rounded-full text-xs font-bold">
                              +500 pts
                            </span>
                          </div>
                        </div>

                        <div className="bg-white rounded-3xl p-6 shadow-sm border-l-4 border-[#4CAF50]">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 bg-[#4CAF50]/20 rounded-full flex items-center justify-center">
                              <span className="text-2xl">🌟</span>
                            </div>
                            <div>
                              <h3 className="font-bold text-[#212121]">
                                Community Star
                              </h3>
                              <p className="text-sm text-gray-600">
                                Help 5 community members
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">
                              Earned by 8 members
                            </span>
                            <span className="bg-[#4CAF50] text-white px-3 py-1 rounded-full text-xs font-bold">
                              +750 pts
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Sidebar for achievements */}
                    <div className="space-y-6">
                      <div className="bg-white rounded-3xl p-6 shadow-sm">
                        <h3 className="font-bold text-[#212121] mb-4 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-[#FFC107]" />
                          Leaderboard
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">🥇</span>
                              <span className="font-semibold text-[#212121]">
                                Alex
                              </span>
                            </div>
                            <span className="font-bold text-[#FFC107]">
                              1,250 pts
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">🥈</span>
                              <span className="font-semibold text-[#212121]">
                                Emma
                              </span>
                            </div>
                            <span className="font-bold text-[#FFC107]">
                              980 pts
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Members Tab Content */}
                <TabsContent value="members" className="mt-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h2 className="text-2xl font-bold text-[#212121] mb-6">
                        👥 Community Members (27)
                      </h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Member Cards */}
                        <div className="bg-white rounded-2xl p-4 shadow-sm">
                          <div className="flex items-center gap-4">
                            <img
                              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                              alt="Alex"
                              className="w-12 h-12 rounded-full border-2 border-[#4CAF50]"
                            />
                            <div className="flex-1">
                              <h3 className="font-bold text-[#212121]">
                                Alex Thompson
                              </h3>
                              <p className="text-sm text-gray-600">
                                Community Leader • 1,250 pts
                              </p>
                            </div>
                            <button className="bg-[#1A73E8] text-white px-4 py-2 rounded-full text-sm hover:bg-[#1557b0] transition-colors">
                              Follow
                            </button>
                          </div>
                        </div>

                        <div className="bg-white rounded-2xl p-4 shadow-sm">
                          <div className="flex items-center gap-4">
                            <img
                              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                              alt="Emma"
                              className="w-12 h-12 rounded-full border-2 border-[#4CAF50]"
                            />
                            <div className="flex-1">
                              <h3 className="font-bold text-[#212121]">
                                Emma Wilson
                              </h3>
                              <p className="text-sm text-gray-600">
                                Active Member • 980 pts
                              </p>
                            </div>
                            <button className="bg-[#1A73E8] text-white px-4 py-2 rounded-full text-sm hover:bg-[#1557b0] transition-colors">
                              Follow
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                      <div className="bg-white rounded-3xl p-6 shadow-sm">
                        <h3 className="font-bold text-[#212121] mb-4 flex items-center gap-2">
                          <Users className="w-5 h-5 text-[#4CAF50]" />
                          Member Stats
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">New This Week</span>
                            <span className="font-bold text-[#4CAF50]">3</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Most Active</span>
                            <span className="font-bold text-[#1A73E8]">
                              Alex
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </main>
    </>
  );
};

export default CommunityDetail;
