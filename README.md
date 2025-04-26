# Feedback Collector App

A simple, clean, and mobile-responsive Feedback Collection App built using **React** and **Netlify Serverless Functions**.  
Users can submit their feedback, view all submitted feedbacks, and switch between dark and light modes.

---

## 🚀 Project Summary

This project allows users to submit their feedback via a form.  
The submitted feedback is temporarily stored using **Netlify Functions** inside a serverless environment (in a `/tmp` JSON file).  
Users can also view all feedbacks submitted during that session!

---

## 🛠️ Tech Stack

- **Frontend**: React, TailwindCSS
- **Backend**: Netlify Serverless Functions (Node.js)
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

4. Set up Netlify Functions:
    * Create a folder `/netlify/functions`
    * Add your two serverless functions:
        * `submit-feedback.js`
        * `get-feedback.js`

5. Run your app locally with functions

---

## Deployment Instructions
* Push your project to GitHub.
* Connect your GitHub repository to Netlify.
* In Netlify settings:
    * Set the Functions folder as netlify/functions
* Deploy!

---

## Live Link
[Feedback Collector App](https://ubiquitous-souffle-357ccd.netlify.app/)

---
