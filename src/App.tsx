import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { WorkoutsPage } from "./components/WorkoutsPage";
import { NutritionPage } from "./components/NutritionPage";
import { ProgressPage } from "./components/ProgressPage";
import { CommunityPage } from "./components/CommunityPage";
import { PlansPage } from "./components/PlansPage";
import { AboutPage } from "./components/AboutPage";
import { BlogPage } from "./components/BlogPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onPageChange={setCurrentPage} />;
      case "workouts":
        return <WorkoutsPage />;
      case "nutrition":
        return <NutritionPage />;
      case "progress":
        return <ProgressPage />;
      case "community":
        return <CommunityPage />;
      case "plans":
        return <PlansPage />;
      case "about":
        return <AboutPage />;
      case "blog":
        return <BlogPage />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      {renderPage()}
    </div>
  );
}