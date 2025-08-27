import React, { useState } from "react";
import { PageMetadata } from "../components/PageMetadata";
import { Dialog, DialogContent } from "../components/ui/dialog";
import ResourceModal from "../components/ResourceModal";
import {
  Star,
  Bookmark,
  Filter,
  Quote,
  BookOpen,
  Leaf,
  Palette,
  Crown,
  Rocket,
  ArrowRight,
  ChevronLeft,
  FileText,
  Video,
  Globe,
} from "lucide-react";

const Resources = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cardsData = [
    {
      id: "modal1",
      title: "Amazing Science Facts",
      quote:
        "Did you know that a single raindrop can contain millions of tiny water molecules? Each drop is like a tiny world full of amazing science!",
      category: "Science Wonder",
      type: "PDF",
      typeIcon: <FileText className="w-4 h-4" />,
      icon: <Quote className="text-xl" />,
      gradient: "from-[#FF4081] to-[#E91E63]",
      author: "Amazing Science Facts",
      source: "Dr. Sarah Wonder",
      authorImage:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
    },
    {
      id: "modal2",
      title: "Tales of Wonder",
      quote:
        "Every great adventure begins with a single step into the unknown. What amazing journey will you start today?",
      category: "Adventure Story",
      type: "Book",
      typeIcon: <BookOpen className="w-4 h-4" />,
      icon: <BookOpen className="text-xl" />,
      gradient: "from-[#1A73E8] to-[#1557B0]",
      author: "Tales of Wonder",
      source: "Adventure Author",
      authorImage:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg",
    },
    {
      id: "modal3",
      title: "Nature's Secrets",
      quote:
        "Trees talk to each other through their roots! They share food and water to help their forest family stay healthy and strong.",
      category: "Nature Facts",
      type: "Article",
      typeIcon: <Globe className="w-4 h-4" />,
      icon: <Leaf className="text-xl" />,
      gradient: "from-[#4CAF50] to-[#2E7D32]",
      author: "Nature's Secrets",
      source: "Nature Expert",
      authorImage:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
    },
    {
      id: "modal4",
      title: "Art & Creativity",
      quote:
        "Art is not what you see, but what you make others see. Your imagination is the most powerful tool you have!",
      category: "Creative Wisdom",
      type: "Video",
      typeIcon: <Video className="w-4 h-4" />,
      icon: <Palette className="text-xl" />,
      gradient: "from-[#FFC107] to-[#FF8F00]",
      author: "Art & Creativity",
      source: "Creative Master",
      authorImage:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg",
    },
    {
      id: "modal5",
      title: "Ancient Wonders",
      quote:
        "Long ago, children just like you built amazing pyramids, discovered new lands, and created beautiful art that we still love today!",
      category: "History Tales",
      type: "eBook",
      typeIcon: <BookOpen className="w-4 h-4" />,
      icon: <Crown className="text-xl" />,
      gradient: "from-[#9C27B0] to-[#7B1FA2]",
      author: "Ancient Wonders",
      source: "History Expert",
      authorImage:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
    },
    {
      id: "modal6",
      title: "Space Explorers",
      quote:
        "The stars you see at night are like giant suns, so far away that their light takes years to reach your eyes. You're seeing the past!",
      category: "Space Adventure",
      type: "Guide",
      typeIcon: <FileText className="w-4 h-4" />,
      icon: <Rocket className="text-xl" />,
      gradient: "from-[#FF9800] to-[#F57C00]",
      author: "Space Explorers",
      source: "Space Scientist",
      authorImage:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg",
    },
  ];

  const openModal = (cardData) => {
    setSelectedCard(cardData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <PageMetadata
        title="CurioBoard - SkillSeed"
        description="Discover amazing stories, facts, and wisdom from our collection of books and resources"
      />

      <div className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 relative">
          <div className="absolute -top-4 left-1/4 w-20 h-20 bg-[#FFC107]/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-8 right-1/3 w-16 h-16 bg-[#FF4081]/20 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute -top-2 right-1/4 w-12 h-12 bg-[#1A73E8]/20 rounded-full blur-md"></div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#212121] mb-4">
            Your Learning Board
            <span className="text-[#FLC107]">📚</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover amazing stories, facts, and wisdom from our collection of
            books and resources!
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="bg-[#1A73E8] text-white rounded-full px-8 py-3 font-semibold hover:bg-[#1557B0] transition-all transform hover:scale-105 flex items-center gap-2">
              <Star className="w-5 h-5" />
              Explore All Cards
            </button>
            <button className="bg-white text-[#1A73E8] border-2 border-[#1A73E8] rounded-full px-8 py-3 font-semibold hover:bg-[#1A73E8] hover:text-white transition-all flex items-center gap-2">
              <Bookmark className="w-5 h-5" />
              My Favorites
            </button>
          </div>
        </div>

        {/* Filter Section */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-[#212121] mb-4 flex items-center gap-3">
              <Filter className="w-5 h-5 text-[#FF4081]" />
              Find What You Love
            </h2>

            <div className="flex flex-wrap gap-3">
              <button className="bg-[#1A73E8] text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-[#1557B0] transition-all flex items-center gap-2">
                <Star className="w-4 h-4" />
                All Topics
              </button>
              <button className="bg-[#F5F7FA] text-[#212121] rounded-full px-4 py-2 text-sm font-semibold hover:bg-[#FF4081] hover:text-white transition-all">
                Science
              </button>
              <button className="bg-[#F5F7FA] text-[#212121] rounded-full px-4 py-2 text-sm font-semibold hover:bg-[#4CAF50] hover:text-white transition-all">
                Stories
              </button>
              <button className="bg-[#F5F7FA] text-[#212121] rounded-full px-4 py-2 text-sm font-semibold hover:bg-[#FFC107] hover:text-white transition-all">
                History
              </button>
              <button className="bg-[#F5F7FA] text-[#212121] rounded-full px-4 py-2 text-sm font-semibold hover:bg-[#9C27B0] hover:text-white transition-all">
                Art
              </button>
              <button className="bg-[#F5F7FA] text-[#212121] rounded-full px-4 py-2 text-sm font-semibold hover:bg-[#FF9800] hover:text-white transition-all">
                Nature
              </button>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {cardsData.map((card) => (
            <div
              key={card.id}
              onClick={() => openModal(card)}
              className={`bg-gradient-to-br ${card.gradient} rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer group relative overflow-hidden`}
            >
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full blur-lg animate-pulse"></div>
              <div className="absolute bottom-2 left-4 w-8 h-8 bg-white/10 rounded-full blur-md"></div>
              <div className="absolute top-8 left-8 w-6 h-6 bg-white/15 rounded-full animate-bounce"></div>
              <div className="absolute bottom-12 right-12 w-10 h-10 bg-white/10 rounded-full"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      {card.icon}
                    </div>
                    <span className="text-sm font-semibold bg-white/20 rounded-full px-3 py-1">
                      {card.category}
                    </span>
                  </div>
                  <div className="bg-white/30 rounded-full px-3 py-1 text-xs font-bold flex items-center gap-1">
                    {card.typeIcon}
                    {card.type}
                  </div>
                </div>

                <blockquote className="text-lg font-medium mb-6 leading-relaxed">
                  {card.quote}
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={card.authorImage}
                      alt="Source"
                      className="w-8 h-8 rounded-full border-2 border-white/50"
                    />
                    <span className="text-sm">{card.author}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button className="bg-white text-[#1A73E8] border-2 border-[#1A73E8] rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#1A73E8] hover:text-white transition-all">
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            <button className="bg-[#1A73E8] text-white rounded-full w-10 h-10 flex items-center justify-center font-semibold">
              1
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
          {selectedCard && (
            <ResourceModal cardData={selectedCard} onClose={closeModal} />
          )}
        </DialogContent>
      </Dialog>

      <style>{`
        ::-webkit-scrollbar { display: none;}
        @keyframes float-slow { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes float-medium { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        @keyframes float-fast { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 4s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Resources;
