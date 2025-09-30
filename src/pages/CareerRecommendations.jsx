import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArrowLeft, Star, Sparkles } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const LoadingScreen = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-6">
    <div className="bg-white rounded-3xl p-12 flex flex-col items-center shadow-xl max-w-md w-full">
      <div className="relative mb-6">
        <div className="w-20 h-20 border-4 border-blue-200 rounded-full animate-spin border-t-blue-500"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-blue-500 animate-pulse" />
        </div>
      </div>
      <h3 className="text-gray-800 font-semibold text-xl mb-2">
        Analyzing Your Responses
      </h3>
      <p className="text-gray-600 text-center">
        Discovering the perfect careers for you...
      </p>
    </div>
  </div>
);

const CareerRecommendation = () => {
  const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;
  const token = localStorage.getItem("childToken");
  const navigate = useNavigate();
  const location = useLocation();

  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSaved, setIsSaved] = useState(false);

  const { quizId, user } = location.state || {};
  const userId = user?._id;

  useEffect(() => {
    const fetchRecommendations = async () => {
      if (!quizId || !userId) {
        setError("Missing quiz information. Please take the quiz first.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await axios.get(
          `${apiURL}/ai/career-recommendations`,
          {
            params: { childId: userId, quizId: quizId },
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        // console.log(response.data)
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

  const handleSaveResults = () => {
    setIsSaved(true);
    setTimeout(() => {
      alert("Your career recommendations have been saved!");
    }, 100);
  };

  if (loading) return <LoadingScreen />;

  if (error || !quizId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-xl">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Oops!</h2>
          <p className="text-gray-600 mb-6">{error || "No quiz data found."}</p>
          <button
            onClick={() => navigate("/quizHome")}
            className="bg-blue-500 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors"
          >
            Take Quiz
          </button>
        </div>
      </div>
    );
  }

  const getStarCount = (percentage) => Math.floor(percentage / 20);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-10 max-w-6xl">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-2 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </button>

          <div className="text-center space-y-4">
            <div className="inline-block bg-white rounded-full p-2 shadow-md">
              <div className="flex items-center gap-3">
                <span className="text-2xl">✨</span>
                <span className="font-semibold text-gray-800">
                  AI Career Match
                </span>
                <span className="text-2xl">✨</span>
              </div>
            </div>

            <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
              Your Perfect Career Matches
            </h1>
            <p className="md:text-lg text-gray-600 max-w-2xl mx-auto italic">
              Based on the quiz you have taken, here are careers that align with your
              strengths
            </p>
          </div>
        </div>

        {/* AI Analysis */}
        {recommendations?.analysis && (
          <div className="bg-white rounded-3xl p-8 shadow-lg mb-12 border border-blue-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  AI Analysis
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {recommendations.analysis}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Career Cards */}
        {recommendations?.careers && recommendations.careers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {recommendations.careers.map((career, index) => {
              const gradients = [
                "from-blue-500 to-indigo-600",
                "from-purple-500 to-pink-600",
                "from-green-500 to-emerald-600",
                "from-orange-500 to-red-600",
                "from-cyan-500 to-blue-600",
                "from-pink-500 to-rose-600",
              ];
              const gradient = gradients[index % gradients.length];
              const starCount = getStarCount(career.matchPercentage);

              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{career.emoji}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {career.career}
                    </h3>

                    {/* Match Percentage */}
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < starCount
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-gray-700">
                        {career.matchPercentage}%
                      </span>
                    </div>

                    {/* Match Badge */}
                    <div
                      className={`inline-block bg-gradient-to-r ${gradient} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md`}
                    >
                      {career.matchPercentage >= 95
                        ? "Perfect Match!"
                        : career.matchPercentage >= 90
                        ? "Excellent Match"
                        : "Great Match"}
                    </div>
                  </div>

                  <button
                    className={`w-full bg-gradient-to-r ${gradient} text-white py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}
                  >
                    Explore Career
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🤔</div>
            <p className="text-gray-600 text-lg mb-6">
              No recommendations available yet
            </p>
            <button
              onClick={() => navigate("/quizHome")}
              className="bg-blue-500 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors"
            >
              Take Quiz
            </button>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => navigate("/quizHome")}
            className="bg-white text-gray-700 border-2 border-gray-300 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors"
          >
            Take Another Quiz
          </button>
          <button
            onClick={handleSaveResults}
            className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
              isSaved
                ? "bg-green-500 text-white"
                : "bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:shadow-lg"
            }`}
          >
            {isSaved ? "✓ Saved!" : "Save Results"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default CareerRecommendation;
