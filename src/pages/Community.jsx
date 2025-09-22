import React, { useMemo } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { PageMetadata } from "../components/PageMetadata";
import { Star, Users, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Community = () => {
  const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;
  const token = localStorage.getItem("childToken");
  const age = parseInt(localStorage.getItem("childAge")) || 0;
  const navigate = useNavigate();

  // Function to determine if community is suitable for child's age
  const isAgeAppropriate = (ageGroup, childAge) => {
    if (!ageGroup || !childAge) return true; // Show all if age data is missing

    const [minAge, maxAge] = ageGroup
      .split("-")
      .map((age) => parseInt(age.trim()));
    return childAge >= minAge && childAge <= maxAge;
  };

  // Function to get category icon and colors
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

  const getCommunities = async () => {
    const res = await axios.get(`${apiURL}/student/dashboard/communities`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log(res.data);
    return res.data;
  };

  const {
    data: communities = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["communities"],
    queryFn: getCommunities,
    staleTime: 5 * 60 * 1000,
  });

  // Filter communities based on child's age
  const filteredCommunities = useMemo(() => {
    if (!Array.isArray(communities)) return [];

    return communities.filter((community) =>
      isAgeAppropriate(community.ageGroup, age)
    );
  }, [communities, age]);

  const handleCommunityClick = (communityId) => {
    navigate(`/community/${communityId}`);
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
          title="Community | SkillSeed"
          description="Connect with friends, share achievements, and learn together in amazing communities"
        />
        <main className="bg-[#F5F7FA] min-h-screen">
          <div className="container mx-auto px-6 py-8">
            <div className="flex items-center justify-center h-64">
              <div className="flex items-center gap-3">
                <Loader2 className="w-8 h-8 animate-spin text-[#1A73E8]" />
                <span className="text-xl text-gray-600">
                  Loading communities...
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
          title="Community | SkillSeed"
          description="Connect with friends, share achievements, and learn together in amazing communities"
        />
        <main className="bg-[#F5F7FA] min-h-screen">
          <div className="container mx-auto px-6 py-8">
            <div className="text-center py-12">
              <div className="text-6xl mb-4">😕</div>
              <h2 className="text-2xl font-bold text-gray-700 mb-4">
                Oops! Something went wrong
              </h2>
              <p className="text-gray-600 mb-6">
                We couldn't load the communities right now.
              </p>
              <button
                onClick={() => refetch()}
                className="bg-[#1A73E8] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1557b0] transition-colors"
              >
                Try Again 🔄
              </button>
            </div>
          </div>
        </main>
      </>
    );
  }

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
              <p className="text-xl text-gray-600 mb-2">
                Connect with friends, share your achievements, and learn
                together!
              </p>
              {/* {age > 0 && (
                <p className="text-lg text-gray-500 mb-6">
                  Showing communities perfect for age {age} ✨
                </p>
              )} */}
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

          {/* Communities Section */}
          <section id="featured-communities" className="mb-8">
            <h2 className="text-2xl font-bold text-[#212121] mb-6 flex items-center gap-3">
              <Star className="w-6 h-6 text-[#FFC107]" />
              Communities for You ({filteredCommunities.length})
            </h2>

            {filteredCommunities.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-3xl shadow-sm">
                <div className="text-6xl mb-4">🌱</div>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  No communities yet!
                </h3>
                <p className="text-gray-600 mb-6">
                  Communities matching your age group will appear here when
                  they're created.
                </p>
                <button
                  onClick={() => refetch()}
                  className="bg-[#1A73E8] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1557b0] transition-colors"
                >
                  Refresh 🔄
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCommunities.map((community) => {
                  const categoryDetails = getCategoryDetails(
                    community.category
                  );
                  const { avatars, remainingCount } = getRandomAvatars(
                    community.memberCount
                  );

                  return (
                    <div
                      key={community._id}
                      id={`community-${community._id}`}
                      className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer community-card"
                      onClick={() => handleCommunityClick(community._id)}
                    >
                      <div
                        className={`relative bg-gradient-to-br ${categoryDetails.gradient} p-6 h-32`}
                      >
                        <div
                          className={`absolute top-2 right-2 w-6 h-6 ${categoryDetails.bubbleColor} rounded-full animate-pulse`}
                        ></div>
                        <div
                          className={`absolute bottom-2 left-4 w-4 h-4 ${categoryDetails.bubbleColor} rounded-full animate-bounce`}
                        ></div>
                        <div className="text-4xl mb-2">
                          {categoryDetails.icon}
                        </div>
                        <h3 className="text-xl font-bold text-[#212121]">
                          {community.name}
                        </h3>
                        <span className="text-xs bg-white/80 px-2 py-1 rounded-full text-gray-600 font-medium">
                          Ages {community.ageGroup}
                        </span>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-600 mb-4">
                          {community.description}
                        </p>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex -space-x-2">
                            {avatars.map((avatar, index) => (
                              <img
                                key={index}
                                src={avatar}
                                alt="Member"
                                className="w-8 h-8 rounded-full border-2 border-white"
                              />
                            ))}
                            {remainingCount > 0 && (
                              <div
                                className={`w-8 h-8 ${
                                  categoryDetails.buttonColor.split(" ")[0]
                                } rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold`}
                              >
                                +{remainingCount}
                              </div>
                            )}
                            {community.memberCount === 0 && (
                              <div className="w-8 h-8 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center text-gray-400 text-xs font-bold">
                                <Users className="w-4 h-4" />
                              </div>
                            )}
                          </div>
                          <span className="text-sm text-gray-500">
                            {community.memberCount}{" "}
                            {community.memberCount === 1 ? "member" : "members"}
                          </span>
                        </div>
                        <button
                          className={`w-full ${categoryDetails.buttonColor} text-white py-3 rounded-full font-semibold transition-colors`}
                        >
                          Join Community 🚀
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
};

export default Community;
