import { useState } from "react";

function FeedbackForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);

    const res = await fetch("/.netlify/functions/submit-feedback", {
      method: "POST",
      body: JSON.stringify({ ...formData, timestamp: Date.now() }),
    });

    if (res.ok) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto bg-white dark:bg-gray-800 dark:shadow-gray-400 p-6 rounded shadow">
      <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-900 dark:text-white">Full Name</label>
        <input
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded dark:bg-white text-gray-900"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-900 dark:text-white">Email</label>
        <input
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded dark:bg-white text-gray-900"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-900 dark:text-white">Feedback Message</label>
        <textarea
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded dark:bg-white text-gray-900"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        {loading ? "Submitting..." : "Submit Feedback"}
      </button>

      {submitted && <p className="mt-4 text-green-600">Feedback submitted!</p>}
    </form>
  );
}

export default FeedbackForm;
