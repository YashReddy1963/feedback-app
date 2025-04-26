# Feedback Collector App

A simple, clean, and mobile-responsive Feedback Collection App built using **React** and **Supabase Database**.  
Users can submit their feedback, view all submitted feedbacks, and switch between dark and light modes.

---

## 🚀 Project Summary

This project allows users to submit their feedback via a form.  
The submitted feedback is permanently stored using **Supabase Table**
Users can also view all feedbacks submitted during that session!

---

## 🛠️ Tech Stack

- **Frontend**: React, TailwindCSS
- **Backend**: Supabase Table
- **Deployment**: Netlify

---


## 🛠️ How to Run Locally

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/feedback-collector.git
   cd feedback-collector

2. Install dependencies
    ```bash
    npm install

3. Start the development server
    ```bash
    npm run dev

4. Set up Supabase:
    * Create a new project and a new table (feedbacks) with the following columns:
        * name: Text
        * email: Text
        * feedback: Text
        * timestamp: Timestamp (default to now())
    * Obtain your Supabase URL and API Key from the project settings.
    * Add your Supabase credentials (supabaseUrl and supabaseKey) in the FeedbackList and SubmitFeedback components.


5. Run your app locally with provided API and functionality

---

## Deployment Instructions
* Push your project to GitHub.
* Connect your GitHub repository to Netlify.
* Deploy!

---

## Live Link
[Feedback Collector App](https://ubiquitous-souffle-357ccd.netlify.app/)

---
