import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { PageMetadata } from "../components/PageMetadata";
import {
  Search,
  Play,
  Clock,
  Eye,
  ThumbsUp,
  Share2,
  Bookmark,
  ArrowLeft,
  ExternalLink,
  Filter,
} from "lucide-react";

const YouTubeSearchPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  // Mock YouTube search results - In production, you'd integrate with YouTube API
  const mockSearchResults = [
    {
      id: "dQw4w9WgXcQ",
      title: "Mathematics Made Easy - Learn Basic Algebra",
      channel: "EduMath Channel",
      duration: "15:42",
      views: "125K views",
      uploadTime: "2 weeks ago",
      thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
      description:
        "Master the fundamentals of algebra with this comprehensive tutorial designed for students...",
      likes: "2.1K",
      category: "Education",
    },
    {
      id: "jNQXAC9IVRw",
      title: "Science Experiments You Can Do at Home",
      channel: "Science Fun Lab",
      duration: "22:15",
      views: "89K views",
      uploadTime: "1 week ago",
      thumbnail: "https://i.ytimg.com/vi/jNQXAC9IVRw/mqdefault.jpg",
      description:
        "Discover amazing science experiments using everyday household items...",
      likes: "1.8K",
      category: "Science",
    },
    {
      id: "M7lc1UVf-VE",
      title: "World History: Ancient Civilizations",
      channel: "History Explorer",
      duration: "18:30",
      views: "76K views",
      uploadTime: "3 days ago",
      thumbnail: "https://i.ytimg.com/vi/M7lc1UVf-VE/mqdefault.jpg",
      description:
        "Journey through time to explore the fascinating world of ancient civilizations...",
      likes: "1.5K",
      category: "History",
    },
    {
      id: "kJQP7kiw5Fk",
      title: "Creative Art Techniques for Beginners",
      channel: "Art Studio Kids",
      duration: "12:45",
      views: "142K views",
      uploadTime: "5 days ago",
      thumbnail: "https://i.ytimg.com/vi/kJQP7kiw5Fk/mqdefault.jpg",
      description:
        "Learn basic art techniques and unleash your creativity with these fun tutorials...",
      likes: "3.2K",
      category: "Art",
    },
    {
      id: "QH2-TGUlwu4",
      title: "English Grammar Made Simple",
      channel: "Language Learning Hub",
      duration: "25:18",
      views: "203K views",
      uploadTime: "1 month ago",
      thumbnail: "https://i.ytimg.com/vi/QH2-TGUlwu4/mqdefault.jpg",
      description:
        "Master English grammar with easy-to-understand explanations and examples...",
      likes: "4.1K",
      category: "Language",
    },
    {
      id: "nfWlot6h_JM",
      title: "Introduction to Coding for Kids",
      channel: "Code Academy Junior",
      duration: "20:05",
      views: "167K views",
      uploadTime: "2 weeks ago",
      thumbnail: "https://i.ytimg.com/vi/nfWlot6h_JM/mqdefault.jpg",
      description:
        "Start your coding journey with fun and interactive programming lessons...",
      likes: "2.7K",
      category: "Technology",
    },
  ];

  useEffect(() => {
    const query = searchParams.get("q");
    if (query) {
      setSearchQuery(query);
      performSearch(query);
    }
  }, [searchParams]);

  const performSearch = (query) => {
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      // Filter mock results based on search query
      const filteredResults = mockSearchResults.filter(
        (video) =>
          video.title.toLowerCase().includes(query.toLowerCase()) ||
          video.description.toLowerCase().includes(query.toLowerCase()) ||
          video.category.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(
        filteredResults.length > 0 ? filteredResults : mockSearchResults
      );
      setIsLoading(false);
    }, 800);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/youtube-search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const playVideo = (video) => {
    setSelectedVideo(video);
  };

  const goBack = () => {
    setSelectedVideo(null);
  };

  const categories = [
    "All",
    "Education",
    "Science",
    "History",
    "Art",
    "Language",
    "Technology",
  ];

  if (selectedVideo) {
    return (
      <div className="min-h-screen bg-[#F5F7FA] pt-20">
        <PageMetadata
          title={`${selectedVideo.title} - SkillSeed`}
          description={selectedVideo.description}
        />

        <div className="container mx-auto px-6 py-8">
          {/* Back Button */}
          <button
            onClick={goBack}
            className="mb-6 flex items-center gap-2 text-[#1A73E8] hover:text-[#1557B0] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Search Results</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Video Player */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* YouTube Embed */}
                <div className="relative aspect-video bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1&rel=0&modestbranding=1`}
                    title={selectedVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h1 className="text-2xl font-bold text-[#212121] mb-4">
                    {selectedVideo.title}
                  </h1>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <span className="text-gray-600">
                        {selectedVideo.views}
                      </span>
                      <span className="text-gray-600">•</span>
                      <span className="text-gray-600">
                        {selectedVideo.uploadTime}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button className="flex items-center gap-2 bg-[#F5F7FA] text-[#1A73E8] rounded-full px-4 py-2 hover:bg-[#E8F0FE] transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{selectedVideo.likes}</span>
                      </button>
                      <button className="flex items-center gap-2 bg-[#F5F7FA] text-[#1A73E8] rounded-full px-4 py-2 hover:bg-[#E8F0FE] transition-colors">
                        <Share2 className="w-4 h-4" />
                        <span>Share</span>
                      </button>
                      <button className="flex items-center gap-2 bg-[#F5F7FA] text-[#1A73E8] rounded-full px-4 py-2 hover:bg-[#E8F0FE] transition-colors">
                        <Bookmark className="w-4 h-4" />
                        <span>Save</span>
                      </button>
                    </div>
                  </div>

                  {/* Channel Info */}
                  <div className="flex items-center gap-4 p-4 bg-[#F5F7FA] rounded-2xl">
                    <div className="w-12 h-12 bg-[#1A73E8] rounded-full flex items-center justify-center text-white font-bold">
                      {selectedVideo.channel.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#212121]">
                        {selectedVideo.channel}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Educational Content Creator
                      </p>
                    </div>
                    <button className="bg-[#1A73E8] text-white rounded-full px-6 py-2 hover:bg-[#1557B0] transition-colors">
                      Subscribe
                    </button>
                  </div>

                  {/* Description */}
                  <div className="mt-6">
                    <h3 className="font-semibold text-[#212121] mb-3">
                      Description
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedVideo.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Related Videos */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-bold text-[#212121] mb-4">
                  Related Videos
                </h3>
                <div className="space-y-4">
                  {mockSearchResults.slice(0, 4).map((video) => (
                    <div
                      key={video.id}
                      onClick={() => playVideo(video)}
                      className="flex gap-3 p-3 rounded-xl hover:bg-[#F5F7FA] cursor-pointer transition-colors"
                    >
                      <div className="relative flex-shrink-0">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-24 h-16 rounded-lg object-cover"
                        />
                        <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm text-[#212121] line-clamp-2 mb-1">
                          {video.title}
                        </h4>
                        <p className="text-xs text-gray-600 mb-1">
                          {video.channel}
                        </p>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <span>{video.views}</span>
                          <span>•</span>
                          <span>{video.uploadTime}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <PageMetadata
        title="YouTube Search - SkillSeed"
        description="Search and watch educational videos"
      />

      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#212121] mb-4">
            Educational Videos 📺
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing educational content to enhance your learning
            journey
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for educational videos..."
              className="w-full py-4 pl-6 pr-16 text-gray-900 bg-white border-2 border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent placeholder-gray-500 shadow-lg"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#1A73E8] text-white p-3 rounded-full hover:bg-[#1557B0] transition-colors duration-200"
            >
              <Search size={20} />
            </button>
          </form>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-[#212121] mb-4 flex items-center gap-3">
              <Filter className="w-5 h-5 text-[#FF4081]" />
              Categories
            </h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`${
                    category === "All"
                      ? "bg-[#1A73E8] text-white"
                      : "bg-[#F5F7FA] text-[#212121] hover:bg-[#1A73E8] hover:text-white"
                  } rounded-full px-4 py-2 text-sm font-semibold transition-all`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#1A73E8] border-t-transparent"></div>
            <p className="mt-4 text-gray-600">Searching for videos...</p>
          </div>
        )}

        {/* Search Results */}
        {!isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((video) => (
              <div
                key={video.id}
                onClick={() => playVideo(video)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer group"
              >
                {/* Thumbnail */}
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center">
                    <Play
                      className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="currentColor"
                    />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {video.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-[#212121] text-lg mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-[#1A73E8] font-medium mb-2">
                    {video.channel}
                  </p>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                    <Eye className="w-4 h-4" />
                    <span>{video.views}</span>
                    <span>•</span>
                    <span>{video.uploadTime}</span>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {video.description}
                  </p>

                  {/* Category Badge */}
                  <div className="mt-4">
                    <span className="bg-[#E8F0FE] text-[#1A73E8] text-xs font-semibold px-3 py-1 rounded-full">
                      {video.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && searchResults.length === 0 && searchQuery && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-[#212121] mb-2">
              No videos found
            </h3>
            <p className="text-gray-600 mb-6">
              Try searching with different keywords
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSearchResults(mockSearchResults);
              }}
              className="bg-[#1A73E8] text-white rounded-full px-6 py-3 hover:bg-[#1557B0] transition-colors"
            >
              Show All Videos
            </button>
          </div>
        )}
      </div>

      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        ::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

export default YouTubeSearchPage;
