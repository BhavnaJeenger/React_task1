import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Hero from "./components/HeroSection";
import Working from "./components/Working";
import OffersList from "./components/OffersList";
import Categories from "./components/Categories";
import Favourite from "./components/Favourite";
import FeaturedIn from "./components/Features";
import CounterSection from "./components/CounterSection";
import JoinForm from "./components/joinForm";
import Footer from "./components/Footer";
import ScrollTopButton from "./components/ScrollTopButton";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPassword from "./pages/ForgetPage";

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      {/* Main site layout */}
      <Hero />
      <Working />
      <OffersList />
      <Categories />
      <Favourite />
      <FeaturedIn />
      <CounterSection />
      <JoinForm />
      <ScrollTopButton />
      <Footer />

      {/* Modal login overlay */}
      {location.pathname === "/login" && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-transparent">
          <LoginPage />
        </div>
      )}

      {location.pathname === "/signup" && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-transparent">
          <SignUpPage />
        </div>
      )}

      {location.pathname === "/forgot-password" && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-transparent">
          <ForgotPassword />
        </div>
      )}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<AppContent />} />
      </Routes>
    </Router>
  );
};

export default App;
