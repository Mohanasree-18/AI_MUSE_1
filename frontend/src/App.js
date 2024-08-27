import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/Users/Register";
import Login from "./components/Users/Login";
import Dashboard from "./components/Users/Dashboard";
import PrivateNavbar from "./components/Navbar/PrivateNavbar";
import PublicNavbar from "./components/Navbar/PublicNavbar";
import Home from "./components/Home/Home";
import { useAuth } from "./AuthContext/AuthContext";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import BlogPostAIAssistant from "./components/ContentGeneration/ContentGeneration";
import Plans from "./components/Plan/Plan";
import FreePlanSignup from "./components/Stripe/FreePlanSingup";
import CheckoutForm from "./components/Stripe/CheckoutForm";
import PaymentSuccess from "./components/Stripe/PaymentSuccess";
import ContentGenerationHistory from "./components/ContentGeneration/ContentHistory";
import AppFeatures from "./components/Features/Features";
import AboutUs from "./components/About/About";

export default function App() {
  //custome auth hook
  const { isAuthenticated } = useAuth();
  return (
    <BrowserRouter>
      {isAuthenticated ? <PrivateNavbar /> : <PublicNavbar />}
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/Dashboard"
          element={
            <AuthRoute>
              <Dashboard />
            </AuthRoute>
          }
        />
        <Route
          path="/generate-content"
          element={
            <AuthRoute>
              <ContentGenerationHistory />
            </AuthRoute>
          }
        />
        <Route
          path="/history"
          element={
            <AuthRoute>
              <BlogPostAIAssistant />
            </AuthRoute>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/free-plan" element={<FreePlanSignup />} />
        <Route path="/checkout/:plan" element={<CheckoutForm />} />
        <Route path="/success" element={<PaymentSuccess />} />
        <Route path="/features" element={<AppFeatures />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}
