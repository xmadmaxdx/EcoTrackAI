# 🌍 EcoTrack AI: Your SustainTrack Platform  

EcoTrack AI is an AI-powered waste management platform that allows users to report waste, collect waste, and earn rewards while promoting a cleaner environment. Built with Next.js (React), TypeScript, and Gemini AI, this project encourages responsible waste disposal through gamification and community participation.


![EcoTrack AI Banner](https://i.postimg.cc/hG1THsLC/Screenshot-2025-02-17-130702.png)

## Login Process:
Before users can access any features, they must log in using Web3 Auth for secure authentication.


---

## 🚀 Features  

- Home Page – Navigate through all functionalities.  
- Report Waste – Users can post waste near their location. Gemini AI estimates its weight (in kg) and waste type. Users manually input the location.  
- Collect Waste – Users verify and complete waste collection tasks by uploading an image. AI matches it for accuracy before marking it as complete.  
- Rewards Page – Users earn points for reporting and collecting waste (collecting gives more points).  
- Leaderboard – Displays the ranking of users based on points earned.  

---

## 🛠 Getting Started  

### Clone the Repository  

````sh
git clone https://github.com/xmadmaxdx/EcoTrackAI.git
cd EcoTrackAI
````

### Install Dependencies  

````sh
npm install
````

### Set Up Environment Variables  

Create a .env file in the root directory and add the following environment variables:  

````plaintext
NEXT_PUBLIC_WEB3_AUTH_CLIENT_ID=your_web3_auth_client_id
DATABASE_URL=your_database_url
````

Replace your_gemini_api_key, your_web3_auth_client_id, and your_database_url with actual values.  

### Start the Development Server  

````sh
npm run dev
````

The app should now be running on http://localhost:3000 🚀  

---

## 🎯 How It Works  

1. Report Waste – Users submit waste details (location + image). AI analyzes weight & type.  
2. Collect Waste – Users verify the report by uploading an image of collected waste. AI confirms the match.  
3. Earn Rewards – Users gain points for reports and collections. Collecting gives more points.  
4. Leaderboard – Users can track their ranking in the community.  

---

## 🏗 Tech Stack  

- Frontend – Next.js (React) + TypeScript
- Backend – Neon (PostgreSQL)
- AI Integration – Gemini AI (Image analysis & verification)  

---

## 📜 License  

This project is licensed under the [GNU AFFERO GENERAL PUBLIC LICENSE](LICENSE).  

---

## 🤝 Contributing  

Want to contribute? Feel free to fork the repo, create a new branch, and submit a pull request!  

````sh
git checkout -b feature-branch
git commit -m "Your feature description"
git push origin feature-branch
````

---

## 💡 Future Enhancements  

- ✅ AI-powered waste classification improvements  
- ✅ Community challenges for higher engagement  
- ✅ Mobile app integration for easier access  

---

🌱 Let's make the world cleaner, together! 🚮♻️
