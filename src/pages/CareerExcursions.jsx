import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../components/ui/dialog";
import { Calendar } from "../components/ui/calendar.jsx";
import {
  FontAwesomeBus,
  FontAwesomePlus,
  FontAwesomeCalendar,
  FontAwesomeChevronLeft,
  FontAwesomeChevronRight,
  FontAwesomeX,
  FontAwesomeShieldHeart,
  FontAwesomeInfoCircle,
  FontAwesomePaperPlane,
  FontAwesomeClock,
} from "../components/ui/font-awesome-icons";

const CareerExcursions = () => {
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  const [isConsentModalOpen, setIsConsentModalOpen] = useState(false);
  const [date, setDate] = useState (undefined);
  const [parentEmail, setParentEmail] = useState("");

  const openCalendarModal = () => {
    setIsCalendarModalOpen(true);
  };

  const closeCalendarModal = () => {
    setIsCalendarModalOpen(false);
  };

  const openConsentModal = () => {
    setIsCalendarModalOpen(false);
    setIsConsentModalOpen(true);
  };

  const closeConsentModal = () => {
    setIsConsentModalOpen(false);
  };

  const sendConsentRequest = () => {
    // Add consent request logic here
    closeConsentModal();
    // Show success message or handle the next steps
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div id="career-excursions" className="space-y-6 mt-24">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#FFC107] rounded-full flex items-center justify-center animate-bounce">
              <FontAwesomeBus className="text-white text-xl" />
            </div>
            <h2 className="text-2xl font-bold text-[#212121]">
              Career Excursions 🚌
            </h2>
          </div>
          <button
            // onClick={openConsentModal}
            className="px-6 py-3 bg-[#1A73E8] text-white rounded-full text-sm hover:bg-[#1557B0] transition-all transform hover:scale-105 flex items-center gap-2"
          >
            <FontAwesomePlus />
            Book New Trip
          </button>
        </div>

        {/* Upcoming Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Event Card 1 */}
          <div
            id="event-card-1"
            className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all relative overflow-hidden group"
          >
            {/* Decorative Bubbles */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#FFC107]/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-[#FF4081]/10 rounded-full blur-lg"></div>

            <div className="relative">
              <div className="h-48 rounded-2xl overflow-hidden mb-4">
                <img
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/f4a47e3489-0c17673b73d8301b232d.png"
                  alt="colorful robotics lab with kids working on robots, cartoon style, bright and playful"
                />
              </div>
              <span className="absolute top-4 right-4 px-4 py-2 bg-[#FFC107] text-white rounded-full text-sm font-medium">
                Virtual Tour
              </span>
            </div>

            <h3 className="text-xl font-bold text-[#212121] mb-2">
              Robotics Lab Adventure
            </h3>
            <p className="text-gray-600 mb-4">
              Build and program your own robot with real engineers! 🤖
            </p>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <FontAwesomeCalendar className="text-[#1A73E8]" />
                <span className="text-sm">May 15, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeClock className="text-[#1A73E8]" />
                <span className="text-sm">2:00 PM</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                  className="w-8 h-8 rounded-full border-2 border-white"
                  alt="Avatar"
                />
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                  className="w-8 h-8 rounded-full border-2 border-white"
                  alt="Avatar"
                />
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg"
                  className="w-8 h-8 rounded-full border-2 border-white"
                  alt="Avatar"
                />
                <span className="w-8 h-8 rounded-full border-2 border-white bg-[#1A73E8] flex items-center justify-center text-white text-xs">
                  +5
                </span>
              </div>
              <button
                onClick={openConsentModal}
                className="px-4 py-2 bg-[#1A73E8]/10 text-[#1A73E8] rounded-full text-sm hover:bg-[#1A73E8] hover:text-white transition-all"
              >
                Join Now
              </button>
            </div>
          </div>

          {/* Event Card 2 */}
          <div
            id="event-card-2"
            className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all relative overflow-hidden group"
          >
            {/* Decorative Bubbles */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#4CAF50]/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-[#FF4081]/10 rounded-full blur-lg"></div>

            <div className="relative">
              <div className="h-48 rounded-2xl overflow-hidden mb-4">
                <img
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/b395fdc0a2-885857bc375e4494e50d.png"
                  alt="colorful science lab with kids doing experiments, cartoon style, bright and educational"
                />
              </div>
              <span className="absolute top-4 right-4 px-4 py-2 bg-[#4CAF50] text-white rounded-full text-sm font-medium">
                In Person
              </span>
            </div>

            <h3 className="text-xl font-bold text-[#212121] mb-2">
              Science Lab Explorer
            </h3>
            <p className="text-gray-600 mb-4">
              Discover amazing experiments with fun scientists! 🧪
            </p>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <FontAwesomeCalendar className="text-[#1A73E8]" />
                <span className="text-sm">May 20, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeClock className="text-[#1A73E8]" />
                <span className="text-sm">10:00 AM</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg"
                  className="w-8 h-8 rounded-full border-2 border-white"
                  alt="Avatar"
                />
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                  className="w-8 h-8 rounded-full border-2 border-white"
                  alt="Avatar"
                />
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                  className="w-8 h-8 rounded-full border-2 border-white"
                  alt="Avatar"
                />
                <span className="w-8 h-8 rounded-full border-2 border-white bg-[#1A73E8] flex items-center justify-center text-white text-xs">
                  +8
                </span>
              </div>
              <button
                onClick={openConsentModal}
                className="px-4 py-2 bg-[#1A73E8]/10 text-[#1A73E8] rounded-full text-sm hover:bg-[#1A73E8] hover:text-white transition-all"
              >
                Join Now
              </button>
            </div>
          </div>

          {/* Event Card 3 */}
          <div
            id="event-card-3"
            className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all relative overflow-hidden group"
          >
            {/* Decorative Bubbles */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#FF4081]/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-[#FFC107]/10 rounded-full blur-lg"></div>

            <div className="relative">
              <div className="h-48 rounded-2xl overflow-hidden mb-4">
                <img
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/51a62c027f-0ef83cff9be3e9a968c2.png"
                  alt="colorful art studio with kids painting and creating, cartoon style, creative and fun"
                />
              </div>
              <span className="absolute top-4 right-4 px-4 py-2 bg-[#FF4081] text-white rounded-full text-sm font-medium">
                Virtual Tour
              </span>
            </div>

            <h3 className="text-xl font-bold text-[#212121] mb-2">
              Art Studio Visit
            </h3>
            <p className="text-gray-600 mb-4">
              Create masterpieces with professional artists! 🎨
            </p>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <FontAwesomeCalendar className="text-[#1A73E8]" />
                <span className="text-sm">May 25, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeClock className="text-[#1A73E8]" />
                <span className="text-sm">3:30 PM</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg"
                  className="w-8 h-8 rounded-full border-2 border-white"
                  alt="Avatar"
                />
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg"
                  className="w-8 h-8 rounded-full border-2 border-white"
                  alt="Avatar"
                />
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                  className="w-8 h-8 rounded-full border-2 border-white"
                  alt="Avatar"
                />
                <span className="w-8 h-8 rounded-full border-2 border-white bg-[#1A73E8] flex items-center justify-center text-white text-xs">
                  +3
                </span>
              </div>
              <button
                onClick={openConsentModal}
                className="px-4 py-2 bg-[#1A73E8]/10 text-[#1A73E8] rounded-full text-sm hover:bg-[#1A73E8] hover:text-white transition-all"
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Modal */}
      <Dialog open={isCalendarModalOpen} onOpenChange={setIsCalendarModalOpen}>
        <DialogContent className="bg-white rounded-3xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#212121]">
              Book Your Excursion 🎉
            </DialogTitle>
          </DialogHeader>

          {/* Calendar Section */}
          <div className="bg-[#F5F7FA] rounded-2xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <button variant="outline" size="icon" className="rounded-full">
                <FontAwesomeChevronLeft />
              </button>
              <h4 className="text-xl font-bold">May 2025</h4>
              <button variant="outline" size="icon" className="rounded-full">
                <FontAwesomeChevronRight />
              </button>
            </div>

            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md"
            />
          </div>

          {/* Time Slots */}
          <div className="mb-6">
            <h4 className="text-lg font-bold mb-4">Available Time Slots</h4>
            <div className="grid grid-cols-3 gap-4">
              <button
                variant="outline"
                className="px-4 py-3 rounded-full bg-[#F5F7FA] hover:bg-[#1A73E8] hover:text-white transition-all text-sm"
              >
                9:00 AM
              </button>
              <button
                variant="outline"
                className="px-4 py-3 rounded-full bg-[#F5F7FA] hover:bg-[#1A73E8] hover:text-white transition-all text-sm"
              >
                10:00 AM
              </button>
              <button
                variant="outline"
                className="px-4 py-3 rounded-full bg-[#F5F7FA] hover:bg-[#1A73E8] hover:text-white transition-all text-sm"
              >
                11:00 AM
              </button>
              <button
                variant="default"
                className="px-4 py-3 rounded-full bg-[#1A73E8] text-white transition-all text-sm"
              >
                2:00 PM
              </button>
              <button
                variant="outline"
                className="px-4 py-3 rounded-full bg-[#F5F7FA] hover:bg-[#1A73E8] hover:text-white transition-all text-sm"
              >
                3:00 PM
              </button>
              <button
                variant="outline"
                className="px-4 py-3 rounded-full bg-[#F5F7FA] hover:bg-[#1A73E8] hover:text-white transition-all text-sm"
              >
                4:00 PM
              </button>
            </div>
          </div>

          {/* Action buttons */}
          <DialogFooter>
            <button
              onClick={closeCalendarModal}
              variant="outline"
              className="px-6 py-3 rounded-full bg-[#F5F7FA] hover:bg-gray-200 transition-all"
            >
              Cancel
            </button>
            <button className="px-6 py-3 rounded-full bg-[#1A73E8] text-white hover:bg-[#1557B0] transition-all">
              Confirm Booking
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Parent/Guardian Consent Modal */}
      <Dialog open={isConsentModalOpen} onOpenChange={setIsConsentModalOpen}>
        <DialogContent className="bg-white rounded-3xl p-8 w-full max-w-xl relative">
          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#FFC107]/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 bg-[#FF4081]/10 rounded-full blur-lg"></div>

          <DialogHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#FFC107] rounded-full flex items-center justify-center">
                <FontAwesomeShieldHeart className="text-white text-xl" />
              </div>
              <DialogTitle className="text-2xl font-bold text-[#212121]">
                Parent Consent Required 👋
              </DialogTitle>
            </div>
          </DialogHeader>

          <p className="text-gray-600 mb-6">
            To ensure your safety, we need your parent or guardian's permission
            before you can join this exciting adventure! 🚀
          </p>

          {/* Parent Email Input */}
          <div className="bg-[#F5F7FA] rounded-2xl p-6 mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Parent/Guardian Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-[#1A73E8]"
              placeholder="parent@example.com"
              value={parentEmail}
              onChange={(e) => setParentEmail(e.target.value)}
            />
          </div>

          {/* Info Box */}
          <div className="bg-[#1A73E8]/5 rounded-2xl p-6 mb-6">
            <div className="flex items-start gap-3">
              <FontAwesomeInfoCircle className="text-[#1A73E8] mt-1" />
              <div>
                <h4 className="font-bold text-[#1A73E8] mb-2">
                  What happens next?
                </h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• We'll send an email to your parent/guardian</li>
                  <li>• They'll review the activity details</li>
                  <li>• Once approved, you can join the fun!</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <DialogFooter>
            <button
              onClick={closeConsentModal}
              variant="outline"
              className="px-6 py-3 rounded-full bg-[#F5F7FA] hover:bg-gray-200 transition-all"
            >
              Cancel
            </button>
            <button
              onClick={sendConsentRequest}
              className="px-6 py-3 rounded-full bg-[#1A73E8] text-white hover:bg-[#1557B0] transition-all flex items-center gap-2"
            >
              <FontAwesomePaperPlane />
              Send Request
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CareerExcursions;
