import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Home/Dashboard.jsx'; // Dashboard component
import LoginForm from './pages/login/loginForm.jsx'; // Login component
import SignupForm from "./pages/signup/SignupForm.jsx";// signup component
import UserProfile from "./pages/userprofile/UserProfile.jsx";// signup component
import MentorProfile from "./pages/mentorprofile/MentorProfile.jsx";// signup component
import CourseModule from "./pages/CourseModule/CourseLayout.jsx";// signup component
import LiveChatRoom from "./pages/LiveChatRoom/LiveChatRoom.jsx";// signup component
import DashboardLayout from "./pages/Dashboard/DashboardLayout.jsx";// signup component
import QuizDashboard from "./pages/quiz/QuizDashboard.jsx";// signup component
import VisualDesignPrinciples from "./pages/visualDesign/components/VisualDesignPrinciples.jsx";// signup component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/mentorprofile" element={<MentorProfile />} />
        <Route path="/coursemodule" element={<CourseModule/>} />
        <Route path="/livechatroom" element={<LiveChatRoom/>} />
        <Route path="/dashboard" element={<DashboardLayout/>} />
        <Route path="/quiz" element={<QuizDashboard/>} />
        <Route path="/visualdesign" element={<VisualDesignPrinciples/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;