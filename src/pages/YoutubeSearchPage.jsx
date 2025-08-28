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
  History,
  Trash2,
  Filter,
  X,
  Shield,
  AlertTriangle,
} from "lucide-react";

const YouTubeSearchPage = () => {
  const YOUTUBE_API_KEY = import.meta.env.VITE_REACT_YOUTUBE_API_KEY;
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [activeTab, setActiveTab] = useState("search");
  const [searchHistory, setSearchHistory] = useState([]);
  const [watchHistory, setWatchHistory] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Initialize empty arrays for history in memory
    setSearchHistory([]);
    setWatchHistory([]);
  }, []);

  useEffect(() => {
    const query = searchParams.get("q");
    if (query) {
      setSearchQuery(query);
      setActiveTab("search");
      performSearch(query);
      addToSearchHistory(query);
    } else {
      // Load trending safe content for kids
      loadTrendingContent();
    }
  }, [searchParams]);

  const addToSearchHistory = (query) => {
    const newHistory = [
      { query, timestamp: new Date().toISOString() },
      ...searchHistory.filter((item) => item.query !== query),
    ].slice(0, 20); // Keep only last 20 searches

    setSearchHistory(newHistory);
  };

  const addToWatchHistory = (video) => {
    const watchItem = {
      ...video,
      watchedAt: new Date().toISOString(),
      watchDuration: Math.floor(Math.random() * 80 + 20), // Mock watch percentage
    };

    const newWatchHistory = [
      watchItem,
      ...watchHistory.filter((item) => item.id !== video.id),
    ].slice(0, 50); // Keep only last 50 videos

    setWatchHistory(newWatchHistory);
  };

  const formatDuration = (duration) => {
    // Convert ISO 8601 duration (PT4M13S) to readable format (4:13)
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    if (!match) return "0:00";

    const hours = (match[1] || "").replace("H", "");
    const minutes = (match[2] || "").replace("M", "");
    const seconds = (match[3] || "").replace("S", "");

    if (hours) {
      return `${hours}:${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`;
    }
    return `${minutes || "0"}:${seconds.padStart(2, "0")}`;
  };

  const formatViewCount = (viewCount) => {
    const count = parseInt(viewCount);
    if (isNaN(count)) return "0 views";

    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M views`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K views`;
    }
    return `${count} views`;
  };

  const formatPublishTime = (publishedAt) => {
    const now = new Date();
    const published = new Date(publishedAt);
    const diffInDays = Math.floor((now - published) / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) return "Today";
    if (diffInDays === 1) return "1 day ago";
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
    if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
    return `${Math.floor(diffInDays / 365)} years ago`;
  };

  const isContentSafeForKids = (video) => {
    const title = video.title.toLowerCase();
    const description = (video.description || "").toLowerCase();
    const channelTitle = (video.channel || "").toLowerCase();

    // Filter out inappropriate content keywords
    const inappropriateKeywords = [
      "explicit",
      "mature",
      "adult",
      "nsfw",
      "violence",
      "horror",
      "scary",
      "inappropriate",
      "drug",
      "alcohol",
      "gambling",
      "weapon",
      "blood",
      "death",
      "kill",
      "murder",
      "suicide",
      "fight",
      "war",
      "gun",
      "knife",
      "dangerous",
      "extreme",
      "prank",
      "fail",
      "accident",
      "crash",
      "injury",
      "pain",
      "scream",
      "terror",
      "nightmare",
      "haunted",
      "ghost",
      "zombie",
      "demon",
      "devil",
      "hell",
      "sexual",
      "sexy",
      "hot",
      "nude",
      "naked",
      "kiss",
      "romance",
      "dating",
      "relationship",
      "love",
      "boyfriend",
      "girlfriend",
    ];

    const hasInappropriateContent = inappropriateKeywords.some(
      (keyword) =>
        title.includes(keyword) ||
        description.includes(keyword) ||
        channelTitle.includes(keyword)
    );

    // Prefer educational and family-friendly content
    const preferredKeywords = [
      "education",
      "tutorial",
      "learn",
      "kids",
      "children",
      "family",
      "science",
      "math",
      "art",
      "music",
      "craft",
      "cooking",
      "diy",
      "animation",
      "cartoon",
      "story",
      "book",
      "nature",
      "animals",
      "experiment",
      "fun",
      "creative",
      "build",
      "make",
      "draw",
      "paint",
      "sing",
      "dance",
      "play",
      "game",
      "toy",
      "puppet",
      "adventure",
      "explore",
      "discover",
      "wonder",
      "amazing",
    ];

    const hasPreferredContent = preferredKeywords.some(
      (keyword) =>
        title.includes(keyword) ||
        description.includes(keyword) ||
        channelTitle.includes(keyword)
    );

    // Require either no inappropriate content or presence of preferred content
    return !hasInappropriateContent || hasPreferredContent;
  };

  const performSearch = async (query) => {
    setIsLoading(true);
    setError(null);

    try {
      // Add kid-friendly terms to the search query
      const kidFriendlyQuery = query + " educational family friendly kids safe";

      // YouTube Data API v3 search with strict content filtering
      const searchResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?` +
          `part=snippet&` +
          `q=${encodeURIComponent(kidFriendlyQuery)}&` +
          `type=video&` +
          `videoEmbeddable=true&` +
          `videoSyndicated=true&` +
          `videoDuration=medium&` +
          `safeSearch=strict&` +
          `regionCode=US&` +
          `relevanceLanguage=en&` +
          `order=relevance&` +
          `maxResults=20&` +
          `key=${YOUTUBE_API_KEY}`
      );

      if (!searchResponse.ok) {
        const errorData = await searchResponse.json();
        throw new Error(
          errorData.error?.message || "Failed to fetch search results"
        );
      }

      const searchData = await searchResponse.json();

      if (searchData.items && searchData.items.length > 0) {
        // Get video details for duration, view count, etc.
        const videoIds = searchData.items
          .map((item) => item.id.videoId)
          .join(",");

        const detailsResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?` +
            `part=statistics,contentDetails,snippet&` +
            `id=${videoIds}&` +
            `key=${YOUTUBE_API_KEY}`
        );

        if (!detailsResponse.ok) {
          throw new Error("Failed to fetch video details");
        }

        const detailsData = await detailsResponse.json();

        // Combine search results with video details
        const videosWithDetails = searchData.items.map((item) => {
          const details = detailsData.items.find(
            (detail) => detail.id === item.id.videoId
          );

          return {
            id: item.id.videoId,
            title: item.snippet.title,
            channel: item.snippet.channelTitle,
            duration: details
              ? formatDuration(details.contentDetails.duration)
              : "N/A",
            views: details
              ? formatViewCount(details.statistics.viewCount)
              : "N/A",
            uploadTime: formatPublishTime(item.snippet.publishedAt),
            thumbnail:
              item.snippet.thumbnails.medium?.url ||
              item.snippet.thumbnails.default?.url,
            description: item.snippet.description || "",
            likes: details
              ? Math.floor((details.statistics.likeCount || 0) / 1000) + "K"
              : "N/A",
            category: details?.snippet?.categoryId || "General",
            channelId: item.snippet.channelId,
            publishedAt: item.snippet.publishedAt,
          };
        });

        // Filter content for kid safety
        const safeVideos = videosWithDetails.filter(isContentSafeForKids);

        setSearchResults(safeVideos.slice(0, 12)); // Limit to 12 results
      } else {
        setSearchResults([]);
      }
    } catch (err) {
      setError(`Failed to search videos: ${err.message}`);
      console.error("YouTube API Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const loadTrendingContent = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Load kid-friendly trending videos
      const trendingQueries = [
        "educational videos for kids",
        "science experiments children",
        "art tutorials kids",
        "cooking for beginners kids",
        "nature documentaries children",
        "music lessons kids",
        "craft projects children",
        "math tutorials fun",
        "story time kids",
        "animal videos educational",
      ];

      const randomQuery =
        trendingQueries[Math.floor(Math.random() * trendingQueries.length)];
      await performSearch(randomQuery);
    } catch (err) {
      setError("Failed to load content. Please try searching.");
      setIsLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/youtube-search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const playVideo = (video) => {
    setSelectedVideo(video);
    addToWatchHistory(video);
  };

  const goBack = () => {
    setSelectedVideo(null);
  };

  const clearSearchHistory = () => {
    setSearchHistory([]);
  };

  const clearWatchHistory = () => {
    setWatchHistory([]);
  };

  const removeFromSearchHistory = (queryToRemove) => {
    const newHistory = searchHistory.filter(
      (item) => item.query !== queryToRemove
    );
    setSearchHistory(newHistory);
  };

  const removeFromWatchHistory = (videoId) => {
    const newHistory = watchHistory.filter((item) => item.id !== videoId);
    setWatchHistory(newHistory);
  };

  const searchFromHistory = (query) => {
    setSearchQuery(query);
    navigate(`/youtube-search?q=${encodeURIComponent(query)}`);
  };

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const past = new Date(timestamp);
    const diffInHours = Math.floor((now - past) / (1000 * 60 * 60));

    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    return `${Math.floor(diffInDays / 7)}w ago`;
  };

  if (selectedVideo) {
    return (
      <div className="min-h-screen bg-[#F5F7FA]">
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
                {/* Safety Notice */}
                <div className="bg-green-50 border-l-4 border-green-500 p-4 flex items-center gap-3">
                  <Shield className="w-5 h-5 text-green-600" />
                  <div className="flex-1">
                    <p className="text-green-800 text-sm font-medium">
                      Safe Content
                    </p>
                    <p className="text-green-700 text-xs">
                      This content has been filtered for age-appropriate viewing
                    </p>
                  </div>
                </div>

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
                      <p className="text-gray-600 text-sm">Content Creator</p>
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
                <h3 className="font-bold text-[#212121] mb-4">Up Next</h3>
                <div className="space-y-4">
                  {searchResults
                    .slice(0, 5)
                    .filter((v) => v.id !== selectedVideo.id)
                    .map((video) => (
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
        title="YouTube Videos - SkillSeed"
        description="Search and watch safe videos on any topic"
      />

      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#212121] mb-4">
            Video Hub 🎬
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Discover educational and family-friendly videos on any topic
          </p>
          {/* Safety Notice */}
          <div className="max-w-2xl mx-auto bg-blue-50 border border-blue-200 rounded-2xl p-4 flex items-center gap-3">
            <Shield className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <p className="text-blue-800 text-sm">
              Content is automatically filtered to ensure safe, age-appropriate
              viewing for ages 6-18
            </p>
          </div>
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
              disabled={isLoading}
            >
              <Search size={20} />
            </button>
          </form>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-2xl p-2 shadow-lg">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("search")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === "search"
                    ? "bg-[#1A73E8] text-white"
                    : "text-gray-600 hover:bg-[#F5F7FA]"
                }`}
              >
                <Search className="w-4 h-4 inline mr-2" />
                Search Results
              </button>
              <button
                onClick={() => setActiveTab("history")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === "history"
                    ? "bg-[#1A73E8] text-white"
                    : "text-gray-600 hover:bg-[#F5F7FA]"
                }`}
              >
                <History className="w-4 h-4 inline mr-2" />
                History ({searchHistory.length + watchHistory.length})
              </button>
            </div>
          </div>
        </div>

        {/* Error State */}
        {error && (
          <div className="max-w-2xl mx-auto mb-8 bg-red-50 border border-red-200 rounded-2xl p-4 flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {/* Content based on active tab */}
        {activeTab === "search" && (
          <>
            {/* Loading */}
            {isLoading && (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#1A73E8] border-t-transparent"></div>
                <p className="mt-4 text-gray-600">
                  Searching for safe videos...
                </p>
              </div>
            )}

            {/* Search Results */}
            {!isLoading && searchResults.length > 0 && (
              <>
                {searchQuery && (
                  <div className="mb-6 text-center">
                    <p className="text-gray-600">
                      Found {searchResults.length} safe, educational videos for
                      "{searchQuery}"
                    </p>
                  </div>
                )}
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
                          onError={(e) => {
                            e.target.src =
                              "https://via.placeholder.com/320x180/E8F0FE/1A73E8?text=Video";
                          }}
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
                        {/* Safe Content Badge */}
                        <div className="absolute top-2 left-2 bg-green-500/90 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                          <Shield className="w-3 h-3" />
                          Safe
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
                          {video.description.length > 100
                            ? video.description.substring(0, 100) + "..."
                            : video.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Empty State for Search */}
            {!isLoading && searchResults.length === 0 && searchQuery && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-[#212121] mb-2">
                  No safe videos found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try searching with different keywords. We filter content to
                  ensure it's appropriate and educational.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    navigate("/youtube-search");
                  }}
                  className="bg-[#1A73E8] text-white rounded-full px-6 py-3 hover:bg-[#1557B0] transition-colors"
                >
                  Browse Recommended Videos
                </button>
              </div>
            )}

            {/* Initial Empty State */}
            {!isLoading && searchResults.length === 0 && !searchQuery && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎥</div>
                <h3 className="text-2xl font-bold text-[#212121] mb-2">
                  Welcome to Video Hub
                </h3>
                <p className="text-gray-600 mb-6">
                  Search for educational videos on any topic you're curious
                  about!
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "Science experiments",
                    "Art tutorials",
                    "Math lessons",
                    "Cooking basics",
                    "Nature documentaries",
                    "Music theory",
                  ].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => {
                        setSearchQuery(suggestion);
                        navigate(
                          `/youtube-search?q=${encodeURIComponent(suggestion)}`
                        );
                      }}
                      className="bg-white text-[#1A73E8] border border-[#1A73E8] rounded-full px-4 py-2 hover:bg-[#1A73E8] hover:text-white transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* History Tab */}
        {activeTab === "history" && (
          <div className="space-y-8">
            {/* Search History */}
            {searchHistory.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#212121] flex items-center gap-2">
                    <Search className="w-5 h-5" />
                    Search History
                  </h3>
                  <button
                    onClick={clearSearchHistory}
                    className="text-gray-500 hover:text-red-500 transition-colors flex items-center gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    Clear All
                  </button>
                </div>
                <div className="grid gap-3">
                  {searchHistory.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-[#F5F7FA] rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <button
                        onClick={() => searchFromHistory(item.query)}
                        className="flex-1 text-left font-medium text-[#212121] hover:text-[#1A73E8]"
                      >
                        {item.query}
                      </button>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">
                          {formatTimeAgo(item.timestamp)}
                        </span>
                        <button
                          onClick={() => removeFromSearchHistory(item.query)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Watch History */}
            {watchHistory.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#212121] flex items-center gap-2">
                    <History className="w-5 h-5" />
                    Watch History
                  </h3>
                  <button
                    onClick={clearWatchHistory}
                    className="text-gray-500 hover:text-red-500 transition-colors flex items-center gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    Clear All
                  </button>
                </div>
                <div className="grid gap-4">
                  {watchHistory.map((video) => (
                    <div
                      key={video.id + video.watchedAt}
                      className="flex gap-4 p-4 bg-[#F5F7FA] rounded-xl hover:bg-gray-100 transition-colors group"
                    >
                      <div
                        className="relative flex-shrink-0 cursor-pointer"
                        onClick={() => playVideo(video)}
                      >
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-32 h-20 rounded-lg object-cover"
                        />
                        <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
                          {video.duration}
                        </div>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center">
                          <Play
                            className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                            fill="currentColor"
                          />
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <button
                          onClick={() => playVideo(video)}
                          className="text-left w-full"
                        >
                          <h4 className="font-semibold text-[#212121] line-clamp-2 mb-1 hover:text-[#1A73E8]">
                            {video.title}
                          </h4>
                        </button>
                        <p className="text-sm text-gray-600 mb-1">
                          {video.channel}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                          <span>{video.views}</span>
                          <span>•</span>
                          <span>{video.uploadTime}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            Watched {formatTimeAgo(video.watchedAt)}
                          </span>
                          <button
                            onClick={() => removeFromWatchHistory(video.id)}
                            className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Empty History State */}
            {searchHistory.length === 0 && watchHistory.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-2xl font-bold text-[#212121] mb-2">
                  No History Yet
                </h3>
                <p className="text-gray-600 mb-6">
                  Start searching and watching videos to build your history!
                </p>
                <button
                  onClick={() => setActiveTab("search")}
                  className="bg-[#1A73E8] text-white rounded-full px-6 py-3 hover:bg-[#1557B0] transition-colors"
                >
                  Start Exploring
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default YouTubeSearchPage;
