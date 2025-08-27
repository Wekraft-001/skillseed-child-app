import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Lightbulb,
  Star,
  Compass,
  Droplet,
  CloudRain,
  Microscope,
  Bookmark,
  Share,
  Download,
} from "lucide-react";
import { FontAwesomeWandMagicSparkles } from "../components/ui/font-awesome-icons";

const CurioBoardModal = ({ cardData, onClose }) => {
  const navigate = useNavigate();

  const handleReadFullResource = () => {
    onClose();
    navigate(`/resource/${cardData.id}`);
  };

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Back Button */}
      <div className="mb-6">
        <button
          onClick={onClose}
          className="bg-white text-[#1A73E8] border-2 border-[#1A73E8] rounded-full px-6 py-3 font-semibold hover:bg-[#1A73E8] hover:text-white transition-all flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Board</span>
        </button>
      </div>

      {/* Resource Header */}
      <div
        className={`bg-gradient-to-br ${cardData.gradient} rounded-3xl p-8 text-white shadow-xl mb-8 relative overflow-hidden`}
      >
        <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-2 left-4 w-16 h-16 bg-white/10 rounded-full blur-md animate-float-fast"></div>
        <div className="absolute top-8 left-8 w-12 h-12 bg-white/15 rounded-full animate-bounce"></div>
        <div className="absolute bottom-12 right-12 w-8 h-8 bg-white/10 rounded-full animate-float-medium"></div>
        <div className="absolute top-16 right-20 w-6 h-6 bg-[#FFC107]/50 rounded-full"></div>
        <div className="absolute bottom-20 left-16 w-10 h-10 bg-white/20 rounded-full"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              {cardData.icon}
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {cardData.title}
              </h1>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="bg-white/30 rounded-full px-4 py-2 text-sm font-bold flex items-center gap-2">
                  {cardData.typeIcon}
                  {cardData.type} Resource
                </span>
                <span className="bg-white/20 rounded-full px-4 py-2 text-sm font-semibold">
                  {cardData.category}
                </span>
                <span className="bg-white/20 rounded-full px-4 py-2 text-sm font-semibold">
                  Page 42
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img
              src={cardData.authorImage}
              alt="Author"
              className="w-12 h-12 rounded-full border-3 border-white/50"
            />
            <div>
              <p className="font-semibold">{cardData.source}</p>
              <p className="text-sm text-white/80">Science Educator & Author</p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Highlighted Section */}
      <div className="bg-white rounded-3xl shadow-xl mb-8 overflow-hidden">
        <div className="bg-gradient-to-r from-[#FFC107] to-[#FF9800] p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <FontAwesomeWandMagicSparkles className="text-[#FF9800] text-xl" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">
                AI Discovered Section
              </h2>
              <p className="text-white/90">
                This amazing fact was specially selected for you!
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 relative">
          <div className="absolute top-4 right-4 w-16 h-16 bg-[#FFC107]/10 rounded-full blur-lg animate-pulse"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#FF4081]/10 rounded-full blur-md animate-float-slow"></div>

          <div className="relative z-10">
            <div className="bg-gradient-to-r from-[#FF4081]/10 to-[#E91E63]/10 rounded-2xl p-6 mb-6 border-l-4 border-[#FF4081]">
              <blockquote className="text-xl md:text-2xl font-medium text-[#212121] leading-relaxed italic">
                "{cardData.quote} When raindrops fall from the sky, they're
                actually picking up dust and other particles on their way down,
                making each one unique - just like snowflakes!"
              </blockquote>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#F5F7FA] rounded-2xl p-6">
                <h3 className="text-lg font-bold text-[#212121] mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-[#FFC107]" />
                  Fun Fact Breakdown
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#1A73E8] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <span className="text-[#212121]">
                      Millions of water molecules in one drop
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#4CAF50] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <span className="text-[#212121]">
                      Each raindrop is like a tiny world
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#FF4081] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <span className="text-[#212121]">
                      Picks up particles making each unique
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#F5F7FA] rounded-2xl p-6">
                <h3 className="text-lg font-bold text-[#212121] mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#FFC107]" />
                  Why This Matters
                </h3>
                <p className="text-[#212121] leading-relaxed">
                  Understanding how raindrops work helps us learn about the
                  water cycle, weather patterns, and how nature creates amazing
                  diversity in the smallest things around us!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Content */}
      <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
        <h2 className="text-2xl font-bold text-[#212121] mb-6 flex items-center gap-3">
          <Compass className="w-6 h-6 text-[#1A73E8]" />
          Explore More from This Resource
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-[#1A73E8]/10 to-[#1557B0]/10 rounded-2xl p-6 border border-[#1A73E8]/20 hover:shadow-lg transition-all cursor-pointer group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#1A73E8] rounded-full flex items-center justify-center">
                <Droplet className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-semibold text-[#1A73E8]">
                Chapter 3
              </span>
            </div>
            <h3 className="font-bold text-[#212121] mb-2">
              Water Cycle Adventures
            </h3>
            <p className="text-sm text-gray-600">
              Learn how water travels around our planet!
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#4CAF50]/10 to-[#2E7D32]/10 rounded-2xl p-6 border border-[#4CAF50]/20 hover:shadow-lg transition-all cursor-pointer group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#4CAF50] rounded-full flex items-center justify-center">
                <CloudRain className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-semibold text-[#4CAF50]">
                Chapter 5
              </span>
            </div>
            <h3 className="font-bold text-[#212121] mb-2">Weather Wonders</h3>
            <p className="text-sm text-gray-600">
              Discover how clouds make rain and snow!
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#FF9800]/10 to-[#F57C00]/10 rounded-2xl p-6 border border-[#FF9800]/20 hover:shadow-lg transition-all cursor-pointer group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#FF9800] rounded-full flex items-center justify-center">
                <Microscope className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-semibold text-[#FF9800]">
                Chapter 7
              </span>
            </div>
            <h3 className="font-bold text-[#212121] mb-2">Tiny Molecules</h3>
            <p className="text-sm text-gray-600">
              Explore the invisible world around us!
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <button className="bg-[#1A73E8] text-white rounded-full px-8 py-4 font-semibold hover:bg-[#1557B0] transition-all transform hover:scale-105 flex items-center gap-3 shadow-lg hover:shadow-xl">
          <Bookmark className="w-5 h-5" />
          <span>Save to Favorites</span>
        </button>

        <button className="bg-[#4CAF50] text-white rounded-full px-8 py-4 font-semibold hover:bg-[#2E7D32] transition-all transform hover:scale-105 flex items-center gap-3 shadow-lg hover:shadow-xl">
          <Share className="w-5 h-5" />
          <span>Share with Friends</span>
        </button>

        <button
          onClick={handleReadFullResource}
          className="bg-[#FFC107] text-[#212121] rounded-full px-8 py-4 font-semibold hover:bg-[#FF8F00] hover:text-white transition-all transform hover:scale-105 flex items-center gap-3 shadow-lg hover:shadow-xl"
        >
          <Download className="w-5 h-5" />
          <span>Read Full Resource</span>
        </button>
      </div>
    </div>
  );
};

export default CurioBoardModal;
