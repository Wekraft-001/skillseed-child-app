import React, { useEffect, useState } from "react";
import axios from "axios";
import { PageMetadata } from "../components/PageMetadata";
import {
  ArrowLeft,
  Star,
  Heart,
  Users,
  Palette,
  Microscope,
  Code,
  Stethoscope,
  Utensils,
  Rocket,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import CareerDetailsModal from "../components/CareerDetailsModal";

const LoadingScreen = () => (
  <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center">
    <div className="bg-white rounded-2xl p-8 flex flex-col items-center shadow-2xl">
      <div className="relative mb-4">
        <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin border-t-blue-500"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl animate-pulse">🤖</span>
        </div>
      </div>
      <div className="text-gray-700 font-medium text-lg mb-2">
        Getting your career recommendations
      </div>
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
        <div
          className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
      </div>
    </div>
  </div>
);

const CareerRecommendation = () => {
  const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;
  const token = localStorage.getItem("childToken");
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { analysis, answers, quizId, ageRange, user } = location.state || {};
  const userId = user?._id;

  const careerData1 = {
    artist: {
      id: "artist",
      title: "Artist",
      icon: "🎨",
      description:
        "Create beautiful artwork and express your creativity through drawing, painting, and design.",
      matchPercentage: 98,
      skills: [
        "Drawing & Painting",
        "Color Theory",
        "Creative Thinking",
        "Attention to Detail",
      ],
      dailyTasks: [
        "Sketch new ideas",
        "Mix colors and paint",
        "Show artwork to people",
        "Learn new art techniques",
      ],
      education:
        "Art classes in school, practice at home, and maybe art college when you're older!",
      salary:
        "Artists can make $30,000 to $100,000+ per year depending on their specialty!",
      funFacts: [
        "The most expensive painting ever sold was $450 million!",
        "Artists use both sides of their brain - creative and logical!",
        "You can be an artist and work on movies, video games, or books!",
      ],
    },
    scientist: {
      id: "scientist",
      title: "Scientist",
      icon: "🔬",
      description:
        "Discover amazing things about the world through experiments and research.",
      matchPercentage: 95,
      skills: ["Observation", "Critical Thinking", "Math Skills", "Curiosity"],
      dailyTasks: [
        "Conduct experiments",
        "Record observations",
        "Analyze data",
        "Share discoveries",
      ],
      education:
        "Good grades in science and math, then college and maybe graduate school!",
      salary: "Scientists typically earn $50,000 to $150,000+ per year!",
      funFacts: [
        "Scientists have discovered over 1.5 million animal species!",
        "Marie Curie was the first woman to win a Nobel Prize!",
        "Scientists work everywhere - from labs to space stations!",
      ],
    },
  };

  useEffect(() => {
    const fetchRecommendations = async () => {
      if (!quizId) {
        setError("Quiz ID not found. Please take the quiz first.");
        setLoading(false);
        return;
      }

      if (!userId) {
        setError("User ID not found. Please take the quiz first.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await axios.get(
          `${apiURL}/ai/career-recommendations`,
          {
            params: {
              childId: userId,
              quizId: quizId,
            },
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
        setRecommendations(response.data);
      } catch (error) {
        console.error("Failed to fetch recommendations:", error);
        setError("Failed to load recommendations. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [apiURL, token, quizId, userId]);

  if (!quizId && !loading) {
    return (
      <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">
            No quiz data found. Please take the quiz first.
          </p>
          <button
            onClick={() => navigate("/quizHome")}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Take Quiz
          </button>
        </div>
      </div>
    );
  }

  // Loading state
  if (loading) {
    return <LoadingScreen />;
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-red-600 mb-4">{error}</p>
          <div className="space-x-4">
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
            >
              Try Again
            </button>
            <button
              onClick={() => navigate("/results")}
              className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600"
            >
              Back to Results
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Helper function to get career icon based on title
  const getCareerIcon = (title) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes("artist") || titleLower.includes("art"))
      return "🎨";
    if (titleLower.includes("scientist") || titleLower.includes("research"))
      return "🔬";
    if (titleLower.includes("teacher") || titleLower.includes("education"))
      return "👩‍🏫";
    if (titleLower.includes("doctor") || titleLower.includes("medical"))
      return "👨‍⚕️";
    if (titleLower.includes("engineer") || titleLower.includes("technology"))
      return "👨‍💻";
    if (titleLower.includes("chef") || titleLower.includes("cook")) return "🍰";
    if (titleLower.includes("astronaut") || titleLower.includes("space"))
      return "🚀";
    if (titleLower.includes("vet") || titleLower.includes("animal"))
      return "🐾";
    if (titleLower.includes("musician") || titleLower.includes("music"))
      return "🎵";
    if (titleLower.includes("writer") || titleLower.includes("author"))
      return "✍️";
    return "⭐"; // Default icon
  };

  // Helper function to get career color based on index
  const getCareerColor = (index) => {
    const colors = [
      {
        bg: "bg-[#1A73E8]",
        hover: "hover:bg-[#1557b0]",
        accent: "bg-[#1A73E8]/10",
      },
      {
        bg: "bg-[#4CAF50]",
        hover: "hover:bg-[#45a049]",
        accent: "bg-[#4CAF50]/10",
      },
      {
        bg: "bg-[#FF4081]",
        hover: "hover:bg-[#e91e63]",
        accent: "bg-[#FF4081]/10",
      },
      {
        bg: "bg-[#9C27B0]",
        hover: "hover:bg-[#7b1fa2]",
        accent: "bg-[#9C27B0]/10",
      },
      {
        bg: "bg-[#FF5722]",
        hover: "hover:bg-[#e64a19]",
        accent: "bg-[#FF5722]/10",
      },
      {
        bg: "bg-[#607D8B]",
        hover: "hover:bg-[#546e7a]",
        accent: "bg-[#607D8B]/10",
      },
    ];
    return colors[index % colors.length];
  };

  const handleCareerClick = (career) => {
    setSelectedCareer(career);
    setIsModalOpen(true);
  };

  const handleSaveResults = () => {
    setIsSaved(true);
    console.log("Career recommendations saved!");
    setTimeout(() => {
      alert(
        "🎉 Your career recommendations have been saved! You can find them in your profile."
      );
    }, 100);
  };
  return (
    <>
      <PageMetadata
        title="Career Recommendations | SkillSeed"
        description="Your personalized AI career recommendations based on your interests and skills"
      />
      <main className="bg-[#F5F7FA] min-h-screen">
        {/* Main Content */}
        <div className="container mx-auto px-6 py-8">
          {/* Hero Section */}
          <section
            id="recommendations-hero"
            className="relative bg-gradient-to-br from-[#1A73E8]/10 via-[#FFC107]/10 to-[#FF4081]/10 rounded-3xl p-8 mb-8 overflow-hidden h-[300px] flex items-center"
          >
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

            <button
              onClick={() => navigate("/career-recommendation")}
              className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-[#1A73E8]" />
            </button>

            <div className="text-center w-full z-10">
              <h1 className="text-4xl font-bold text-[#212121] mb-4">
                🎉 Your AI Career Recommendations! 🎉
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Based on your answers, here are some amazing careers perfect for
                you!
              </p>
              <div className="flex justify-center">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                  alt="Emma"
                  className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
                />
              </div>
            </div>
          </section>

          {/* AI Analysis Section */}
          <section id="ai-analysis" className="mb-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-4 right-4 w-12 h-12 bg-[#1A73E8]/10 rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 left-8 w-8 h-8 bg-[#FFC107]/20 rounded-full animate-bounce"></div>

              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🤖</div>
                <h2 className="text-2xl font-bold text-[#212121] mb-4">
                  AI Analysis Complete!
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our AI has analyzed your quiz responses to find the perfect
                  career matches.
                  {recommendations?.careers?.length &&
                    ` We found ${recommendations.careers.length} great options for you!`}
                </p>
              </div>

              {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-[#1A73E8]/10 to-[#1A73E8]/5 rounded-2xl p-6 text-center">
                  <div className="text-3xl mb-3">🎨</div>
                  <h3 className="font-semibold text-[#212121] mb-2">
                    Creative Mind
                  </h3>
                  <p className="text-sm text-gray-600">
                    You love expressing yourself through art and creativity!
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#4CAF50]/10 to-[#4CAF50]/5 rounded-2xl p-6 text-center">
                  <div className="text-3xl mb-3">🔬</div>
                  <h3 className="font-semibold text-[#212121] mb-2">
                    Curious Explorer
                  </h3>
                  <p className="text-sm text-gray-600">
                    You enjoy discovering how things work and solving problems!
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#FF4081]/10 to-[#FF4081]/5 rounded-2xl p-6 text-center">
                  <div className="text-3xl mb-3">👥</div>
                  <h3 className="font-semibold text-[#212121] mb-2">
                    Team Player
                  </h3>
                  <p className="text-sm text-gray-600">
                    You work well with others and love helping people!
                  </p>
                </div>
              </div> */}
              {recommendations?.analysis && (
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    {recommendations.analysis}
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Career Recommendations */}
          <section id="career-recommendations" className="mb-8">
            <h2 className="text-2xl font-bold text-[#212121] mb-6 text-center">
              🌟 Perfect Careers For You! 🌟
            </h2>

            <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 hidden">
              {/* Career Card 1 */}
              <div className="career-card bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden cursor-pointer">
                <div className="absolute top-4 right-4 w-8 h-8 bg-[#1A73E8]/10 rounded-full animate-pulse"></div>
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">🎨</div>
                  <h3 className="text-xl font-bold text-[#212121] mb-2">
                    Artist
                  </h3>
                  <div className="flex justify-center mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#FFC107] text-[#FFC107]"
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      98% Match
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Draw beautiful pictures and create amazing artwork!
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Palette className="w-4 h-4 text-[#1A73E8]" />
                    <span className="text-sm text-gray-600">Draw & Paint</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-[#FF4081]" />
                    <span className="text-sm text-gray-600">
                      Fun & Creative
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#FFC107]" />
                    <span className="text-sm text-gray-600">
                      Express Yourself
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleCareerClick("artist")}
                  className="w-full mt-4 bg-[#1A73E8] text-white py-3 rounded-full font-medium hover:bg-[#1557b0] transition-colors"
                >
                  Learn More! 🚀
                </button>
              </div>

              {/* Career Card 2 */}
              <div className="career-card bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden cursor-pointer">
                <div className="absolute top-4 right-4 w-8 h-8 bg-[#4CAF50]/10 rounded-full animate-pulse"></div>
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">🔬</div>
                  <h3 className="text-xl font-bold text-[#212121] mb-2">
                    Scientist
                  </h3>
                  <div className="flex justify-center mb-3">
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#FFC107] text-[#FFC107]"
                        />
                      ))}
                      <Star className="w-4 h-4 text-gray-300" />
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      95% Match
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Discover cool things about animals, space, and nature!
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Microscope className="w-4 h-4 text-[#4CAF50]" />
                    <span className="text-sm text-gray-600">
                      Do Experiments
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Microscope className="w-4 h-4 text-[#1A73E8]" />
                    <span className="text-sm text-gray-600">
                      Explore & Discover
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#FFC107]" />
                    <span className="text-sm text-gray-600">
                      Learn New Things
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleCareerClick("scientist")}
                  className="w-full mt-4 bg-[#4CAF50] text-white py-3 rounded-full font-medium hover:bg-[#45a049] transition-colors"
                >
                  Learn More! 🔬
                </button>
              </div>

              {/* Career Card 3 */}
              <div className="career-card bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden cursor-pointer">
                <div className="absolute top-4 right-4 w-8 h-8 bg-[#FF4081]/10 rounded-full animate-pulse"></div>
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">👩‍🏫</div>
                  <h3 className="text-xl font-bold text-[#212121] mb-2">
                    Teacher
                  </h3>
                  <div className="flex justify-center mb-3">
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#FFC107] text-[#FFC107]"
                        />
                      ))}
                      <Star className="w-4 h-4 text-gray-300" />
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      92% Match
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Help other kids learn and grow every day!
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-[#1A73E8]" />
                    <span className="text-sm text-gray-600">
                      Share Knowledge
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#FF4081]" />
                    <span className="text-sm text-gray-600">Help Others</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-[#FFC107]" />
                    <span className="text-sm text-gray-600">
                      Make Kids Happy
                    </span>
                  </div>
                </div>

                <button className="w-full mt-4 bg-[#FF4081] text-white py-3 rounded-full font-medium hover:bg-[#e91e63] transition-colors">
                  Learn More! 📚
                </button>
              </div>

              {/* Career Card 4 */}
              <div className="career-card bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden cursor-pointer">
                <div className="absolute top-4 right-4 w-8 h-8 bg-[#9C27B0]/10 rounded-full animate-pulse"></div>
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">🐾</div>
                  <h3 className="text-xl font-bold text-[#212121] mb-2">
                    Veterinarian
                  </h3>
                  <div className="flex justify-center mb-3">
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#FFC107] text-[#FFC107]"
                        />
                      ))}
                      <Star className="w-4 h-4 text-gray-300" />
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      89% Match
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Take care of animals and help them feel better!
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-[#FF4081]" />
                    <span className="text-sm text-gray-600">Love Animals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Stethoscope className="w-4 h-4 text-[#9C27B0]" />
                    <span className="text-sm text-gray-600">Help Pets</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-[#4CAF50]" />
                    <span className="text-sm text-gray-600">Animal Friend</span>
                  </div>
                </div>

                <button className="w-full mt-4 bg-[#9C27B0] text-white py-3 rounded-full font-medium hover:bg-[#7b1fa2] transition-colors">
                  Learn More! 🐕
                </button>
              </div>

              {/* Career Card 5 */}
              <div className="career-card bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden cursor-pointer">
                <div className="absolute top-4 right-4 w-8 h-8 bg-[#FF5722]/10 rounded-full animate-pulse"></div>
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">🍰</div>
                  <h3 className="text-xl font-bold text-[#212121] mb-2">
                    Chef
                  </h3>
                  <div className="flex justify-center mb-3">
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#FFC107] text-[#FFC107]"
                        />
                      ))}
                      <Star className="w-4 h-4 text-gray-300" />
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      87% Match
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Cook yummy food and make people smile!
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-[#FF5722]" />
                    <span className="text-sm text-gray-600">Cook Food</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#FFC107]" />
                    <span className="text-sm text-gray-600">Be Creative</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-[#4CAF50]" />
                    <span className="text-sm text-gray-600">
                      Make People Happy
                    </span>
                  </div>
                </div>

                <button className="w-full mt-4 bg-[#FF5722] text-white py-3 rounded-full font-medium hover:bg-[#e64a19] transition-colors">
                  Learn More! 👨‍🍳
                </button>
              </div>

              {/* Career Card 6 */}
              <div className="career-card bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden cursor-pointer">
                <div className="absolute top-4 right-4 w-8 h-8 bg-[#607D8B]/10 rounded-full animate-pulse"></div>
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">🚀</div>
                  <h3 className="text-xl font-bold text-[#212121] mb-2">
                    Astronaut
                  </h3>
                  <div className="flex justify-center mb-3">
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#FFC107] text-[#FFC107]"
                        />
                      ))}
                      <Star className="w-4 h-4 text-gray-300" />
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      85% Match
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Explore space and discover new worlds!
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Rocket className="w-4 h-4 text-[#607D8B]" />
                    <span className="text-sm text-gray-600">
                      Space Explorer
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#FFC107]" />
                    <span className="text-sm text-gray-600">Adventure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Microscope className="w-4 h-4 text-[#4CAF50]" />
                    <span className="text-sm text-gray-600">
                      Science & Discovery
                    </span>
                  </div>
                </div>

                <button className="w-full mt-4 bg-[#607D8B] text-white py-3 rounded-full font-medium hover:bg-[#546e7a] transition-colors">
                  Learn More! 🚀
                </button>
              </div>
            </div>

            {recommendations?.careers && recommendations.careers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendations.careers.map((career, index) => {
                  const colorScheme = getCareerColor(index);
                  const icon = getCareerIcon(career.title);

                  return (
                    <div
                      key={career.id || index}
                      className="career-card bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden cursor-pointer"
                    >
                      <div
                        className={`absolute top-4 right-4 w-8 h-8 ${colorScheme.accent} rounded-full animate-pulse`}
                      ></div>
                      <div className="text-center mb-4">
                        <div className="text-5xl mb-3">{icon}</div>
                        <h3 className="text-xl font-bold text-[#212121] mb-2">
                          {career.title}
                        </h3>
                        {career.matchPercentage && (
                          <div className="flex justify-center mb-3">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(career.matchPercentage / 20)
                                      ? "fill-[#FFC107] text-[#FFC107]"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="ml-2 text-sm text-gray-600">
                              {career.matchPercentage}% Match
                            </span>
                          </div>
                        )}
                        <p className="text-gray-600 text-sm mb-4">
                          {career.description}
                        </p>
                      </div>

                      <div className="space-y-3">
                        {career.skills &&
                          career.skills.slice(0, 3).map((skill, skillIndex) => (
                            <div
                              key={skillIndex}
                              className="flex items-center gap-2"
                            >
                              <Star className="w-4 h-4 text-[#FFC107]" />
                              <span className="text-sm text-gray-600">
                                {skill}
                              </span>
                            </div>
                          ))}
                      </div>

                      <button
                        onClick={() => handleCareerClick(career)}
                        className={`w-full mt-4 ${colorScheme.bg} text-white py-3 rounded-full font-medium ${colorScheme.hover} transition-colors`}
                      >
                        Learn More! ✨
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">
                  No career recommendations available at the moment.
                </p>
                <button
                  onClick={() => navigate("/quizHome")}
                  className="bg-[#1A73E8] text-white px-6 py-3 rounded-lg hover:bg-[#1557b0]"
                >
                  Take Quiz Again
                </button>
              </div>
            )}
          </section>

          {/* Action Buttons */}
          <section className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                navigate("/results", {
                  state: { analysis, answers, quizId, ageRange, userId },
                })
              }
              className="bg-white text-[#1A73E8] border-2 border-[#1A73E8] px-8 py-3 rounded-full font-medium hover:bg-[#1A73E8]/10 transition-colors flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Results
            </button>
            <button
              onClick={() => navigate("/quizHome")}
              className="bg-white text-[#1A73E8] border-2 border-[#1A73E8] px-8 py-3 rounded-full font-medium hover:bg-[#1A73E8]/10 transition-colors flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Take Quiz Again
            </button>
            <button
              onClick={handleSaveResults}
              className={`px-8 py-3 rounded-full font-medium transition-colors flex items-center justify-center gap-2 ${
                isSaved
                  ? "bg-[#4CAF50] text-white"
                  : "bg-[#1A73E8] text-white hover:bg-[#1557b0]"
              }`}
            >
              {isSaved ? "✅ Saved!" : "Save Results"}
              <Star className="w-4 h-4" />
            </button>
          </section>
        </div>

        {/* Career Details Modal */}
        <CareerDetailsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          career={selectedCareer}
        />
      </main>
    </>
  );
};

export default CareerRecommendation;
