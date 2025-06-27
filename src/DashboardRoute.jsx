import { Routes, Route } from "react-router-dom";
import { TooltipProvider } from "./components/ui/tooltip";
import { ThemeProvider } from "./theme/ThemeProvider";
import { SidebarProvider } from "./context/SidebarContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ChildOnboarding from "./pages/ChildOnboarding";
import QuizHome from "./pages/QuizExplorer/index";
import Quiz from "./pages/QuizExplorer/quiz";
import Results from "./pages/QuizExplorer/results";
import Activities from "./pages/Activities";
import Mentors from "./pages/Mentors";
import MentorDetail from "./pages/MentorDetail";
import CareerExcursions from "./pages/CareerExcursions";

const App = () => (
  <ThemeProvider>
    <TooltipProvider>
      <SidebarProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="quiz/:ageRange" element={<Quiz />} />
            <Route path="quiz" element={<QuizHome />} />
            <Route path="results" element={<Results />} />
            <Route path="activities" element={<Activities />} />
            <Route path="child-onboarding" element={<ChildOnboarding />} />
            <Route path="mentors" element={<Mentors />} />
            <Route path="mentor-detail/:mentorId" element={<MentorDetail />} />
            <Route path="career-excursions" element={<CareerExcursions />} />
            {/* <Route
              path="child-career-profile/:childId"
              element={<ChildCareerProfile />}
            /> */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </SidebarProvider>
    </TooltipProvider>
  </ThemeProvider>
);

export default App;
