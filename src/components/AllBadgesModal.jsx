import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import {
  Trophy,
  Medal,
  Star,
  BookOpen,
  Calculator,
  Lock,
  Atom,
  Code,
  Bot,
  Users,
  MessageSquare,
  Rocket,
  Leaf,
  Target,
  Gift,
} from "lucide-react";

const AllBadgesModal = ({ isOpen, onClose }) => {
  const allBadges = [
    // Academic Badges
    {
      icon: Atom,
      name: "Science Explorer",
      description: "Complete 5 science experiments",
      category: "Academic",
      earned: true,
      color: "text-[#1A73E8]",
      bgColor: "bg-[#1A73E8]/10",
    },
    {
      icon: Calculator,
      name: "Math Wizard",
      description: "Solve 20 math problems",
      category: "Academic",
      earned: true,
      color: "text-[#1A73E8]",
      bgColor: "bg-[#1A73E8]/10",
    },
    {
      icon: BookOpen,
      name: "Reading Champion",
      description: "Read 10 adventure stories",
      category: "Academic",
      earned: false,
      color: "text-gray-400",
      bgColor: "bg-gray-100",
    },
    {
      icon: Trophy,
      name: "Perfect Score",
      description: "Get 100% on any quiz",
      category: "Academic",
      earned: true,
      color: "text-[#FFC107]",
      bgColor: "bg-[#FFC107]/10",
    },

    // Skills Badges
    {
      icon: Code,
      name: "Code Master",
      description: "Complete first coding project",
      category: "Skills",
      earned: true,
      color: "text-[#4CAF50]",
      bgColor: "bg-[#4CAF50]/10",
    },
    {
      icon: Bot,
      name: "Robot Builder",
      description: "Build and program a robot",
      category: "Skills",
      earned: true,
      color: "text-[#4CAF50]",
      bgColor: "bg-[#4CAF50]/10",
    },
    {
      icon: Target,
      name: "Goal Getter",
      description: "Achieve 5 learning goals",
      category: "Skills",
      earned: false,
      color: "text-gray-400",
      bgColor: "bg-gray-100",
    },
    {
      icon: Star,
      name: "Skill Master",
      description: "Master any skill completely",
      category: "Skills",
      earned: false,
      color: "text-gray-400",
      bgColor: "bg-gray-100",
    },

    // Social Badges
    {
      icon: Users,
      name: "Team Player",
      description: "Complete 3 group projects",
      category: "Social",
      earned: true,
      color: "text-[#FF4081]",
      bgColor: "bg-[#FF4081]/10",
    },
    {
      icon: MessageSquare,
      name: "Helper Hero",
      description: "Help 10 classmates",
      category: "Social",
      earned: true,
      color: "text-[#FF4081]",
      bgColor: "bg-[#FF4081]/10",
    },
    {
      icon: Gift,
      name: "Kindness King",
      description: "Perform 5 acts of kindness",
      category: "Social",
      earned: false,
      color: "text-gray-400",
      bgColor: "bg-gray-100",
    },
    {
      icon: Medal,
      name: "Community Star",
      description: "Be active in communities for 30 days",
      category: "Social",
      earned: false,
      color: "text-gray-400",
      bgColor: "bg-gray-100",
    },

    // Project Badges
    {
      icon: Rocket,
      name: "Space Explorer",
      description: "Complete space-themed project",
      category: "Projects",
      earned: true,
      color: "text-[#FFC107]",
      bgColor: "bg-[#FFC107]/10",
    },
    {
      icon: Leaf,
      name: "Nature Guardian",
      description: "Complete environmental project",
      category: "Projects",
      earned: true,
      color: "text-[#4CAF50]",
      bgColor: "bg-[#4CAF50]/10",
    },
    {
      icon: Trophy,
      name: "Project Master",
      description: "Complete 15 projects",
      category: "Projects",
      earned: false,
      color: "text-gray-400",
      bgColor: "bg-gray-100",
    },
    {
      icon: Star,
      name: "Innovation Award",
      description: "Create an original project",
      category: "Projects",
      earned: false,
      color: "text-gray-400",
      bgColor: "bg-gray-100",
    },
  ];

  const categories = ["All", "Academic", "Skills", "Social", "Projects"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredBadges =
    selectedCategory === "All"
      ? allBadges
      : allBadges.filter((badge) => badge.category === selectedCategory);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#212121] flex items-center gap-2">
            🏆 All Achievement Badges
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-[#1A73E8] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Badges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredBadges.map((badge, index) => {
              const IconComponent = badge.icon;
              return (
                <div
                  key={index}
                  className={`rounded-2xl p-4 border-2 transition-all ${
                    badge.earned
                      ? "border-transparent shadow-sm hover:shadow-md"
                      : "border-gray-200 opacity-60"
                  }`}
                  style={{
                    backgroundColor: badge.earned
                      ? badge.bgColor
                      : badge.bgColor,
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-12 h-12 ${badge.bgColor} rounded-full flex items-center justify-center`}
                    >
                      <IconComponent className={`w-6 h-6 ${badge.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-[#212121]">
                          {badge.name}
                        </h3>
                        {badge.earned && (
                          <Star className="w-4 h-4 text-[#FFC107]" />
                        )}
                        {!badge.earned && (
                          <Lock className="w-4 h-4 text-gray-400" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        {badge.description}
                      </p>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          badge.category === "Academic"
                            ? "bg-[#1A73E8]/10 text-[#1A73E8]"
                            : badge.category === "Skills"
                            ? "bg-[#4CAF50]/10 text-[#4CAF50]"
                            : badge.category === "Social"
                            ? "bg-[#FF4081]/10 text-[#FF4081]"
                            : "bg-[#FFC107]/10 text-[#FFC107]"
                        }`}
                      >
                        {badge.category}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AllBadgesModal;
