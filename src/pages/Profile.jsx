import React, { useState } from "react";
import { PageMetadata } from "../components/PageMetadata";
import {
  Trophy,
  Star,
  Calendar,
  Camera,
  Edit,
  Save,
  Shield,
  LogOut,
  Info,
} from "lucide-react";
import EditProfileModal from "../components/EditProfileModal";

const Profile = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "Emma",
    age: "12 years old",
    country: "Kenya 🇰🇪",
    school: "Sunrise Elementary",
    favoriteSubject: "Science 🔬",
    learningGoal: "Become a scientist!",
  });

  const handleSaveProfile = (newData) => {
    setProfileData(newData);
    console.log("Profile saved:", newData);
  };

  return (
    <>
      <PageMetadata
        title="Child Profile | SkillSeed"
        description="Manage your child's profile information and settings"
      />
      <main className="bg-[#F5F7FA] min-h-screen">
        {/* Main Content */}
        <div className="container mx-auto px-6 py-8">
          {/* Profile Hero Section */}
          <section
            id="profile-hero"
            className="relative bg-gradient-to-br from-[#1A73E8]/10 via-[#FFC107]/10 to-[#FF4081]/10 rounded-3xl p-8 mb-8 overflow-hidden"
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

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                  alt="Emma's Avatar"
                  className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                />
                <button className="absolute bottom-2 right-2 w-10 h-10 bg-[#1A73E8] rounded-full flex items-center justify-center text-white hover:bg-[#1557b0] transition-colors">
                  <Camera className="w-4 h-4" />
                </button>
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold text-[#212121] mb-2">
                  Hey there, {profileData.firstName}! 👋
                </h1>
                <p className="text-gray-600 mb-4">
                  Level 5 Explorer • 2,750 Points • 24 Badges
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="bg-[#1A73E8]/10 text-[#1A73E8] px-3 py-1 rounded-full text-sm">
                    Science Lover
                  </span>
                  <span className="bg-[#4CAF50]/10 text-[#4CAF50] px-3 py-1 rounded-full text-sm">
                    Code Master
                  </span>
                  <span className="bg-[#FF4081]/10 text-[#FF4081] px-3 py-1 rounded-full text-sm">
                    Team Player
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Profile Information */}
          <section
            id="profile-info"
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
          >
            {/* Personal Info */}
            <div
              id="personal-info"
              className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm relative overflow-hidden"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#1A73E8]/10 rounded-full"></div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-[#212121]">
                  👤 My Information
                </h2>
                <button
                  onClick={() => setIsEditModalOpen(true)}
                  className="bg-[#1A73E8] text-white px-4 py-2 rounded-full font-medium hover:bg-[#1557b0] transition-colors text-sm flex items-center gap-2"
                >
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                      First Name
                    </label>
                    <div className="bg-[#F5F7FA] rounded-xl p-3 border-2 border-transparent">
                      <span className="text-[#212121] font-medium">
                        {profileData.firstName}
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                      Age
                    </label>
                    <div className="bg-[#F5F7FA] rounded-xl p-3 border-2 border-transparent">
                      <span className="text-[#212121] font-medium">
                        {profileData.age}
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                      Country
                    </label>
                    <div className="bg-[#F5F7FA] rounded-xl p-3 border-2 border-transparent">
                      <span className="text-[#212121] font-medium">
                        {profileData.country}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                      School
                    </label>
                    <div className="bg-[#F5F7FA] rounded-xl p-3 border-2 border-transparent">
                      <span className="text-[#212121] font-medium">
                        {profileData.school}
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                      Favorite Subject
                    </label>
                    <div className="bg-[#F5F7FA] rounded-xl p-3 border-2 border-transparent">
                      <span className="text-[#212121] font-medium">
                        {profileData.favoriteSubject}
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                      Learning Goal
                    </label>
                    <div className="bg-[#F5F7FA] rounded-xl p-3 border-2 border-transparent">
                      <span className="text-[#212121] font-medium">
                        {profileData.learningGoal}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div id="quick-stats" className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm relative overflow-hidden">
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FFC107]/20 rounded-full animate-pulse"></div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#FFC107]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8 text-[#FFC107]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#212121] mb-1">24</h3>
                  <p className="text-gray-600">Total Badges</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm relative overflow-hidden">
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#1A73E8]/20 rounded-full animate-pulse"></div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#1A73E8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-[#1A73E8]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#212121] mb-1">
                    2,750
                  </h3>
                  <p className="text-gray-600">Total Points</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm relative overflow-hidden">
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#4CAF50]/20 rounded-full animate-pulse"></div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#4CAF50]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-[#4CAF50]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#212121] mb-1">45</h3>
                  <p className="text-gray-600">Days Streak</p>
                </div>
              </div>
            </div>
          </section>

          {/* Avatar Selection */}
          <section
            id="avatar-selection"
            className="bg-white rounded-2xl p-6 shadow-sm mb-8 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 w-6 h-6 bg-[#FF4081]/20 rounded-full animate-bounce"></div>
            <h2 className="text-xl font-semibold text-[#212121] mb-6">
              🎭 Choose Your Avatar
            </h2>

            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4">
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-16 h-16 rounded-full border-4 border-[#1A73E8] p-1 group-hover:scale-110 transition-transform">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                    alt="Avatar 1"
                    className="w-full h-full rounded-full"
                  />
                </div>
                <span className="text-xs mt-2 text-[#1A73E8] font-medium">
                  Current
                </span>
              </div>

              {[5, 6, 7, 2, 3, 4, 8, 9].map((num) => (
                <div
                  key={num}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-full border-2 border-gray-200 p-1 group-hover:scale-110 transition-transform group-hover:border-[#1A73E8]">
                    <img
                      src={`https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-${num}.jpg`}
                      alt={`Avatar ${num}`}
                      className="w-full h-full rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Parent/Guardian Information */}
          <section
            id="parent-info"
            className="bg-white rounded-2xl p-6 shadow-sm mb-8 relative overflow-hidden"
          >
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#4CAF50]/10 rounded-full"></div>
            <h2 className="text-xl font-semibold text-[#212121] mb-6">
              👨‍👩‍👧‍👦 Parent/Guardian Info
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Parent/Guardian Name
                </label>
                <div className="bg-[#F5F7FA] rounded-xl p-3 border-2 border-transparent">
                  <input
                    type="text"
                    defaultValue="Sarah Johnson"
                    className="w-full bg-transparent outline-none text-[#212121] font-medium"
                    readOnly
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Email Address
                </label>
                <div className="bg-[#F5F7FA] rounded-xl p-3 border-2 border-transparent">
                  <input
                    type="email"
                    defaultValue="sarah.johnson@email.com"
                    className="w-full bg-transparent outline-none text-[#212121] font-medium"
                    readOnly
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 bg-[#FFC107]/10 rounded-xl border-l-4 border-[#FFC107]">
              <p className="text-sm text-gray-600 flex items-start gap-2">
                <Info className="w-4 h-4 text-[#FFC107] mt-0.5 flex-shrink-0" />
                Your parent/guardian receives weekly progress reports about your
                awesome learning journey!
              </p>
            </div>
          </section>

          {/* Action Buttons */}
          <section
            id="profile-actions"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-[#1A73E8] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1557b0] transition-colors flex items-center justify-center gap-2">
              <Save className="w-4 h-4" />
              Save Changes
            </button>
            <button className="bg-white text-[#1A73E8] border-2 border-[#1A73E8] px-8 py-3 rounded-full font-medium hover:bg-[#1A73E8]/10 transition-colors flex items-center justify-center gap-2">
              <Shield className="w-4 h-4" />
              Privacy Settings
            </button>
            <button className="bg-[#FF4081]/10 text-[#FF4081] border-2 border-[#FF4081] px-8 py-3 rounded-full font-medium hover:bg-[#FF4081]/20 transition-colors flex items-center justify-center gap-2">
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </section>
        </div>

        {/* Edit Profile Modal */}
        <EditProfileModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          profileData={profileData}
          onSave={handleSaveProfile}
        />
      </main>
    </>
  );
};

export default Profile;
