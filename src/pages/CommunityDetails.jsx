import React, { useState } from "react";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { PageMetadata } from "../components/PageMetadata";
import {
  ArrowLeft,
  TrendingUp,
  Users,
  Lightbulb,
  Heart,
  MessageCircle,
  Share2,
  Loader2,
  Send,
  Clock,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

const CommunityDetail = () => {
  const navigate = useNavigate();
  const { communityId } = useParams();
  const queryClient = useQueryClient();
  const [newPost, setNewPost] = useState("");
  const [isSubmittingPost, setIsSubmittingPost] = useState(false);

  const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;
  const token = localStorage.getItem("childToken");
  const currentUserId = localStorage.getItem("childId"); // Assuming user ID is stored

  // Function to get category details (same as in Community component)
  const getCategoryDetails = (category) => {
    const categoryMap = {
      science: {
        icon: "🔬",
        gradient: "from-[#4CAF50]/20 to-[#4CAF50]/10",
        buttonColor: "bg-[#4CAF50] hover:bg-[#45a049]",
        bubbleColor: "bg-[#4CAF50]/30",
      },
      art: {
        icon: "🎨",
        gradient: "from-[#FF4081]/20 to-[#FF4081]/10",
        buttonColor: "bg-[#FF4081] hover:bg-[#e91e63]",
        bubbleColor: "bg-[#FF4081]/30",
      },
      technology: {
        icon: "💻",
        gradient: "from-[#1A73E8]/20 to-[#1A73E8]/10",
        buttonColor: "bg-[#1A73E8] hover:bg-[#1557b0]",
        bubbleColor: "bg-[#1A73E8]/30",
      },
      tech: {
        icon: "💻",
        gradient: "from-[#1A73E8]/20 to-[#1A73E8]/10",
        buttonColor: "bg-[#1A73E8] hover:bg-[#1557b0]",
        bubbleColor: "bg-[#1A73E8]/30",
      },
      math: {
        icon: "🔢",
        gradient: "from-[#9C27B0]/20 to-[#9C27B0]/10",
        buttonColor: "bg-[#9C27B0] hover:bg-[#7B1FA2]",
        bubbleColor: "bg-[#9C27B0]/30",
      },
      sports: {
        icon: "⚽",
        gradient: "from-[#FF5722]/20 to-[#FF5722]/10",
        buttonColor: "bg-[#FF5722] hover:bg-[#E64A19]",
        bubbleColor: "bg-[#FF5722]/30",
      },
      music: {
        icon: "🎵",
        gradient: "from-[#FFC107]/20 to-[#FFC107]/10",
        buttonColor: "bg-[#FFC107] hover:bg-[#FFB300]",
        bubbleColor: "bg-[#FFC107]/30",
      },
      reading: {
        icon: "📚",
        gradient: "from-[#607D8B]/20 to-[#607D8B]/10",
        buttonColor: "bg-[#607D8B] hover:bg-[#546E7A]",
        bubbleColor: "bg-[#607D8B]/30",
      },
      default: {
        icon: "🌟",
        gradient: "from-[#4CAF50]/20 to-[#4CAF50]/10",
        buttonColor: "bg-[#4CAF50] hover:bg-[#45a049]",
        bubbleColor: "bg-[#4CAF50]/30",
      },
    };

    return categoryMap[category?.toLowerCase()] || categoryMap.default;
  };

  // Fetch community details
  const getCommunityDetails = async () => {
    const res = await axios.get(
      `${apiURL}/student/dashboard/communities/${communityId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Community details:", res.data);
    return res.data;
  };

  const {
    data: community,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["community", communityId],
    queryFn: getCommunityDetails,
    enabled: !!communityId,
    staleTime: 5 * 60 * 1000,
  });

  // Fetch community posts
  const getCommunityPosts = async () => {
    const res = await axios.get(
      `${apiURL}/student/dashboard/communities/${communityId}/posts`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Community posts:", res.data);
    return res.data;
  };

  const {
    data: posts = [],
    isLoading: postsLoading,
    isError: postsError,
    refetch: refetchPosts,
  } = useQuery({
    queryKey: ["communityPosts", communityId],
    queryFn: getCommunityPosts,
    enabled: !!communityId && !!community?.hasJoined, // Only fetch if user has joined
    staleTime: 2 * 60 * 1000, // 2 minutes
  });

  // Create post mutation
  const createPostMutation = useMutation({
    mutationFn: async (postContent) => {
      const res = await axios.post(
        `${apiURL}/student/dashboard/communities/${communityId}/posts`,
        {
          content: postContent,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return res.data;
    },
    onMutate: () => {
      setIsSubmittingPost(true);
    },
    onSuccess: () => {
      setNewPost("");
      refetchPosts();
      queryClient.invalidateQueries(["communityPosts", communityId]);
    },
    onError: (error) => {
      console.error("Error creating post:", error);
      // You might want to show an error toast here
    },
    onSettled: () => {
      setIsSubmittingPost(false);
    },
  });

  // Like post mutation
  const likePostMutation = useMutation({
    mutationFn: async (postId) => {
      const res = await axios.post(
        `${apiURL}/student/dashboard/communities/${communityId}/posts/${postId}/like`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return res.data;
    },
    onSuccess: () => {
      refetchPosts();
    },
    onError: (error) => {
      console.error("Error liking post:", error);
    },
  });

  // Join community mutation
  const joinMutation = useMutation({
    mutationFn: async () => {
      const res = await axios.post(
        `${apiURL}/student/dashboard/communities/${communityId}/join`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return res.data;
    },
    onSuccess: () => {
      // Refresh community data
      queryClient.invalidateQueries(["community", communityId]);
      queryClient.invalidateQueries(["communities"]);
    },
    onError: (error) => {
      console.error("Error joining community:", error);
    },
  });

  // Leave community mutation
  const leaveMutation = useMutation({
    mutationFn: async () => {
      const res = await axios.post(
        `${apiURL}/student/dashboard/communities/${communityId}/leave`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return res.data;
    },
    onSuccess: () => {
      // Refresh community data
      queryClient.invalidateQueries(["community", communityId]);
      queryClient.invalidateQueries(["communities"]);
    },
    onError: (error) => {
      console.error("Error leaving community:", error);
    },
  });

  const handleBackClick = () => {
    navigate("/community");
  };

  const handleCreatePost = () => {
    if (newPost.trim() && !isSubmittingPost) {
      createPostMutation.mutate(newPost.trim());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleCreatePost();
    }
  };

  const handleLikePost = (postId) => {
    likePostMutation.mutate(postId);
  };

  const formatTimeAgo = (dateString) => {
    const now = new Date();
    const postDate = new Date(dateString);
    const diffInMinutes = Math.floor((now - postDate) / (1000 * 60));

    if (diffInMinutes < 1) return "just now";
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    if (diffInMinutes < 10080)
      return `${Math.floor(diffInMinutes / 1440)}d ago`;

    return postDate.toLocaleDateString();
  };

  const getRandomAvatar = (index = 0) => {
    const avatars = [
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg",
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg",
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-9.jpg",
    ];
    return avatars[index % avatars.length];
  };

  const handleJoinCommunity = () => {
    if (community?.hasJoined) {
      leaveMutation.mutate();
    } else {
      joinMutation.mutate();
    }
  };

  // Generate random avatars for display
  const getRandomAvatars = (memberCount) => {
    const avatars = [
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg",
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg",
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-9.jpg",
    ];

    const displayCount = Math.min(3, memberCount);
    const remainingCount = Math.max(0, memberCount - displayCount);

    return {
      avatars: avatars.slice(0, displayCount),
      remainingCount,
    };
  };

  if (isLoading) {
    return (
      <>
        <PageMetadata
          title="Community Details | SkillSeed"
          description="View community details and join the conversation"
        />
        <main className="bg-[#F5F7FA] min-h-screen">
          <div className="container mx-auto px-6 py-8">
            <div className="flex items-center justify-center h-64">
              <div className="flex items-center gap-3">
                <Loader2 className="w-8 h-8 animate-spin text-[#1A73E8]" />
                <span className="text-xl text-gray-600">
                  Loading community...
                </span>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <PageMetadata
          title="Community Details | SkillSeed"
          description="View community details and join the conversation"
        />
        <main className="bg-[#F5F7FA] min-h-screen">
          <div className="container mx-auto px-6 py-8">
            {/* Back Button */}
            <div className="mb-6">
              <button
                onClick={handleBackClick}
                className="flex items-center gap-2 text-[#1A73E8] hover:text-[#0f5cb8] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Communities</span>
              </button>
            </div>

            <div className="text-center py-12">
              <div className="text-6xl mb-4">😞</div>
              <h2 className="text-2xl font-bold text-gray-700 mb-4">
                Community Not Found
              </h2>
              <p className="text-gray-600 mb-6">
                {error?.response?.status === 404
                  ? "This community doesn't exist or you don't have access to it."
                  : "We couldn't load the community details right now."}
              </p>
              <button
                onClick={handleBackClick}
                className="bg-[#1A73E8] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1557b0] transition-colors"
              >
                Back to Communities
              </button>
            </div>
          </div>
        </main>
      </>
    );
  }

  if (!community) {
    return null;
  }

  const categoryDetails = getCategoryDetails(community.category);
  const { avatars, remainingCount } = getRandomAvatars(community.memberCount);
  const isJoining = joinMutation.isPending;
  const isLeaving = leaveMutation.isPending;

  return (
    <>
      <PageMetadata
        title={`${community.name} | Community Details`}
        description={community.description}
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
            className={`relative bg-gradient-to-br ${categoryDetails.gradient} rounded-3xl p-8 mb-8 overflow-hidden h-[250px] flex items-center`}
          >
            {/* Floating Bubbles */}
            <div
              className={`absolute top-4 right-8 w-12 h-12 ${categoryDetails.bubbleColor} rounded-full animate-pulse`}
            ></div>
            <div
              className={`absolute bottom-8 left-12 w-8 h-8 ${categoryDetails.bubbleColor} rounded-full animate-bounce`}
            ></div>
            <div
              className={`absolute top-12 left-1/3 w-6 h-6 ${categoryDetails.bubbleColor} rounded-full animate-bounce`}
              style={{ animationDelay: "0.3s" }}
            ></div>
            <div
              className={`absolute bottom-4 right-1/4 w-10 h-10 ${categoryDetails.bubbleColor} rounded-full animate-pulse`}
              style={{ animationDelay: "0.7s" }}
            ></div>

            <div className="flex items-center justify-between w-full z-10">
              <div className="flex items-center gap-6">
                <div className="text-6xl">{categoryDetails.icon}</div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold text-[#212121]">
                      {community.name}
                    </h1>
                    <span className="text-sm bg-white/80 px-3 py-1 rounded-full text-gray-600 font-medium">
                      Ages {community.ageGroup}
                    </span>
                  </div>
                  <p className="text-lg text-gray-600 mb-4">
                    {community.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      {avatars.map((avatar, index) => (
                        <img
                          key={index}
                          src={avatar}
                          alt="Member"
                          className="w-10 h-10 rounded-full border-2 border-white"
                        />
                      ))}
                      {remainingCount > 0 && (
                        <div
                          className={`w-10 h-10 ${
                            categoryDetails.buttonColor.split(" ")[0]
                          } rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-bold`}
                        >
                          +{remainingCount}
                        </div>
                      )}
                      {community.memberCount === 0 && (
                        <div className="w-10 h-10 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center text-gray-400">
                          <Users className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                    <span className="text-[#212121] font-semibold">
                      {community.memberCount}{" "}
                      {community.memberCount === 1
                        ? "amazing explorer!"
                        : "amazing explorers!"}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleJoinCommunity}
                disabled={isJoining || isLeaving}
                className={`p-4 rounded-3xl font-semibold transition-colors min-w-[120px] ${
                  community.hasJoined
                    ? "bg-gray-300 text-gray-600 hover:bg-red-500 hover:text-white"
                    : categoryDetails.buttonColor + " text-white"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isJoining ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Joining...
                  </span>
                ) : isLeaving ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Leaving...
                  </span>
                ) : community.hasJoined ? (
                  "Leave"
                ) : (
                  "Join 🚀"
                )}
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
                      {/* Create Post - Only show if joined */}
                      {community.hasJoined && (
                        <div
                          id="create-post"
                          className="bg-white rounded-3xl p-6 shadow-sm"
                        >
                          <div className="flex items-start gap-4 mb-4">
                            <img
                              src={getRandomAvatar(0)}
                              alt="You"
                              className={`w-12 h-12 rounded-full border-2 ${
                                categoryDetails.buttonColor.includes("4CAF50")
                                  ? "border-[#4CAF50]"
                                  : categoryDetails.buttonColor.includes(
                                      "FF4081"
                                    )
                                  ? "border-[#FF4081]"
                                  : "border-[#1A73E8]"
                              }`}
                            />
                            <div className="flex-1">
                              <textarea
                                value={newPost}
                                onChange={(e) => setNewPost(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder={`Share your amazing ${
                                  community.category?.toLowerCase() ||
                                  "discovery"
                                }! ${categoryDetails.icon}`}
                                className="w-full bg-gray-100 rounded-2xl px-4 py-3 text-gray-700 resize-none min-h-[100px] focus:outline-none focus:ring-2 focus:ring-opacity-20 focus:ring-current"
                                style={{
                                  "--tw-ring-color":
                                    categoryDetails.buttonColor.includes(
                                      "4CAF50"
                                    )
                                      ? "#4CAF50"
                                      : categoryDetails.buttonColor.includes(
                                          "FF4081"
                                        )
                                      ? "#FF4081"
                                      : "#1A73E8",
                                }}
                                disabled={isSubmittingPost}
                              />
                              <div className="flex justify-between items-center mt-3">
                                <span className="text-sm text-gray-500">
                                  {newPost.length}/500 characters
                                </span>
                                <button
                                  onClick={handleCreatePost}
                                  disabled={
                                    !newPost.trim() ||
                                    isSubmittingPost ||
                                    newPost.length > 500
                                  }
                                  className={`${categoryDetails.buttonColor} text-white px-6 py-2 rounded-full font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2`}
                                >
                                  {isSubmittingPost ? (
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                  ) : (
                                    <Send className="w-4 h-4" />
                                  )}
                                  {isSubmittingPost ? "Posting..." : "Share"}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Posts List */}
                      {postsLoading ? (
                        <div className="bg-white rounded-3xl p-8 shadow-sm text-center">
                          <Loader2 className="w-8 h-8 animate-spin text-[#1A73E8] mx-auto mb-4" />
                          <p className="text-gray-600">Loading posts...</p>
                        </div>
                      ) : postsError ? (
                        <div className="bg-white rounded-3xl p-8 shadow-sm text-center">
                          <div className="text-4xl mb-4">😞</div>
                          <h3 className="text-xl font-bold text-gray-700 mb-2">
                            Couldn't load posts
                          </h3>
                          <p className="text-gray-600 mb-4">
                            Something went wrong while loading posts.
                          </p>
                          <button
                            onClick={refetchPosts}
                            className="bg-[#1A73E8] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#1557b0] transition-colors"
                          >
                            Try again
                          </button>
                        </div>
                      ) : !community.hasJoined ? (
                        <div className="bg-white rounded-3xl p-8 shadow-sm text-center">
                          <div className="text-4xl mb-4">
                            {categoryDetails.icon}
                          </div>
                          <h3 className="text-xl font-bold text-gray-700 mb-2">
                            Join to see posts!
                          </h3>
                          <p className="text-gray-600">
                            Connect with other members and see what's happening
                            in the {community.name} community.
                          </p>
                        </div>
                      ) : posts.length === 0 ? (
                        <div className="bg-white rounded-3xl p-8 shadow-sm text-center">
                          <div className="text-4xl mb-4">📝</div>
                          <h3 className="text-xl font-bold text-gray-700 mb-2">
                            No posts yet!
                          </h3>
                          <p className="text-gray-600">
                            Be the first to share something amazing in this
                            community!
                          </p>
                        </div>
                      ) : (
                        posts.map((post, index) => (
                          <div
                            key={post._id || post.id || index}
                            className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <div className="flex items-center gap-3 mb-4">
                              <img
                                src={
                                  post.author?.avatar || getRandomAvatar(index)
                                }
                                alt={post.author?.name || "Community Member"}
                                className={`w-12 h-12 rounded-full border-2 ${
                                  categoryDetails.buttonColor.includes("4CAF50")
                                    ? "border-[#4CAF50]"
                                    : categoryDetails.buttonColor.includes(
                                        "FF4081"
                                      )
                                    ? "border-[#FF4081]"
                                    : "border-[#1A73E8]"
                                }`}
                              />
                              <div>
                                <h3 className="font-bold text-[#212121]">
                                  {post.author?.name ||
                                    `Community Member ${index + 1}`}
                                </h3>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                  <Clock className="w-3 h-3" />
                                  <span>{formatTimeAgo(post.createdAt)}</span>
                                  <span>•</span>
                                  <span>{community.name}</span>
                                </div>
                              </div>
                            </div>

                            <p className="text-[#212121] mb-4 whitespace-pre-wrap">
                              {post.content}
                            </p>

                            {/* Post Actions */}
                            <div className="flex items-center justify-between text-sm text-gray-500">
                              <div className="flex items-center gap-4">
                                <button
                                  onClick={() =>
                                    handleLikePost(post._id || post.id)
                                  }
                                  className={`flex items-center gap-2 transition-colors ${
                                    post.hasLiked
                                      ? `text-red-500 hover:text-red-600`
                                      : `hover:${
                                          categoryDetails.buttonColor.includes(
                                            "4CAF50"
                                          )
                                            ? "text-[#4CAF50]"
                                            : categoryDetails.buttonColor.includes(
                                                "FF4081"
                                              )
                                            ? "text-[#FF4081]"
                                            : "text-[#1A73E8]"
                                        }`
                                  }`}
                                  disabled={likePostMutation.isPending}
                                >
                                  <Heart
                                    className={`w-4 h-4 ${
                                      post.hasLiked ? "fill-current" : ""
                                    }`}
                                  />
                                  <span>{post.likesCount || 0} likes</span>
                                </button>
                                <button className="flex items-center gap-2 hover:text-[#1A73E8] transition-colors">
                                  <MessageCircle className="w-4 h-4" />
                                  <span>
                                    {post.commentsCount || 0} comments
                                  </span>
                                </button>
                              </div>
                              <button className="flex items-center gap-2 hover:text-[#FFC107] transition-colors">
                                <Share2 className="w-4 h-4" />
                                <span>Share</span>
                              </button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>

                    {/* Sidebar */}
                    <div id="community-sidebar" className="space-y-6">
                      {/* Community Stats */}
                      <div
                        id="community-stats"
                        className="bg-white rounded-3xl p-6 shadow-sm"
                      >
                        <h3
                          className={`font-bold text-[#212121] mb-4 flex items-center gap-2`}
                        >
                          <TrendingUp
                            className={`w-5 h-5 ${
                              categoryDetails.buttonColor.includes("4CAF50")
                                ? "text-[#4CAF50]"
                                : categoryDetails.buttonColor.includes("FF4081")
                                ? "text-[#FF4081]"
                                : "text-[#1A73E8]"
                            }`}
                          />
                          Community Stats
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Total Members</span>
                            <span
                              className={`font-bold ${
                                categoryDetails.buttonColor.includes("4CAF50")
                                  ? "text-[#4CAF50]"
                                  : categoryDetails.buttonColor.includes(
                                      "FF4081"
                                    )
                                  ? "text-[#FF4081]"
                                  : "text-[#1A73E8]"
                              }`}
                            >
                              {community.memberCount}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Age Group</span>
                            <span className="font-bold text-gray-700">
                              {community.ageGroup}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Category</span>
                            <span className="font-bold text-gray-700 capitalize">
                              {community.category}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Created</span>
                            <span className="font-bold text-gray-700">
                              {new Date(
                                community.createdAt
                              ).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Sample suggested communities (keeping original design) */}
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
                              View
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
                              View
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

                      {/* Achievement Cards - Keep original design for now */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-3xl p-6 shadow-sm border-l-4 border-[#FFC107]">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 bg-[#FFC107]/20 rounded-full flex items-center justify-center">
                              <span className="text-2xl">
                                {categoryDetails.icon}
                              </span>
                            </div>
                            <div>
                              <h3 className="font-bold text-[#212121]">
                                Master {community.category || "Explorer"}
                              </h3>
                              <p className="text-sm text-gray-600">
                                Complete 10{" "}
                                {community.category?.toLowerCase() ||
                                  "activities"}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">
                              Coming soon!
                            </span>
                            <span className="bg-[#FFC107] text-white px-3 py-1 rounded-full text-xs font-bold">
                              +500 pts
                            </span>
                          </div>
                        </div>

                        <div
                          className={`bg-white rounded-3xl p-6 shadow-sm border-l-4 ${
                            categoryDetails.buttonColor.includes("4CAF50")
                              ? "border-[#4CAF50]"
                              : categoryDetails.buttonColor.includes("FF4081")
                              ? "border-[#FF4081]"
                              : "border-[#1A73E8]"
                          }`}
                        >
                          <div className="flex items-center gap-4 mb-4">
                            <div
                              className={`w-16 h-16 ${
                                categoryDetails.gradient
                                  .replace("from-", "bg-")
                                  .split(" ")[0]
                              }/20 rounded-full flex items-center justify-center`}
                            >
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
                              Coming soon!
                            </span>
                            <span
                              className={`${categoryDetails.buttonColor} text-white px-3 py-1 rounded-full text-xs font-bold`}
                            >
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
                          <p className="text-gray-500 text-sm text-center py-4">
                            Leaderboard coming soon!
                          </p>
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
                        👥 Community Members ({community.memberCount})
                      </h2>

                      {community.memberCount === 0 ? (
                        <div className="bg-white rounded-3xl p-8 shadow-sm text-center">
                          <div className="text-4xl mb-4">👥</div>
                          <h3 className="text-xl font-bold text-gray-700 mb-2">
                            No members yet!
                          </h3>
                          <p className="text-gray-600">
                            Be the first to join this amazing community!
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <p className="text-gray-500 text-center py-4">
                            Member list coming soon! We're working on this
                            feature.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                      <div className="bg-white rounded-3xl p-6 shadow-sm">
                        <h3 className="font-bold text-[#212121] mb-4 flex items-center gap-2">
                          <Users
                            className={`w-5 h-5 ${
                              categoryDetails.buttonColor.includes("4CAF50")
                                ? "text-[#4CAF50]"
                                : categoryDetails.buttonColor.includes("FF4081")
                                ? "text-[#FF4081]"
                                : "text-[#1A73E8]"
                            }`}
                          />
                          Member Stats
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Total Members</span>
                            <span
                              className={`font-bold ${
                                categoryDetails.buttonColor.includes("4CAF50")
                                  ? "text-[#4CAF50]"
                                  : categoryDetails.buttonColor.includes(
                                      "FF4081"
                                    )
                                  ? "text-[#FF4081]"
                                  : "text-[#1A73E8]"
                              }`}
                            >
                              {community.memberCount}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">You've Joined</span>
                            <span
                              className={`font-bold ${
                                community.hasJoined
                                  ? "text-[#4CAF50]"
                                  : "text-gray-400"
                              }`}
                            >
                              {community.hasJoined ? "Yes" : "No"}
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
