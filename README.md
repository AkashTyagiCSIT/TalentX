💼 TalentX

A full-stack  Job Portal built with MERN stack featuring resume upload, job applications, and recruiter dashboards

       
A modern, full-stack  TalentX(Job Portal) built with the powerful MERN stack — enabling both job seekers (students) and recruiters to connect seamlessly. With a clean, animated, and responsive UI, this platform allows users to explore opportunities, post jobs, and manage applications with ease.

✨ Features

✅ General

🔐 Authentication System — Secure login & registration using JWT

👥 Role-Based Access — Separate dashboards for students and recruiters

🌐 Clean, Responsive UI — Built with Tailwind CSS & Shadcn UI

🎯 Dynamic Routing & State Management — Smooth navigation across the app

🎓 Student Role

Browse and search job listings
Apply to jobs with one click
Track application status in personal dashboard

🧑‍💼 Recruiter Role

Post new job opportunities
View applicants for each job
Edit or delete job postings
Manage all listings from a unified dashboard

🎨 UI & Animations

The UI is built with Tailwind CSS and enhanced with shadcn/ui components for consistency and accessibility. Smooth animations and transitions are added using Framer Motion, delivering a modern and engaging user experience.

Responsive layout for mobile, tablet, and desktop
Dark/light mode support (optional if implemented)
Animated modals, buttons, and transitions
Accessible and consistent component design

🛠️ Tech Stack

🧑‍💻 Frontend

React.js – Component-based architecture
Tailwind CSS – Utility-first CSS for clean, responsive UI
Shadcn UI – Beautiful, headless UI components
Framer Motion – Animations and motion effects
React Router – Client-side routing
Axios – API communication

🖥️ Backend

Node.js – Server-side JavaScript runtime
Express.js – Web framework for APIs
MongoDB – NoSQL database for storing user/job data
Mongoose – MongoDB object modeling for Node.js
JWT (JSON Web Token) – Authentication and authorization

📁 Project Structure

 TalentX
 TalentX/
├── client/
│   ├── src/
│   ├── public/
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   ├── .env.production

├── server/
│   ├── server.js
│   ├── package.json
│   └── ...
├── .gitignore
└── README.md

🔒 Authentication Flow

Users register/login with their email and password

JWT tokens are issued and stored securely

Access is restricted based on user roles (student/recruiter)

Protected routes for job posting, applications, and dashboards

⚙️ Getting Started

1. Clone the Repository
cd  TalentX
2. Setup Environment Variables
Create a .env file inside the server/ directory with:

MONGODB_URI = ""
PORT = 8000
SECRET_KEY = ""

CLOUDINARY_API_KEY = ""
CLOUDINARY_SECRET_KEY = ""
CLOUDINARY_NAME = ""

NODE_ENV === ""
# 3. Run the Application

```bash
# Start backend server
cd Server
npm install
npm run dev

# Start frontend dev server (in new terminal)
cd Client
npm install
npm run dev
```

### Open in browser:
- Frontend → http://localhost:5173
- Backend → http://localhost:5000
Website Link > https://job-portal-opal-nu.vercel.app/

📜 License

This project is open-source and licensed under the MIT License.

🙌 Contributions

Feel free to fork the repo, submit issues, or open a pull request. Suggestions and contributions are always welcome!
