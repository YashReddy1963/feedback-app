import { useEffect, useState } from "react";

function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch("/.netlify/functions/get-feedback")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched feedback data:", data);
        setFeedbacks(data);
      });
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto mt-8 px-2 space-y-4">
      {feedbacks.length === 0 ? (
        <p className="text-center">No feedbacks yet.</p>
      ) : (
        feedbacks.map((fb, index) => (
          <div
            key={index}
            className="p-4 bg-white dark:bg-gray-800 rounded shadow w-full max-w-xl mx-auto dark:shadow-gray-400"
          >
            <h3 className="text-lg font-bold text-white">{fb.name}</h3>
            <p className="text-sm text-gray-500">{fb.email}</p>
            <p className="mt-2 text-white">{fb.feedback}</p> 
            <p className="mt-2 text-xs text-gray-400">
              Submitted on: {new Date(fb.created_at).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default FeedbackList;
