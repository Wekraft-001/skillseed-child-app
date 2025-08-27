import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Star, Heart, Users } from "lucide-react";

const CareerDetailsModal = ({ isOpen, onClose, career }) => {
  if (!career) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-[#212121] flex items-center gap-3">
            <span className="text-4xl">{career.icon}</span>
            {career.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Match Percentage */}
          <div className="bg-gradient-to-r from-[#1A73E8]/10 to-[#FFC107]/10 rounded-2xl p-4 text-center">
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(career.matchPercentage / 20)
                      ? "fill-[#FFC107] text-[#FFC107]"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-2xl font-bold text-[#1A73E8]">
              {career.matchPercentage}% Match!
            </p>
            <p className="text-gray-600">{career.description}</p>
          </div>

          {/* Skills Needed */}
          <div>
            <h3 className="text-xl font-bold text-[#212121] mb-3">
              🎯 Skills You'll Use
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {career.skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-[#4CAF50]/10 rounded-xl p-3 flex items-center gap-2"
                >
                  <Heart className="w-4 h-4 text-[#4CAF50]" />
                  <span className="text-[#212121]">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Tasks */}
          <div>
            <h3 className="text-xl font-bold text-[#212121] mb-3">
              📅 What You'll Do Every Day
            </h3>
            <div className="space-y-2">
              {career.dailyTasks.map((task, index) => (
                <div key={index} className="bg-[#FF4081]/10 rounded-xl p-3">
                  <p className="text-[#212121]">• {task}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Salary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#9C27B0]/10 rounded-2xl p-4">
              <h4 className="font-bold text-[#212121] mb-2">
                📚 Education Needed
              </h4>
              <p className="text-gray-600">{career.education}</p>
            </div>
            <div className="bg-[#FFC107]/10 rounded-2xl p-4">
              <h4 className="font-bold text-[#212121] mb-2">
                💰 How Much You Can Earn
              </h4>
              <p className="text-gray-600">{career.salary}</p>
            </div>
          </div>

          {/* Fun Facts */}
          <div>
            <h3 className="text-xl font-bold text-[#212121] mb-3">
              🌟 Fun Facts
            </h3>
            <div className="space-y-2">
              {career.funFacts.map((fact, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-[#1A73E8]/10 to-[#4CAF50]/10 rounded-xl p-3"
                >
                  <p className="text-[#212121]">✨ {fact}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center pt-4">
            <button className="bg-[#1A73E8] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1557b0] transition-colors flex items-center gap-2">
              <Users className="w-4 h-4" />
              Find a Mentor
            </button>
            <button className="bg-[#4CAF50] text-white px-6 py-3 rounded-full font-medium hover:bg-[#45a049] transition-colors">
              Learn More Online 🌐
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CareerDetailsModal;
