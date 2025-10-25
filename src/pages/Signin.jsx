import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Lock,
  Star,
  Rocket,
  Heart,
  Sparkles,
  Trophy,
  Gamepad2,
} from "lucide-react";
import mascotImage from "../assets/skillseed-mascot.png";
import { Input } from "../components/ui/formComponents/input";

const Signin = () => {
  const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const { handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const initialValues = {
    firstName: "",
    password: "",
  };

  const [loginDetails, setLoginDetails] = useState(initialValues);
  const { firstName, password } = loginDetails;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const onSubmit = async () => {
    setIsLoading(true);
    setErrorMessage(null);
    const url = `${apiURL}/auth/child/signin`;

    try {
      const response = await axios.post(url, loginDetails);
      // console.log(response);
      const accessToken = response.data.access_token;
      const childAge = response.data.user.age;
      const userId = response.data.user._id;
      localStorage.setItem("childToken", accessToken);
      localStorage.setItem("childAge", childAge);

      // Check if user has completed any quizzes
      try {
        const response = await axios.get(`${apiURL}/student/dashboard`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        });

        // Check if quizzes array is empty - new user should go to quizHome
        const quizStatus = response.data.dashboardResponse.quizStatus;
        // console.log(quizStatus)
        if (quizStatus.needsToTakeQuiz || !quizStatus.isCompleted) {
          navigate("/quizHome");
        } else {
          // User has completed quizzes -> go to home
          navigate("/home");
        }
      } catch (dashboardError) {
        // If dashboard call fails for any reason, redirect to home as fallback
        console.error("Dashboard API error:", dashboardError);
        navigate("/home");
      }
    } catch (error) {
      console.error("Error in API call:", error);
      setErrorMessage("Login failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const FloatingIcon = ({ icon: Icon, className = "", delay = 0 }) => (
    <div
      className={`absolute animate-float ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <Icon className="w-6 h-6 text-fun-pink opacity-60" />
    </div>
  );

  return (
    <>
      <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center p-4">
        {/* Background floating elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <FloatingIcon icon={Star} className="top-20 left-20" delay={0} />
          <FloatingIcon icon={Heart} className="top-32 right-32" delay={1} />
          <FloatingIcon
            icon={Sparkles}
            className="bottom-40 left-16"
            delay={2}
          />
          <FloatingIcon
            icon={Trophy}
            className="bottom-20 right-20"
            delay={0.5}
          />
          <FloatingIcon
            icon={Gamepad2}
            className="top-60 left-1/3"
            delay={1.5}
          />
        </div>
        <div className="bg-card rounded-3xl fun-shadow w-full max-w-md p-8 relative overflow-hidden hover-lift">
          {/* Decorative background elements */}
          <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-fun-pink to-fun-purple rounded-full opacity-20 animate-pulse-slow"></div>
          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-accent to-fun-orange rounded-full opacity-20 animate-bounce-soft"></div>
          {/* Header */}
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <img
                src={mascotImage}
                alt="Skillseed Mascot"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-accent fun-shadow-hover animate-bounce-soft"
              />
              <div className="absolute -top-2 -right-2 bg-success rounded-full p-1 animate-wiggle">
                <Star className="w-4 h-4 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Welcome Back! 🌱
            </h1>
            <p className="text-muted-foreground">
              Let's continue your learning adventure!
            </p>
          </div>
          {/* Fun progress indicators */}
          <div className="flex justify-center gap-2 mb-6">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            <div
              className="w-3 h-3 bg-fun-pink rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-3 h-3 bg-secondary rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
          {/* Signin Form */}
          <form
            id="signup-form"
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="space-y-2">
              <label className="block text-sm font-bold text-foreground flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                Your Super Cool Name
              </label>
              <div className="relative group">
                <Input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("firstName")}
                  className={`pl-12 py-6 rounded-2xl border transition-all duration-300 ${
                    focusedField === "firstName"
                      ? "border-primary fun-shadow-hover scale-105"
                      : "border-border hover:border-primary/50"
                  }`}
                  placeholder="Enter your first name"
                  required
                />
                <User
                  className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                    focusedField === "firstName"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                />
                {focusedField === "firstName" && (
                  <Sparkles className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent animate-wiggle" />
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-foreground flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                Your Secret Password
              </label>
              <div className="relative group">
                <Input
                  type="text"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("password")}
                  className={`pl-12 py-6 rounded-2xl border transition-all duration-300 ${
                    focusedField === "password"
                      ? "border-primary fun-shadow-hover scale-105"
                      : "border-border hover:border-primary/50"
                  }`}
                  placeholder="Enter your secret password"
                  required
                />
                <Lock
                  className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                    focusedField === "password"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                />
                {focusedField === "password" && (
                  <Heart className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-fun-pink animate-wiggle" />
                )}
                {/* <button
                  type="button"
                  className="absolute top-0 inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-sm leading-5 text-gray-500"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <IoIosEye size={25} />
                  ) : (
                    <IoIosEyeOff size={25} />
                  )}
                </button> */}
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 font-bold rounded-2xl transition-all duration-300 flex items-center justify-center text-white cursor-pointer ${
                isLoading
                  ? "bg-muted cursor-not-allowed"
                  : "bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary-hover hover-lift"
              }`}
            >
              {isLoading ? (
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-white">Getting Ready...</span>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Rocket className="w-6 h-6 text-white" />
                  <span className="text-white">Start Learning Adventure!</span>
                  <Star className="w-6 h-6 text-white animate-wiggle" />
                </div>
              )}
            </button>
            {errorMessage && (
              <div className="bg-red-500 text-white text-sm font-primaryMedium p-4 mt-4 text-center">
                {errorMessage}
              </div>
            )}
          </form>
          {/* Fun Footer Message */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm">
              Ready to grow your skills? 🚀
            </p>
            <div className="flex justify-center gap-2 mt-3">
              <Trophy className="w-5 h-5 text-accent animate-bounce-soft" />
              <Gamepad2
                className="w-5 h-5 text-fun-green animate-bounce-soft"
                style={{ animationDelay: "0.3s" }}
              />
              <Star
                className="w-5 h-5 text-fun-pink animate-bounce-soft"
                style={{ animationDelay: "0.6s" }}
              />
            </div>
          </div>
          {/* Floating reaction elements */}
          {firstName && (
            <div className="absolute top-4 right-4">
              <div className="bg-success text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce-soft">
                Great name! 😊
              </div>
            </div>
          )}{" "}
        </div>
      </div>
    </>
  );
};

export default Signin;
