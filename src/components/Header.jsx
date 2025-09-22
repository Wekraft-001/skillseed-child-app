import React, { useState, Fragment } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import {
  Bell,
  LogOut,
  Search,
  Crown,
  Compass,
  Lightbulb,
  Map,
  Target,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";
import { IoMenu } from "react-icons/io5";
import {
  Menu,
  MenuItems,
  MenuButton,
  MenuItem,
  Transition,
} from "@headlessui/react";
import Logo from "../assets/logo.svg";

const Header = () => {
  const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;
  const token = localStorage.getItem("childToken");
  const { toggleSidebar } = useSidebar();
  const [showNotifications, setShowNotifications] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([]);

  // const notifications = [
  //   {
  //     id: 1,
  //     title: "Great job on your Math quiz!",
  //     subject: "Mathematics",
  //     description: "You scored 95% on your latest quiz!",
  //     date: "May 22, 10:30 AM",
  //     daysAgo: "2 hours ago",
  //     isNew: true,
  //     type: "achievement",
  //     icon: "medal",
  //     points: 50,
  //   },
  //   {
  //     id: 2,
  //     title: "New Quest Available!",
  //     subject: "Science",
  //     description: "Explore the Solar System - New quest unlocked!",
  //     date: "May 21, 3:45 PM",
  //     daysAgo: "1 day ago",
  //     isNew: true,
  //     type: "quest",
  //     icon: "rocket",
  //     points: 0,
  //   },
  //   {
  //     id: 3,
  //     title: "Daily Streak Bonus",
  //     subject: "All Subjects",
  //     description: "You're on a 7-day streak! Keep it up!",
  //     date: "May 21, 9:00 AM",
  //     daysAgo: "1 day ago",
  //     isNew: false,
  //     type: "streak",
  //     icon: "flame",
  //     points: 25,
  //   },
  //   {
  //     id: 4,
  //     title: "Skill Badge Earned",
  //     subject: "Reading",
  //     description: 'You earned the "Book Worm" badge!',
  //     date: "May 20, 2:15 PM",
  //     daysAgo: "2 days ago",
  //     isNew: false,
  //     type: "badge",
  //     icon: "award",
  //     points: 100,
  //   },
  //   {
  //     id: 5,
  //     title: "New Avatar Unlocked",
  //     subject: "Rewards",
  //     description: "You unlocked a new explorer avatar!",
  //     date: "May 19, 11:30 AM",
  //     daysAgo: "3 days ago",
  //     isNew: false,
  //     type: "unlock",
  //     icon: "gift",
  //     points: 0,
  //   },
  // ];

  const getNotificationIcon = (type, icon) => {
    const iconClass = "h-5 w-5";
    const iconColor =
      {
        achievement: "text-yellow-600",
        quest: "text-purple-600",
        streak: "text-orange-500",
        badge: "text-blue-600",
        unlock: "text-green-600",
      }[type] || "text-gray-600";

    const iconBg =
      {
        achievement: "bg-yellow-100",
        quest: "bg-purple-100",
        streak: "bg-orange-100",
        badge: "bg-blue-100",
        unlock: "bg-green-100",
      }[type] || "bg-gray-100";

    const getIcon = () => {
      switch (icon) {
        case "medal":
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${iconClass} ${iconColor}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          );
        case "rocket":
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${iconClass} ${iconColor}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11.933 13.07c-.22 0-.4.18-.4.4v.4h-.8v-.4a1.2 1.2 0 012.4 0v.4h-.8v-.4c0-.22-.18-.4-.4-.4z" />
              <path
                fillRule="evenodd"
                d="M14.435 4.065l-2.49 2.49a7.5 7.5 0 00-5.89 0L3.565 4.065a.5.5 0 00-.13.65l.5.87a.5.5 0 00.65.2l1.1-.55a.5.5 0 01.67.22 3.5 3.5 0 006.48 0 .5.5 0 01.67-.22l1.1.55a.5.5 0 00.65-.2l.5-.87a.5.5 0 00-.13-.65z"
                clipRule="evenodd"
              />
              <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
              <path
                fillRule="evenodd"
                d="M12.5 18a.5.5 0 01-.5-.5v-2a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v2a.5.5 0 01-1 0v-2a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5v2a.5.5 0 01-.5.5z"
                clipRule="evenodd"
              />
            </svg>
          );
        case "flame":
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${iconClass} ${iconColor}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.289.437-.33.919-.33 1.55v1.5h1.5a.5.5 0 01.5.5 2.5 2.5 0 01-1.5 2.5v1a.5.5 0 01-1 0v-1a2.5 2.5 0 01-2.5-2.5v-1a.5.5 0 01.5-.5h1.5v-1.5c0-.63.041-1.113.33-1.55.208-.322.477-.65.822-.88a1 1 0 00.383-.5z"
                clipRule="evenodd"
              />
              <path d="M7.5 13.5a.5.5 0 01.5.5v.5a2.5 2.5 0 01-2.5 2.5h-1a.5.5 0 010-1h1a1.5 1.5 0 001.5-1.5v-.5a.5.5 0 01.5-.5z" />
              <path d="M12.5 16.5a.5.5 0 01.5-.5h1a1.5 1.5 0 001.5-1.5v-.5a.5.5 0 011 0v.5a2.5 2.5 0 01-2.5 2.5h-1a.5.5 0 01-.5-.5z" />
            </svg>
          );
        case "award":
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${iconClass} ${iconColor}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
          );
        case "gift":
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${iconClass} ${iconColor}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 010 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                clipRule="evenodd"
              />
              <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
            </svg>
          );
        default:
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${iconClass} ${iconColor}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          );
      }
    };

    return <div className={`${iconBg} p-2 rounded-full`}>{getIcon()}</div>;
  };

  const handleLogout = () => {
    localStorage.removeItem("childToken");
    navigate("/");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to internal YouTube search page
      navigate(`/youtube-search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Animation keyframes for bubbles
  const bubbleAnimation = `
    @keyframes float-slow {
      0%, 100% { transform: translateY(0) translateX(0); }
      50% { transform: translateY(-10px) translateX(5px); }
    }
    @keyframes float-medium {
      0%, 100% { transform: translateY(0) translateX(0); }
      50% { transform: translateY(-8px) translateX(-3px); }
    }
    @keyframes float-fast {
      0%, 100% { transform: translateY(0) translateX(0); }
      50% { transform: translateY(-5px) translateX(2px); }
    }
    .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
    .animate-float-medium { animation: float-medium 5s ease-in-out infinite; }
    .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
  `;
  const getDashboardData = async () => {
    const res = await axios.get(`${apiURL}/student/dashboard`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    // console.log(res.data);
    return res.data.dashboardResponse;
  };

  const {
    data: dashboardData = {},
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["dashboard-data-header"],
    queryFn: getDashboardData,
    staleTime: 5 * 60 * 1000,
  });

  const getUserLevelInfo = (age) => {
    if (age >= 6 && age <= 8) {
      return {
        title: "Early Explorer",
        icon: Compass,
        emoji: "🌱",
      };
    } else if (age >= 9 && age <= 12) {
      return {
        title: "Budding Innovator",
        icon: Lightbulb,
        emoji: "💡",
      };
    } else if (age >= 13 && age <= 15) {
      return {
        title: "Teen Trailblazer",
        icon: Map,
        emoji: "🚀",
      };
    } else if (age >= 16 && age <= 18) {
      return {
        title: "Visionary Achiever",
        icon: Target,
        emoji: "🎯",
      };
    } else {
      // Default for any other age
      return {
        title: "Super Explorer",
        icon: Crown,
        emoji: "✨",
      };
    }
  };

  const userAge = dashboardData?.currentUser?.age;
  const levelInfo = getUserLevelInfo(userAge);
  const LevelIcon = levelInfo.icon;

  const getUserInitials = (firstName, lastName) => {
    const firstInitial = firstName ? firstName.charAt(0).toUpperCase() : "";
    const lastInitial = lastName ? lastName.charAt(0).toUpperCase() : "";
    return `${firstInitial}${lastInitial}`;
  };

  const currentUser = dashboardData?.currentUser;
  const userInitials = getUserInitials(
    currentUser?.firstName,
    currentUser?.lastName
  );
  return (
    <>
      <style>{bubbleAnimation}</style>
      <header className="h-[70px] border-b border-gray-200 flex items-center justify-between px-4 fixed top-0 left-0 right-0 bg-[#0A1F44] z-50">
        {/* Animated Bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="bubble animate-float-slow absolute top-4 left-1/4 w-16 h-16 bg-white/10 rounded-full"></div>
          <div className="bubble animate-float-medium absolute top-8 right-1/3 w-12 h-12 bg-white/5 rounded-full"></div>
          <div className="bubble animate-float-fast absolute bottom-2 left-1/2 w-8 h-8 bg-white/10 rounded-full"></div>
        </div>

        {/* Left side - Logo and Toggle */}
        <div className="flex items-center flex-shrink-0 w-56">
          <button
            className="mr-2 cursor-pointer"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
          >
            <IoMenu size={30} color="white" />
          </button>
          <Link to="/home" className="flex items-center gap-3">
            <img src={Logo} className="w-[63px]" />
            <span className="text-2xl font-bold text-white">SkillSeed</span>
          </Link>
        </div>

        {/* Center - Search Bar */}
        <div className="flex-1 max-w-2xl mx-8">
          <form onSubmit={handleSearch} className="relative">
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchInputChange}
                placeholder="Search YouTube for educational videos..."
                className="w-full py-2 pl-4 pr-12 text-gray-900 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#3C91BA] text-white p-2 rounded-full hover:bg-[#2d7299] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <Search size={16} />
              </button>
            </div>
          </form>
        </div>

        {/* Right side - Notifications and Profile */}
        <div className="flex items-center space-x-3 w-auto justify-end">
          {/* Notification Menu */}
          <Menu as="div" className="relative ml-3">
            <div>
              <MenuButton className="flex rounded-full text-sm focus:outline-none">
                <span className="sr-only">Open notifications</span>
                <div className="relative">
                  {/* <div className="absolute -top-1 -right-1 w-4.5 h-4.5 rounded-full bg-red-500 flex items-center justify-center text-white text-xs">
                    92
                  </div> */}
                  <Bell className="h-6 w-6 text-white hover:text-gray-200 transition-colors" />
                </div>
              </MenuButton>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems className="absolute right-0 z-50 mt-2 w-[350px] origin-top-right rounded-md bg-white py-1 shadow-lg focus:outline-none font-primaryRegular">
                <MenuItem>
                  <div className="p-4 pb-2 flex justify-between items-center">
                    <h3 className="text-xl font-bold">Notifications</h3>
                    <button className="text-gray-400">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                          fill="currentColor"
                        />
                        <path
                          d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
                          fill="currentColor"
                        />
                        <path
                          d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                </MenuItem>

                <MenuItem>
                  <div className="bg-blue-50 flex items-center p-4 gap-4">
                    <div className="bg-white p-2 rounded-full">
                      <Bell className="h-5 w-5 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">
                        Stay updated with notifications
                      </p>
                      <p className="text-xs text-gray-500">
                        Never miss your achievements and rewards
                      </p>
                    </div>
                    <button className="rounded-full hover:bg-gray-800 text-sm">
                      Enable
                    </button>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="max-h-[400px] overflow-y-auto">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="flex p-4 border-l-4 border-transparent hover:bg-gray-50 border-b"
                      >
                        <div className="mr-3 flex-shrink-0">
                          {getNotificationIcon(
                            notification.type,
                            notification.icon
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <p className="font-medium text-sm">
                              {notification.title}
                            </p>
                            {notification.isNew && (
                              <span className="ml-2 flex-shrink-0 inline-block w-2 h-2 rounded-full bg-blue-500"></span>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            {notification.description}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                            <span>{notification.date}</span>
                            <span>•</span>
                            <span>{notification.daysAgo}</span>
                            {notification.points > 0 && (
                              <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-800 text-xs rounded-full">
                                +{notification.points} XP
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </MenuItem>
              </MenuItems>
            </Transition>
          </Menu>

          {/* Profile Menu */}
          <Menu as="div" className="relative ml-3">
            <div>
              <MenuButton className="flex rounded-full text-sm focus:outline-none">
                <span className="sr-only">Open user menu</span>
                <div className="bg-[#3C91BA] w-12 h-12 text-lg font-semibold text-white text-center p-2 rounded-full mx-4 my-2 flex items-center justify-center cursor-pointer hover:bg-[#2d7299] transition-colors">
                  {userInitials}
                </div>
              </MenuButton>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems className="absolute right-0 z-50 mt-2 w-[300px] origin-top-right rounded-md bg-white py-1 shadow-lg focus:outline-none font-primaryRegular">
                <MenuItem>
                  <div className="p-4 flex items-center gap-4 border-b border-b-gray-100">
                    <div className="h-14 w-14 rounded-full flex items-center justify-center text-xl text-white font-semibold bg-indigo-600">
                      {userInitials}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">
                        {dashboardData?.currentUser?.firstName +
                          " " +
                          dashboardData?.currentUser?.lastName}
                      </h3>
                      <p className="text-sm text-indigo-500 font-medium flex items-center justify-center gap-2">
                        <span className="text-[#FFC107]">
                          {levelInfo.emoji}
                        </span>
                        <LevelIcon size={14} className="text-[#FFC107]" />
                        {levelInfo.title}
                      </p>
                    </div>
                  </div>
                </MenuItem>

                <MenuItem className="px-4 py-3 cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center gap-3 text-base">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <Link to="/my-profile">
                      <div className="font-medium">My Profile</div>
                      <div className="text-xs text-gray-500">
                        View and edit your profile
                      </div>
                    </Link>
                  </div>
                </MenuItem>
                <MenuItem className="px-4 py-3 cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center gap-3 text-base">
                    <div className="p-2 bg-amber-50 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-amber-600"
                      >
                        <circle cx="12" cy="8" r="7"></circle>
                        {/* <polyline points="8.21 13.89 7 23l5-3 5 3-1.21-9.12"></polyline> */}
                      </svg>
                    </div>
                    <Link to="/achievements">
                      <div className="font-medium">Achievements</div>
                      <div className="text-xs text-gray-500">
                        Your badges and rewards
                      </div>
                    </Link>
                  </div>
                </MenuItem>
                <MenuItem className="px-4 py-3 cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center gap-3 text-base">
                    <div className="p-2 bg-green-50 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-600"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <Link to="/community">
                      <div className="font-medium">Community</div>
                      <div className="text-xs text-gray-500">
                        Explore different groups of like minds
                      </div>
                    </Link>
                  </div>
                </MenuItem>

                <MenuItem>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 text-base w-full justify-center py-3 cursor-pointer"
                  >
                    <LogOut size={20} />
                    <span>Logout</span>
                  </button>
                </MenuItem>
              </MenuItems>
            </Transition>
          </Menu>
        </div>
      </header>
    </>
  );
};

export default Header;
