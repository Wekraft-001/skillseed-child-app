import React, { useState } from "react";
import { FAIcon } from "../components/ui/font-awesome-icons";

const ChildOnboarding = () => {
  const [selectedAvatar, setSelectedAvatar] = useState("avatar1");

  const handleAvatarChange = (e) => {
    setSelectedAvatar(e.target.id);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div
        id="signup-container"
        className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-8"
      >
        <h2 className="text-2xl font-semibold text-[#212121] mb-6">
          Create Your Learning Account
        </h2>

        <form id="signup-form" className="space-y-6">
          {/* Basic Information */}
          <div id="basic-info" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#212121] mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-full border border-gray-200 focus:border-[#1A73E8] focus:ring-2 focus:ring-[#1A73E8]/20 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#212121] mb-2">
                  Age
                </label>
                <input
                  type="number"
                  min="6"
                  max="17"
                  className="w-full px-4 py-2 rounded-full border border-gray-200 focus:border-[#1A73E8] focus:ring-2 focus:ring-[#1A73E8]/20 outline-none"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#212121] mb-2">
                  Gender (Optional)
                </label>
                <select className="w-full px-4 py-2 rounded-full border border-gray-200 focus:border-[#1A73E8] focus:ring-2 focus:ring-[#1A73E8]/20 outline-none">
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Prefer not to say</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#212121] mb-2">
                  Country
                </label>
                <select
                  className="w-full px-4 py-2 rounded-full border border-gray-200 focus:border-[#1A73E8] focus:ring-2 focus:ring-[#1A73E8]/20 outline-none"
                  required
                >
                  <option value="">Select Country</option>
                  <option value="nigeria">Nigeria</option>
                  <option value="kenya">Kenya</option>
                  <option value="ghana">Ghana</option>
                  <option value="southafrica">South Africa</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#212121] mb-2">
                School Name (Optional)
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-full border border-gray-200 focus:border-[#1A73E8] focus:ring-2 focus:ring-[#1A73E8]/20 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#212121] mb-2">
                Parent/Guardian Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-full border border-gray-200 focus:border-[#1A73E8] focus:ring-2 focus:ring-[#1A73E8]/20 outline-none"
                required
              />
            </div>
          </div>

          {/* Avatar Selection */}
          <div id="avatar-selection" className="relative">
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#FFC107]/20 rounded-full blur-lg animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#1A73E8]/20 rounded-full blur-lg animate-pulse"></div>
            <div className="absolute top-12 right-12 w-8 h-8 bg-[#FF4081]/20 rounded-full blur-md animate-bounce"></div>
            <div className="absolute bottom-8 left-20 w-10 h-10 bg-[#4CAF50]/20 rounded-full blur-md animate-bounce"></div>

            <label className="block text-lg font-medium text-[#212121] mb-6 flex items-center gap-3">
              <FAIcon
                icon="wand-magic-sparkles"
                className="text-[#FFC107] animate-bounce"
              />
              Pick Your Magical Avatar!
              <FAIcon icon="sparkles" className="text-[#FF4081]" />
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {[
                {
                  id: "avatar1",
                  name: "Princess",
                  icon: "crown",
                  image:
                    "https://storage.googleapis.com/uxpilot-auth.appspot.com/058c90d250-8bb45f064e5d50373d1c.png",
                  colorFrom: "#FF4081",
                  colorTo: "#FFC107",
                },
                {
                  id: "avatar2",
                  name: "Hero",
                  icon: "bolt",
                  image:
                    "https://storage.googleapis.com/uxpilot-auth.appspot.com/22b86be9b7-7079132a949e2e7e28a0.png",
                  colorFrom: "#1A73E8",
                  colorTo: "#4CAF50",
                },
                {
                  id: "avatar3",
                  name: "Lion",
                  icon: "paw",
                  image:
                    "https://storage.googleapis.com/uxpilot-auth.appspot.com/7e6ef9b6fe-94043ce6fe2a4f67b496.png",
                  colorFrom: "#FFC107",
                  colorTo: "#FF9800",
                },
                {
                  id: "avatar4",
                  name: "Unicorn",
                  icon: "sparkles",
                  image:
                    "https://storage.googleapis.com/uxpilot-auth.appspot.com/522733236a-1b7741212c7f05175680.png",
                  colorFrom: "#9C27B0",
                  colorTo: "#E91E63",
                },
                {
                  id: "avatar5",
                  name: "Dragon",
                  icon: "dragon",
                  image:
                    "https://storage.googleapis.com/uxpilot-auth.appspot.com/176f035a9e-f77fe6e4581cf9c4a01f.png",
                  colorFrom: "#4CAF50",
                  colorTo: "#8BC34A",
                },
              ].map((avatar) => (
                <div
                  key={avatar.id}
                  className="avatar-option cursor-pointer relative group"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-[${avatar.colorFrom}]/20 to-[${avatar.colorTo}]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}
                  ></div>
                  <input
                    type="radio"
                    name="avatar"
                    id={avatar.id}
                    className="hidden"
                    onChange={handleAvatarChange}
                    checked={selectedAvatar === avatar.id}
                  />
                  <label htmlFor={avatar.id} className="block relative">
                    <div className="w-24 h-24 rounded-full bg-white p-2 shadow-xl hover:shadow-2xl transition-all transform group-hover:scale-105">
                      <img
                        className={`w-full h-full rounded-full border-4 ${
                          selectedAvatar === avatar.id
                            ? `border-[${avatar.colorFrom}]`
                            : "border-transparent"
                        } group-hover:border-[${
                          avatar.colorFrom
                        }] transition-all`}
                        src={avatar.image}
                        alt={`${avatar.name} avatar`}
                      />
                      <div
                        className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-[${avatar.colorFrom}] to-[${avatar.colorTo}] rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform`}
                      >
                        <FAIcon icon={avatar.icon} className="text-white" />
                      </div>
                    </div>
                    <span className="block text-center mt-2 text-sm text-[#212121] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      {avatar.name}
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div id="terms-privacy" className="flex items-start gap-2 mt-6">
            <input type="checkbox" id="agree" className="mt-1" required />
            <label htmlFor="agree" className="text-sm text-gray-600">
              I agree to SkillSeed's{" "}
              <span className="text-[#1A73E8] hover:underline cursor-pointer">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-[#1A73E8] hover:underline cursor-pointer">
                Privacy Policy
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1A73E8] text-white py-3 rounded-full hover:bg-[#1557B0] transition-colors font-medium"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChildOnboarding;
