import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FontAwesomeWandMagicSparkles,
  FontAwesomeVideo,
  FontAwesomeRobot,
  FontAwesomeSparkles,
  FontAwesomeShieldHeart,
  FontAwesomeArrowLeft,
  FontAwesomeGraduationCap,
  FontAwesomeLanguage,
  FontAwesomeGlobe,
  FontAwesomeRocket,
} from "../components/ui/font-awesome-icons";

const MentorDetail = () => {
  const navigate = useNavigate();
  const { mentorId } = useParams();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 space-y-6">
      {/* Safety Notice Banner */}
      <div
        id="safety-banner"
        className="bg-[#FFF3E0] rounded-3xl p-6 shadow-sm border-2 border-[#FFC107]"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#FFC107] rounded-full flex items-center justify-center">
            <FontAwesomeShieldHeart className="text-white text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#212121]">
              Safety First! 🌟
            </h3>
            <p className="text-gray-600">
              All sessions are monitored for your safety. Remember not to share
              personal information!
            </p>
          </div>
        </div>
      </div>

      {/* Mentor Profile View */}
      <div
        id="mentor-profile"
        className="bg-white rounded-3xl p-8 shadow-sm relative overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#FFC107]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-[#FF4081]/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-20 left-40 w-16 h-16 bg-[#4CAF50]/10 rounded-full blur-lg"></div>

        {/* Back Button */}
        <button
          onClick={() => navigate("/mentors")}
          className="mb-6 px-8 py-3 bg-white border-2 border-[#1A73E8] text-[#1A73E8] rounded-full text-sm hover:bg-[#1A73E8] hover:text-white transition-colors flex items-center gap-3"
        >
          <FontAwesomeArrowLeft />
          Back to Mentors
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Mentor Info */}
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-6">
              <div className="relative">
                <img
                  className="w-24 h-24 rounded-full border-4 border-[#FFC107]"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/4e942b5c97-c55327070a29d8fcf875.png"
                  alt="friendly teacher avatar with colorful background, cartoon style, warm and approachable"
                />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#4CAF50] rounded-full border-2 border-white flex items-center justify-center animate-bounce">
                  <FontAwesomeWandMagicSparkles className="text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#212121]">Mr. Alex</h2>
                <p className="text-lg text-gray-600">Space Science Expert</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex">
                    <i className="fa-solid fa-star text-[#FFC107]"></i>
                    <i className="fa-solid fa-star text-[#FFC107]"></i>
                    <i className="fa-solid fa-star text-[#FFC107]"></i>
                    <i className="fa-solid fa-star text-[#FFC107]"></i>
                    <i className="fa-solid fa-star-half-alt text-[#FFC107]"></i>
                  </div>
                  <span className="font-medium">4.9</span>
                  <span className="text-gray-500">(48 happy learners)</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <span className="px-6 py-2 bg-[#1A73E8]/10 rounded-full text-sm text-[#1A73E8] flex items-center gap-2">
                  <FontAwesomeRocket />
                  Space Science
                </span>
                <span className="px-6 py-2 bg-[#4CAF50]/10 rounded-full text-sm text-[#4CAF50] flex items-center gap-2">
                  <FontAwesomeRobot />
                  Robotics
                </span>
                <span className="px-6 py-2 bg-[#FF4081]/10 rounded-full text-sm text-[#FF4081] flex items-center gap-2">
                  <FontAwesomeGlobe />
                  English
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed text-lg">
                Hi there! I'm passionate about making space science fun and
                accessible for young minds. Let's explore the cosmos together!
                🚀 ⭐️ 🌎
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-[#F5F7FA] rounded-2xl p-6">
                  <h4 className="text-sm text-gray-500 mb-2">Experience</h4>
                  <p className="font-medium flex items-center gap-2">
                    <FontAwesomeGraduationCap className="text-[#1A73E8]" />
                    5+ years teaching
                  </p>
                </div>
                <div className="bg-[#F5F7FA] rounded-2xl p-6">
                  <h4 className="text-sm text-gray-500 mb-2">Languages</h4>
                  <p className="font-medium flex items-center gap-2">
                    <FontAwesomeLanguage className="text-[#1A73E8]" />
                    English, Spanish
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div className="flex-1 bg-[#F5F7FA] rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#1A73E8] rounded-full flex items-center justify-center">
                <FontAwesomeVideo className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#212121]">
                Book a Fun Chat!
              </h3>
            </div>

            {/* Date Selection */}
            <div className="mb-6">
              <div className="flex gap-3 overflow-x-auto pb-2">
                <button className="flex-shrink-0 px-8 py-3 bg-white rounded-full text-sm font-medium hover:bg-[#1A73E8] hover:text-white transition-colors">
                  Today
                </button>
                <button className="flex-shrink-0 px-8 py-3 bg-[#1A73E8] text-white rounded-full text-sm font-medium">
                  Tomorrow
                </button>
                <button className="flex-shrink-0 px-8 py-3 bg-white rounded-full text-sm font-medium hover:bg-[#1A73E8] hover:text-white transition-colors">
                  Wed, 14 May
                </button>
              </div>
            </div>

            {/* Time Slots */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button className="px-4 py-3 bg-white rounded-full text-sm font-medium hover:bg-[#1A73E8] hover:text-white transition-colors">
                09:00 AM (15 min)
              </button>
              <button className="px-4 py-3 bg-white rounded-full text-sm font-medium hover:bg-[#1A73E8] hover:text-white transition-colors">
                09:30 AM (30 min)
              </button>
              <button className="px-4 py-3 bg-[#1A73E8] text-white rounded-full text-sm font-medium">
                10:00 AM (15 min)
              </button>
              <button className="px-4 py-3 bg-white rounded-full text-sm font-medium hover:bg-[#1A73E8] hover:text-white transition-colors">
                10:30 AM (30 min)
              </button>
            </div>

            {/* Session Type */}
            <div className="mb-6 hidden">
              <h4 className="text-sm text-gray-500 mb-3">
                Choose Your Adventure!
              </h4>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-4 bg-white rounded-2xl cursor-pointer hover:bg-[#1A73E8]/5 transition-colors">
                  <input
                    type="radio"
                    name="session-type"
                    className="w-5 h-5 text-[#1A73E8]"
                  />
                  <div>
                    <p className="font-medium">Quick Question (15 min)</p>
                    <p className="text-sm text-gray-500">
                      Perfect for specific questions!
                    </p>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-4 bg-white rounded-2xl cursor-pointer hover:bg-[#1A73E8]/5 transition-colors">
                  <input
                    type="radio"
                    name="session-type"
                    className="w-5 h-5 text-[#1A73E8]"
                    defaultChecked
                  />
                  <div>
                    <p className="font-medium">Deep Dive (30 min)</p>
                    <p className="text-sm text-gray-500">
                      For amazing discoveries!
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Safety Notice */}
            <div className="bg-[#E3F2FD] rounded-2xl p-4 mb-6">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-circle-info text-[#1A73E8]"></i>
                <p className="text-sm text-[#1A73E8]">
                  All chats are recorded for safety. Remember not to share
                  personal info!
                </p>
              </div>
            </div>

            <button className="w-full px-8 py-4 bg-[#1A73E8] text-white rounded-full text-sm font-medium hover:bg-[#1557B0] transition-colors flex items-center justify-center gap-3">
              <FontAwesomeVideo />
              Start Your Learning Adventure!
            </button>
          </div>
        </div>
      </div>

      {/* Post-Session Feedback */}
      <div
        id="feedback-form"
        className="bg-white rounded-3xl p-8 shadow-sm relative overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#FFC107]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-[#FF4081]/10 rounded-full blur-xl animate-pulse"></div>

        <h3 className="text-2xl font-bold text-[#212121] mb-8 flex items-center gap-3">
          <div className="w-12 h-12 bg-[#FFC107]/20 rounded-full flex items-center justify-center">
            <FontAwesomeSparkles className="text-[#FFC107] text-xl" />
          </div>
          How was your adventure with Mr. Alex?
        </h3>

        <div className="space-y-8">
          {/* Star Rating */}
          <div className="flex items-center justify-center gap-4">
            <button className="w-16 h-16 rounded-full bg-[#FFC107]/10 flex items-center justify-center hover:bg-[#FFC107]/20 transition-all transform hover:scale-110">
              <i className="fa-solid fa-star text-[#FFC107] text-2xl"></i>
            </button>
            <button className="w-16 h-16 rounded-full bg-[#FFC107]/10 flex items-center justify-center hover:bg-[#FFC107]/20 transition-all transform hover:scale-110">
              <i className="fa-solid fa-star text-[#FFC107] text-2xl"></i>
            </button>
            <button className="w-16 h-16 rounded-full bg-[#FFC107]/10 flex items-center justify-center hover:bg-[#FFC107]/20 transition-all transform hover:scale-110">
              <i className="fa-solid fa-star text-[#FFC107] text-2xl"></i>
            </button>
            <button className="w-16 h-16 rounded-full bg-[#FFC107]/10 flex items-center justify-center hover:bg-[#FFC107]/20 transition-all transform hover:scale-110">
              <i className="fa-regular fa-star text-[#FFC107] text-2xl"></i>
            </button>
            <button className="w-16 h-16 rounded-full bg-[#FFC107]/10 flex items-center justify-center hover:bg-[#FFC107]/20 transition-all transform hover:scale-110">
              <i className="fa-regular fa-star text-[#FFC107] text-2xl"></i>
            </button>
          </div>

          {/* Feedback Text */}
          <div>
            <label className="block text-lg font-medium text-[#212121] mb-3">
              What cool things did you learn today? 🚀
            </label>
            <textarea
              className="w-full h-32 px-6 py-4 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent text-lg"
              placeholder="Share your awesome discoveries..."
            ></textarea>
          </div>

          {/* Quick Reactions */}
          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-3 bg-[#F5F7FA] rounded-full text-lg hover:bg-[#1A73E8] hover:text-white transition-all transform hover:scale-105">
              Super Fun! 🌟
            </button>
            <button className="px-6 py-3 bg-[#F5F7FA] rounded-full text-lg hover:bg-[#1A73E8] hover:text-white transition-all transform hover:scale-105">
              Learned a Lot! 🎯
            </button>
            <button className="px-6 py-3 bg-[#F5F7FA] rounded-full text-lg hover:bg-[#1A73E8] hover:text-white transition-all transform hover:scale-105">
              Amazing Teacher! 👨‍🏫
            </button>
            <button className="px-6 py-3 bg-[#F5F7FA] rounded-full text-lg hover:bg-[#1A73E8] hover:text-white transition-all transform hover:scale-105">
              Want More! 🚀
            </button>
          </div>

          <button className="w-full px-8 py-4 bg-[#1A73E8] text-white rounded-full text-lg font-medium hover:bg-[#1557B0] transition-all transform hover:scale-105 flex items-center justify-center gap-3">
            <i className="fa-solid fa-paper-plane"></i>
            Share Your Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorDetail;
