import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { PageMetadata } from "../components/PageMetadata";
import {
  Crown,
  Plus,
  CloudUpload,
  BookOpen,
  Video,
  Gamepad,
  Book,
  Compass,
  Lightbulb,
  Map,
  Target,
  X,
  Play,
  Sparkles,
  Award,
} from "lucide-react";
import AIAssistant from "../components/AIAssistant";
import {
  getYouTubeVideoId,
  getYouTubeEmbedUrl,
  getYouTubeThumbnail,
} from "../lib/youtubeHelpers";

// Mock data for demonstration
const mockDashboardData = {
  currentUser: {
    firstName: "Emma",
    lastName: "Johnson",
    age: 10,
    image: "",
  },
  educationalContents: [
    {
      videoUrl: [
        {
          title: "Journey Through Space",
          thumbnail:
            "https://storage.googleapis.com/uxpilot-auth.appspot.com/b3b163a882-8c9cd26389bac7647515.png",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "15 mins",
          category: "Science",
        },
        {
          title: "Ocean Wonders",
          thumbnail:
            "https://storage.googleapis.com/uxpilot-auth.appspot.com/b3b163a882-8c9cd26389bac7647515.png",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "12 mins",
          category: "Science",
        },
      ],
      books: [
        {
          title: "Creative Art Adventures",
          author: "Sarah Smith",
          theme: "Art",
          thumbnail:
            "https://storage.googleapis.com/uxpilot-auth.appspot.com/de43d241d9-f6224617d46087a56283.png",
        },
        {
          title: "Science Experiments",
          author: "Dr. Mike",
          theme: "Science",
          thumbnail:
            "https://storage.googleapis.com/uxpilot-auth.appspot.com/de43d241d9-f6224617d46087a56283.png",
        },
      ],
      games: [
        {
          name: "Math Quest Adventure",
          skill: "Problem Solving",
          thumbnail:
            "https://storage.googleapis.com/uxpilot-auth.appspot.com/4afcdfe405-2c6bf681b5e3e4f3a72c.png",
          description: "Practice math skills with fun mini-games!",
        },
        {
          name: "Number Ninjas",
          skill: "Quick Thinking",
          thumbnail:
            "https://storage.googleapis.com/uxpilot-auth.appspot.com/4afcdfe405-2c6bf681b5e3e4f3a72c.png",
          description: "Challenge your brain with number puzzles!",
        },
      ],
    },
  ],
};

const Home = () => {
  const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;
  const token = localStorage.getItem("childToken");
  const [activeFilter, setActiveFilter] = useState("all");
  const [videoModal, setVideoModal] = useState({ isOpen: false, video: null });

  const getDashboardData = async () => {
    const res = await axios.get(`${apiURL}/student/dashboard`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log(res.data);
    return res.data.dashboardResponse;
  };

  const {
    data: dashboardData = {},
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["dashboard-data"],
    queryFn: getDashboardData,
    staleTime: 5 * 60 * 1000,
  });

  const getRewards = async () => {
    const res = await axios.get(`${apiURL}/student/rewards`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log(res.data);
    return res.data;
  };

  const { data: rewards = {} } = useQuery({
    queryKey: ["rewards"],
    queryFn: getRewards,
    staleTime: 5 * 60 * 1000,
  });

  const getUserLevelInfo = (age) => {
    if (age >= 6 && age <= 8) {
      return {
        title: "Early Explorer",
        icon: Compass,
        emoji: "🌱",
      };
    } else if (age >= 9 && age <= 12) {
      return {
        title: "Budding Innovator",
        icon: Lightbulb,
        emoji: "💡",
      };
    } else if (age >= 13 && age <= 15) {
      return {
        title: "Teen Trailblazer",
        icon: Map,
        emoji: "🚀",
      };
    } else if (age >= 16 && age <= 18) {
      return {
        title: "Visionary Achiever",
        icon: Target,
        emoji: "🎯",
      };
    } else {
      // Default for any other age
      return {
        title: "Super Explorer",
        icon: Crown,
        emoji: "✨",
      };
    }
  };
  const userAge = dashboardData?.currentUser?.age;
  const levelInfo = getUserLevelInfo(userAge);
  const LevelIcon = levelInfo.icon;

  const getUserInitials = (firstName, lastName) => {
    const firstInitial = firstName ? firstName.charAt(0).toUpperCase() : "";
    const lastInitial = lastName ? lastName.charAt(0).toUpperCase() : "";
    return `${firstInitial}${lastInitial}`;
  };

  const currentUser = dashboardData?.currentUser;
  const userImage = currentUser?.image;
  const userInitials = getUserInitials(
    currentUser?.firstName,
    currentUser?.lastName
  );

  const openVideoModal = (video) => {
    setVideoModal({ isOpen: true, video });
  };

  const closeVideoModal = () => {
    setVideoModal({ isOpen: false, video: null });
  };

  const getFilteredContent = () => {
    const allContent = dashboardData?.educationalContents || [];

    const videos = allContent.flatMap((content) => {
      const videoArray = content.videos || content.videoUrl || [];
      return videoArray;
    });
    const books = allContent.flatMap((content) => content.books || []);
    const games = allContent.flatMap((content) => content.games || []);

    switch (activeFilter) {
      case "videos":
        return { videos, books: [], games: [] };
      case "books":
        return { videos: [], books, games: [] };
      case "games":
        return { videos: [], books: [], games };
      default:
        return { videos, books, games };
    }
  };

  const filteredContent = getFilteredContent();
  const hasAnyContent =
    filteredContent.videos.length > 0 ||
    filteredContent.books.length > 0 ||
    filteredContent.games.length > 0;

  const EmptyState = () => (
    <div className="col-span-full flex flex-col items-center justify-center py-16 px-4">
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#1A73E8]/20 to-[#4CAF50]/20 flex items-center justify-center mb-6">
        <Sparkles size={40} className="text-[#1A73E8]" />
      </div>
      <h3 className="text-xl font-semibold text-[#212121] mb-2">
        Your Learning Journey Awaits!
      </h3>
      <p className="text-gray-500 text-center max-w-md mb-6">
        {activeFilter === "all"
          ? "We're preparing personalized content just for you. Check back soon to discover amazing videos, books, and games!"
          : `No ${activeFilter} available yet. We're working on bringing you the best ${activeFilter} for your learning journey!`}
      </p>
      <button className="px-6 py-3 bg-gradient-to-r from-[#1A73E8] to-[#4CAF50] text-white rounded-full font-medium hover:shadow-lg transition-all">
        Explore Content
      </button>
    </div>
  );

  return (
    <>
      <PageMetadata
        title="Dashboard | SkillSeed"
        description="Your SkillSeed dashboard - Track your learning progress and access your courses"
      />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Sidebar */}
            <div className="lg:col-span-3 space-y-6">
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

                    {/* Conditional Avatar Display */}
                    {userImage ? (
                      <img
                        className="w-full h-full rounded-full border-4 border-[#FFC107] object-cover"
                        src={userImage}
                        alt={`${currentUser?.firstName} ${currentUser?.lastName} avatar`}
                        onError={(e) => {
                          // If image fails to load, hide it and show initials instead
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                    ) : null}

                    {/* Initials Fallback */}
                    <div
                      className={`w-full h-full rounded-full border-4 border-[#FFC107] bg-gradient-to-br from-[#1A73E8] to-[#4CAF50] flex items-center justify-center text-white text-2xl font-bold ${
                        userImage ? "hidden" : "flex"
                      }`}
                      style={{ display: userImage ? "none" : "flex" }}
                    >
                      {userInitials}
                    </div>
                  </div>
                  {/* Achievement Badge */}
                  <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-[#FFC107] to-[#FF4081] rounded-full p-2.5 shadow-lg">
                    <Crown size={16} className="text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mt-4 text-[#212121]">
                  {dashboardData?.currentUser?.firstName +
                    " " +
                    dashboardData?.currentUser?.lastName}
                </h3>
                <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                  <span className="text-[#FFC107]">{levelInfo.emoji}</span>
                  <LevelIcon size={14} className="text-[#FFC107]" />
                  {levelInfo.title}
                </p>

                <div className="mt-6 w-full grid grid-cols-2 gap-4">
                  <div className="bg-[#1A73E8]/5 rounded-xl text-center flex flex-col items-center justify-center px-3 py-1">
                    <div className="text-2xl font-bold text-[#1A73E8]">
                      {rewards?.totalBadges}
                    </div>
                    <div className="text-xs text-gray-500">Badges</div>
                  </div>
                  <div className="bg-[#FFC107]/5 rounded-xl flex flex-col items-center justify-center px-3 py-1">
                    <div className="text-2xl font-bold text-[#FFC107]">
                      {rewards?.totalStars}
                    </div>
                    <div className="text-xs text-gray-500">Stars</div>
                  </div>
                </div>
              </div>

              {/* My Projects Section */}
              {/* <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-[#212121]">My Projects</h3>
                  <button className="w-8 h-8 rounded-full bg-[#FFC107]/10 flex items-center justify-center hover:bg-[#FFC107]/20 transition-colors">
                    <Plus size={16} className="text-[#FFC107]" />
                  </button>
                </div>

                <div className="space-y-4">
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
                  </div>

                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-[#1A73E8] transition-colors cursor-pointer">
                    <CloudUpload
                      size={24}
                      className="text-[#1A73E8] mx-auto mb-2"
                    />
                    <p className="text-sm text-gray-500">
                      Upload your latest project
                    </p>
                    <button className="mt-3 px-4 py-2 bg-[#1A73E8] text-white rounded-full text-sm hover:bg-[#1557b0] transition-colors">
                      Choose File
                    </button>
                  </div>
                </div>
              </div> */}

              {/* Badges Showcase */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-[#212121]">
                    Recent Badges
                  </h3>
                </div>

                {rewards?.badges && rewards.badges.length > 0 ? (
                  <div className="grid grid-cols-3 gap-4">
                    {rewards.badges.map((badge, index) => (
                      <div
                        key={index}
                        className="badge-item group relative cursor-pointer"
                      >
                        <div
                          className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform text-2xl shadow-sm`}
                        >
                          <span className="relative z-10 text-2xl">
                            {badge?.icon}
                          </span>
                        </div>
                        <p className="text-xs text-center mt-2 text-gray-600 truncate">
                          {badge?.name}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Award size={32} className="text-gray-300 mx-auto mb-2" />
                    <p className="text-sm text-gray-400">No badges yet</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Keep learning to earn badges!
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-9 space-y-6">
              {/* Learning Progress */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
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
                          <h4 className="font-medium text-[#212121]">
                            Reading
                          </h4>
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
                          <Video size={20} className="text-[#4CAF50]" />
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
              <div className="space-y-6 max-h-[calc(100vh-4rem)] overflow-y-auto">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <h2 className="text-xl font-semibold text-[#212121]">
                    Recommended For You
                  </h2>
                  <div className="flex gap-2 flex-wrap">
                    <button
                      onClick={() => setActiveFilter("all")}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activeFilter === "all"
                          ? "bg-gradient-to-r from-[#1A73E8] to-[#4CAF50] text-white shadow-md"
                          : "bg-white text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      All Content
                    </button>
                    <button
                      onClick={() => setActiveFilter("videos")}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activeFilter === "videos"
                          ? "bg-[#1A73E8] text-white shadow-md"
                          : "bg-white text-[#1A73E8] hover:bg-[#1A73E8]/10"
                      }`}
                    >
                      <Video size={16} className="inline mr-2" />
                      Videos
                    </button>
                    <button
                      onClick={() => setActiveFilter("books")}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activeFilter === "books"
                          ? "bg-[#FF4081] text-white shadow-md"
                          : "bg-white text-[#FF4081] hover:bg-[#FF4081]/10"
                      }`}
                    >
                      <Book size={16} className="inline mr-2" />
                      Books
                    </button>
                    <button
                      onClick={() => setActiveFilter("games")}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activeFilter === "games"
                          ? "bg-[#4CAF50] text-white shadow-md"
                          : "bg-white text-[#4CAF50] hover:bg-[#4CAF50]/10"
                      }`}
                    >
                      <Gamepad size={16} className="inline mr-2" />
                      Games
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-3">
                  {!hasAnyContent ? (
                    <EmptyState />
                  ) : (
                    <>
                      {/* Videos */}
                      {filteredContent.videos.map((video, index) => (
                        <div
                          key={`video-${index}`}
                          onClick={() =>
                            openVideoModal({
                              ...video,
                              url: getYouTubeEmbedUrl(video.url),
                            })
                          }
                          className="bg-white rounded-2xl shadow-sm overflow-hidden group cursor-pointer hover:shadow-lg transition-all"
                        >
                          <div className="relative">
                            <img
                              className="w-full h-48 object-cover"
                              src={getYouTubeThumbnail(video.url)}
                              alt={video.title}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="absolute bottom-4 right-4 bg-[#1A73E8] rounded-full w-12 h-12 flex items-center justify-center transform translate-y-12 group-hover:translate-y-0 transition-transform shadow-lg">
                              <Play
                                size={20}
                                className="text-white ml-1"
                                fill="white"
                              />
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs font-medium text-white bg-[#1A73E8] px-2 py-1 rounded-full">
                                {video.category}
                              </span>
                              <span className="text-xs text-gray-500">
                                {video.duration}
                              </span>
                            </div>
                            <h3 className="font-medium text-[#212121] mb-1">
                              {video.title}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {video.description}
                            </p>
                          </div>
                        </div>
                      ))}

                      {/* Books */}
                      {filteredContent.books.map((book, index) => (
                        <div
                          key={`book-${index}`}
                          className="bg-white rounded-2xl shadow-sm overflow-hidden group cursor-pointer hover:shadow-lg transition-all"
                        >
                          <div className="relative">
                            <img
                              className="w-full h-48 object-cover"
                              src={book.thumbnail}
                              alt={book.title}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="absolute bottom-4 right-4 bg-[#FF4081] rounded-full w-12 h-12 flex items-center justify-center transform translate-y-12 group-hover:translate-y-0 transition-transform shadow-lg">
                              <Book size={20} className="text-white" />
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs font-medium text-white bg-[#FF4081] px-2 py-1 rounded-full">
                                {book.theme}
                              </span>
                              <span className="text-xs text-gray-500">
                                {book.author}
                              </span>
                            </div>
                            <h3 className="font-medium text-[#212121] mb-1">
                              {book.title}
                            </h3>
                            <p className="text-sm text-gray-500">
                              Make amazing art with simple materials!
                            </p>
                          </div>
                        </div>
                      ))}

                      {/* Games */}
                      {filteredContent.games.map((game, index) => (
                        <div
                          key={`game-${index}`}
                          className="bg-white rounded-2xl shadow-sm overflow-hidden group cursor-pointer hover:shadow-lg transition-all"
                        >
                          <div className="relative">
                            <img
                              className="w-full h-48 object-cover"
                              src={game.thumbnail}
                              alt={game.name}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="absolute bottom-4 right-4 bg-[#4CAF50] rounded-full w-12 h-12 flex items-center justify-center transform translate-y-12 group-hover:translate-y-0 transition-transform shadow-lg">
                              <Gamepad size={20} className="text-white" />
                            </div>
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                              <span className="text-xs font-medium text-[#4CAF50]">
                                Brain Game
                              </span>
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs font-medium text-white bg-[#4CAF50] px-2 py-1 rounded-full">
                                {game.skill}
                              </span>
                              {/* <span className="text-xs text-gray-500">
                                {game.skill}
                              </span> */}
                            </div>
                            <h3 className="font-medium text-[#212121] mb-1">
                              {game.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {game.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {videoModal.isOpen && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeVideoModal}
          >
            <div
              className="bg-white rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h3 className="font-semibold text-[#212121] text-lg">
                  {videoModal.video?.title}
                </h3>
                <button
                  onClick={closeVideoModal}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <X size={20} className="text-gray-600" />
                </button>
              </div>
              <div className="aspect-video bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src={videoModal.video?.url}
                  title={videoModal.video?.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 bg-gray-50">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-white bg-[#1A73E8] px-2 py-1 rounded-full">
                    {videoModal.video?.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {videoModal.video?.duration}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Learn about planets, stars, and space exploration in this
                  engaging video!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <AIAssistant />
    </>
  );
};

export default Home;
