# 🌍 EcoTrack AI: Your SustainTrack Platform  

EcoTrack AI is an AI-powered waste management platform that allows users to report waste, collect waste, and earn rewards while promoting a cleaner environment. Built with **Next.js** and **Gemini AI**, this project encourages responsible waste disposal through gamification and community participation.


![EcoTrack AI Banner](https://i.postimg.cc/hG1THsLC/Screenshot-2025-02-17-130702.png)


---

## 🚀 Features  

- **Home Page** – Navigate through all functionalities.  
- **Report Waste** – Users can post waste near their location. **Gemini AI** estimates its weight (in kg) and waste type. Users manually input the location.  
- **Collect Waste** – Users verify and complete waste collection tasks by uploading an image. AI matches it for accuracy before marking it as complete.  
- **Rewards Page** – Users earn points for reporting and collecting waste (collecting gives more points).  
- **Leaderboard** – Displays the ranking of users based on points earned.  

---

## 🛠️ Getting Started  

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

Create a `.env.local` file in the root directory and add the following environment variables:  

````plaintext
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_MAP_API_KEY=your_map_api_key
NEXT_PUBLIC_FIREBASE_CONFIG=your_firebase_config
````

Replace `your_gemini_api_key`, `your_map_api_key`, and `your_firebase_config` with actual values.  

### Start the Development Server  

````sh
npm run dev
````

The app should now be running on **http://localhost:3000** 🚀  

---

## 🎯 How It Works  

1. **Report Waste** – Users submit waste details (location + image). AI analyzes weight & type.  
2. **Collect Waste** – Users verify the report by uploading an image of collected waste. AI confirms the match.  
3. **Earn Rewards** – Users gain points for reports and collections. Collecting gives more points.  
4. **Leaderboard** – Users can track their ranking in the community.  

---

## 🏗️ Tech Stack  

- **Frontend** – Next.js (React)  
- **Backend** – Firebase (Auth & Database)  
- **AI Integration** – Gemini AI (Image analysis & verification)  
- **Maps API** – Location-based waste tracking  

---

## 📜 License  

This project is **open-source** under the [MIT License](LICENSE).  

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

🌱 **Let's make the world cleaner, together!** 🚮♻️  
