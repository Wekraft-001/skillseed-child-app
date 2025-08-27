import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import CareerDetailsModal from "../components/CareerDetailsModal";

const CareerRecommendation = () => {
  const navigate = useNavigate();
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const careerData = {
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

  const handleCareerClick = (careerId) => {
    setSelectedCareer(careerData[careerId] || null);
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
                  Our smart AI has analyzed your interests, skills, and
                  personality to find the perfect career matches for you. Here's
                  what we discovered about you!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
              </div>
            </div>
          </section>

          {/* Career Recommendations */}
          <section id="career-recommendations" className="mb-8">
            <h2 className="text-2xl font-bold text-[#212121] mb-6 text-center">
              🌟 Perfect Careers For You! 🌟
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          </section>

          {/* Action Buttons */}
          <section className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/career-recommendation")}
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
