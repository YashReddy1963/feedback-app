import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [showFeedbacks, setShowFeedbacks] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); 

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen min-w-screen flex justify-center px-4 py-8 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div
        className={`rounded-3xl shadow-2xl pt-4 pb-4 w-full max-w-2xl mx-2 sm:mx-4 transition-all duration-300 ${
          isDarkMode ? "bg-gray-800 shadow-gray-700" : "bg-white shadow-gray-400"
        }`}
      >
        {/* Theme Button */}
        <div className="flex justify-end pr-6 mb-4">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300
              hover:scale-105
              bg-indigo-600 text-white hover:bg-indigo-700"
          >
            {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </div>

        {/* Heading */}
        <h1
          className={`text-3xl font-bold text-center mb-6 mt-4 transition-colors duration-300 ${
            isDarkMode ? "text-white" : "text-gray-700"
          }`}
        >
          Feedback Collector
        </h1>

        {/* Feedback Form */}
        <FeedbackForm />

        {/* View Feedback Button */}
        <div className="text-center mt-6">
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
            onClick={() => setShowFeedbacks(!showFeedbacks)}
          >
            {showFeedbacks ? "Hide Feedbacks" : "View Submitted Feedback"}
          </button>
        </div>

        {/* Feedback List */}
        {showFeedbacks && <FeedbackList />}

        {/* My footer */}
        <footer className="mt-10 text-center text-sm text-gray-400">
          Built by Yash Munurreddy • Submitted for Netlify Task
        </footer>
      </div>
    </div>
  );
}

export default App;
