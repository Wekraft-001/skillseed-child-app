import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { Save, X } from "lucide-react";

const EditProfileModal = ({ isOpen, onClose, profileData, onSave }) => {
  const [formData, setFormData] = useState(profileData);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#212121] flex items-center gap-2">
            ✏️ Edit Your Profile
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                First Name
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="w-full bg-[#F5F7FA] rounded-xl p-3 border-2 border-transparent focus:border-[#1A73E8]/30 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Age
              </label>
              <input
                type="text"
                value={formData.age}
                onChange={(e) => handleInputChange("age", e.target.value)}
                className="w-full bg-[#F5F7FA] rounded-xl p-3 border-2 border-transparent focus:border-[#1A73E8]/30 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Country
              </label>
              <select
                value={formData.country}
                onChange={(e) => handleInputChange("country", e.target.value)}
                className="w-full bg-[#F5F7FA] rounded-xl p-3 border-2 border-transparent focus:border-[#1A73E8]/30 outline-none"
              >
                <option>Kenya 🇰🇪</option>
                <option>Nigeria 🇳🇬</option>
                <option>Ghana 🇬🇭</option>
                <option>South Africa 🇿🇦</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                School
              </label>
              <input
                type="text"
                value={formData.school}
                onChange={(e) => handleInputChange("school", e.target.value)}
                className="w-full bg-[#F5F7FA] rounded-xl p-3 border-2 border-transparent focus:border-[#1A73E8]/30 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Favorite Subject
              </label>
              <select
                value={formData.favoriteSubject}
                onChange={(e) =>
                  handleInputChange("favoriteSubject", e.target.value)
                }
                className="w-full bg-[#F5F7FA] rounded-xl p-3 border-2 border-transparent focus:border-[#1A73E8]/30 outline-none"
              >
                <option>Science 🔬</option>
                <option>Math ➕</option>
                <option>Art 🎨</option>
                <option>Music 🎵</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Learning Goal
              </label>
              <input
                type="text"
                value={formData.learningGoal}
                onChange={(e) =>
                  handleInputChange("learningGoal", e.target.value)
                }
                className="w-full bg-[#F5F7FA] rounded-xl p-3 border-2 border-transparent focus:border-[#1A73E8]/30 outline-none"
              />
            </div>
          </div>

          <div className="flex gap-4 justify-end pt-4">
            <button
              onClick={onClose}
              className="bg-white text-gray-600 border-2 border-gray-300 px-6 py-2 rounded-full font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <X className="w-4 h-4" />
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="bg-[#1A73E8] text-white px-6 py-2 rounded-full font-medium hover:bg-[#1557b0] transition-colors flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileModal;
