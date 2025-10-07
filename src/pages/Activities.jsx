import React, { useMemo, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { Clock, Star, Play } from "lucide-react";

const Activities = () => {
  const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;
  const token = localStorage.getItem("childToken");
  const age = parseInt(localStorage.getItem("childAge")) || 0;
  const [currentStep, setCurrentStep] = useState("tutorial");
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCompleting, setIsCompleting] = useState(false);

  // Function to determine if community is suitable for child's age
  const isAgeAppropriate = (ageRange, childAge) => {
    if (!ageRange || !childAge) return true; // Show all if age data is missing

    const [minAge, maxAge] = ageRange
      .split("-")
      .map((age) => parseInt(age.trim()));
    return childAge >= minAge && childAge <= maxAge;
  };

  const getActivities = async () => {
    const res = await axios.get(`${apiURL}/student/dashboard/challenges`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log(res.data);
    return res.data;
  };

  const {
    data: activities = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["activities"],
    queryFn: getActivities,
    staleTime: 5 * 60 * 1000,
  });

  // Filter communities based on child's age
  const filteredActivities = useMemo(() => {
    if (!Array.isArray(activities)) return [];

    return activities.filter((activity) =>
      isAgeAppropriate(activity.ageRange, age)
    );
  }, [activities, age]);

  // Convert YouTube URL to embed format
  const getYouTubeEmbedUrl = (url) => {
    if (!url) return "";
    const videoId = url.match(
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?\/\s]{11})/
    );
    if (videoId && videoId[1]) {
      return `https://www.youtube.com/embed/${videoId[1]}`;
    }
    return url;
  };

  const handleStartActivity = (activity) => {
    setSelectedActivity(activity);
    setCurrentStep("tutorial");
    setIsModalOpen(true);
  };

  const handleStartProject = () => {
    setCurrentStep("project");
  };

  const handleCompleteProject = async () => {
    if (!selectedActivity) return;

    setIsCompleting(true);
    try {
      const response = await axios.post(
        `${apiURL}/student/rewards/complete-challenge/${selectedActivity._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response, "checking for complete endpoint");
      setCurrentStep("completed");
    } catch (error) {
      console.error("Error completing project:", error);
      // You might want to show an error message to the user here
      alert("Failed to mark project as complete. Please try again.");
    } finally {
      setIsCompleting(false);
    }
  };

  const resetFlow = () => {
    setCurrentStep("tutorial");
    setSelectedActivity(null);
    setIsModalOpen(false);
  };

  const handleTryAnotherActivity = () => {
    // setCurrentStep("tutorial");
    // setSelectedActivity(null);
    setIsModalOpen(false);
  };

  // Tutorial Step Component
  const TutorialStep = ({ activity }) => (
    <div className="space-y-4">
      <div className="aspect-video w-full rounded-xl overflow-hidden bg-gray-100">
        {activity.videoTutorialUrl ? (
          <iframe
            src={getYouTubeEmbedUrl(activity.videoTutorialUrl)}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={`${activity.title} Tutorial`}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            <Play className="w-12 h-12 mb-2" />
            <p>Video tutorial not available</p>
          </div>
        )}
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold">Watch the Tutorial First!</h3>
        <p className="text-gray-600">
          Learn how to complete "{activity.title}" by watching this helpful
          video tutorial.
        </p>

        <div className="flex flex-wrap gap-2 text-sm">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">
            {activity.theme}
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
            {activity.difficultyLevel}
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
            Age {activity.ageRange}
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
            ~{activity.estimatedTime} min
          </span>
        </div>
      </div>
    </div>
  );

  // Project Step Component
  const ProjectStep = ({ activity }) => (
    <div className="space-y-4">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Play className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Let's Build!</h3>
        <p className="text-gray-600 mb-6">
          Now it's time to create your own {activity.title}!
        </p>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
        <h4 className="font-bold text-lg mb-3 text-gray-900">
          Project: {activity.title}
        </h4>
        <p className="text-gray-700 mb-4">{activity.description}</p>

        <div className="space-y-3">
          <p className="font-semibold text-gray-900">What you'll learn:</p>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Hands-on {activity.theme.toLowerCase()} experience
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Problem-solving and creativity
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Following step-by-step instructions
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
        <div className="flex items-start">
          <span className="text-2xl mr-3">💡</span>
          <div>
            <p className="font-semibold text-amber-800">Pro Tip:</p>
            <p className="text-amber-700">
              Take your time and don't forget to have fun! You can always
              rewatch the tutorial if needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  // Completion Step Component
  const CompletionStep = ({ activity }) => (
    <div className="space-y-6 text-center">
      <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto">
        <span className="text-4xl">🏆</span>
      </div>
      <div>
        <h3 className="text-3xl font-bold text-green-600 mb-2">
          Congratulations!
        </h3>
        <p className="text-gray-600 text-lg">
          You've successfully completed the {activity.title} project!
        </p>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
        <h4 className="font-bold text-green-800 mb-2 text-lg">
          Achievement Unlocked!
        </h4>
        <div className="flex items-center justify-center space-x-2">
          <Star className="w-5 h-5 text-yellow-500 fill-current" />
          <span className="text-green-700 font-medium">
            {activity.theme} Explorer Badge earned!
          </span>
          <Star className="w-5 h-5 text-yellow-500 fill-current" />
        </div>
      </div>

      <div className="space-y-3">
        <p className="font-semibold text-gray-900">What's next?</p>
        <p className="text-gray-600">
          Try another exciting activity or share your creation with friends and
          family!
        </p>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading your fun activities...</p>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <p className="text-red-600 mb-4">
            Oops! Something went wrong loading activities.
          </p>
          <Button onClick={() => refetch()}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Fun Learning Activities
        </h1>
        <p className="text-gray-600 text-lg">
          Discover exciting projects and learn something new!
        </p>
      </div>
      {filteredActivities.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 px-4">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-6">
            <span className="text-6xl">🎨</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            No Activities Available Yet
          </h2>
          <p className="text-gray-600 text-center max-w-md mb-6">
            We're working on adding exciting new activities for your age group.
            Check back soon for fun learning projects!
          </p>
          <Button
            onClick={() => refetch()}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            Refresh Activities
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActivities.map((activity) => (
            <Card
              key={activity._id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white rounded-2xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={activity?.imageUrl}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  // onError={(e) => {
                  //   e.target.src = `https://via.placeholder.com/400x300/4F46E5/ffffff?text=${encodeURIComponent(
                  //     activity.title
                  //   )}`;
                  // }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {activity.theme}
                  </span>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2">
                    {activity.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="pb-4">
                <CardDescription className="text-gray-600 line-clamp-3 mb-4">
                  {activity.description}
                </CardDescription>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{activity.estimatedTime} min</span>
                    </div>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      Age {activity.ageRange}
                    </span>
                  </div>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded font-medium">
                    {activity.difficultyLevel}
                  </span>
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                  <DialogTrigger asChild>
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg disabled:cursor-not-allowed"
                      onClick={() => handleStartActivity(activity)}
                      disabled={activity.isCompleted}
                    >
                      {activity.isCompleted ? "Completed ✓" : "Start Activity"}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold">
                        {selectedActivity?.title}
                      </DialogTitle>
                      <DialogDescription className="text-lg">
                        {currentStep === "tutorial" &&
                          "Watch the tutorial to get started"}
                        {currentStep === "project" &&
                          "Time to build your project!"}
                        {currentStep === "completed" &&
                          "Project completed successfully!"}
                      </DialogDescription>
                    </DialogHeader>

                    <div className="py-6">
                      {selectedActivity && (
                        <>
                          {currentStep === "tutorial" && (
                            <TutorialStep activity={selectedActivity} />
                          )}
                          {currentStep === "project" && (
                            <ProjectStep activity={selectedActivity} />
                          )}
                          {currentStep === "completed" && (
                            <CompletionStep activity={selectedActivity} />
                          )}
                        </>
                      )}
                    </div>

                    <DialogFooter className="flex flex-col sm:flex-row gap-3">
                      {currentStep === "tutorial" && (
                        <>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={resetFlow}
                            className="flex-1"
                          >
                            Cancel
                          </Button>
                          <Button
                            type="button"
                            onClick={handleStartProject}
                            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                          >
                            Start Project
                          </Button>
                        </>
                      )}
                      {currentStep === "project" && (
                        <>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setCurrentStep("tutorial")}
                            className="flex-1"
                          >
                            Back to Tutorial
                          </Button>
                          <Button
                            type="button"
                            onClick={handleCompleteProject}
                            disabled={isCompleting}
                            className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:opacity-50"
                          >
                            {isCompleting
                              ? "Completing..."
                              : "Complete Project"}
                          </Button>
                        </>
                      )}
                      {currentStep === "completed" && (
                        <>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={resetFlow}
                            className="flex-1"
                          >
                            Close
                          </Button>
                          <Button
                            type="button"
                            onClick={handleTryAnotherActivity}
                            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                          >
                            Try Another Activity
                          </Button>
                        </>
                      )}
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Activities;
