import { Routes, Route } from "react-router-dom";
import { TooltipProvider } from "./components/ui/tooltip";
import { ThemeProvider } from "./theme/ThemeProvider";
import { SidebarProvider } from "./context/SidebarContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Achievements from "./pages/Achievements";
import NotFound from "./pages/NotFound";
import QuizHome from "./pages/QuizExplorer/index";
import Quiz from "./pages/QuizExplorer/Quiz";
import Results from "./pages/QuizExplorer/results";
import Activities from "./pages/Activities";
import Mentors from "./pages/Mentors";
import MentorDetail from "./pages/MentorDetail";
import CareerExcursions from "./pages/CareerExcursions";
import Community from "./pages/Community";
import CommunityDetail from "./pages/CommunityDetails";
import CareerRecommendation from "./pages/CareerRecommendations";
import AIAdvisor from "./pages/AIAdvisor";
import Profile from "./pages/Profile";
import Resources from "./pages/Resources";
import YouTubeSearchPage from "./pages/YoutubeSearchPage";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <TooltipProvider>
      <SidebarProvider>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="home" element={<Home />} />
              <Route path="activities" element={<Activities />} />
              <Route path="resources" element={<Resources />} />
              <Route path="achievements" element={<Achievements />} />
              <Route path="quiz" element={<Quiz />} />
              <Route path="quizHome" element={<QuizHome />} />
              <Route path="ai-advisor" element={<AIAdvisor />} />
              <Route path="results" element={<Results />} />
              <Route path="mentors" element={<Mentors />} />
              <Route
                path="mentor-detail/:mentorId"
                element={<MentorDetail />}
              />
              <Route path="career-excursions" element={<CareerExcursions />} />
              <Route
                path="career-recommendations"
                element={<CareerRecommendation />}
              />
              <Route path="community" element={<Community />} />
              <Route
                path="community/:communityId"
                element={<CommunityDetail />}
              />
              <Route
                path="community/:communityId"
                element={<CommunityDetail />}
              />
              <Route path="my-profile" element={<Profile />} />
              <Route path="/youtube-search" element={<YouTubeSearchPage />} />
              {/* <Route
              path="child-career-profile/:childId"
              element={<ChildCareerProfile />}
            /> */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </QueryClientProvider>
      </SidebarProvider>
    </TooltipProvider>
  </ThemeProvider>
);

export default App;
