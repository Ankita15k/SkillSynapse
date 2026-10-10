# 🧠 SkillSynapse

> **AI-Powered Career Architect & Personalized Learning Companion**

SkillSynapse is an intelligent, full-stack career acceleration platform designed to bridge the gap between ambitious technical goals and structured execution. By combining **Google Gemini 2.5**, interactive skill diagnostics, and adaptive roadmap generation, SkillSynapse assesses a learner's existing competencies, identifies knowledge gaps, and provides an end-to-end tailored curriculum with real-time AI tutoring.

---

## 🌟 Key Features

### 🎯 1. Goal Personalization & AI Architect
- Define target career goals, current experience levels (*Beginner*, *Intermediate*, *Advanced*), and desired completion timelines.
- Generates an immediate preliminary learning roadmap outlining progressive learning phases, suggested projects, and core competencies.

### 🧪 2. Dynamic AI Skill Assessment
- **Zero static question banks**: SkillSynapse uses Gemini 2.5 to dynamically generate 6 multiple-choice technical questions uniquely tailored to your target goal and experience level.
- Interactive timed quiz experience evaluating practical conceptual knowledge.

### 📊 3. Skill Gap Diagnostics & Confidence Scoring
- Automated diagnostic report analyzing test responses to identify:
  - **Identified Strengths** & foundational competencies
  - **Identified Weaknesses** & critical knowledge gaps
  - **Evaluated Skill Level** & actionable AI recommendations
- Generates an accurate **Confidence Score** (%) and records historical performance data to visualize progress over time.

### 🗺️ 4. Adaptive Final Roadmaps & Milestone Tracking
- Synthesizes assessment results to construct a personalized final roadmap explicitly prioritized around closing detected skill gaps.
- Interactive milestone checklists allow users to mark modules and sub-topics as completed, recalculating progress dynamically.

### 📈 5. Multi-Goal Career Dashboard & Streak Analytics
- Manage multiple independent learning goals simultaneously (e.g., *Full Stack Developer*, *DevOps Engineer*, *Machine Learning Specialist*).
- Aggregated metrics tracking:
  - Total, active, and completed goals
  - Overall assessment counts and average confidence scores
  - Daily active study streak tracking
  - Interactive performance history charts powered by **Recharts**

### 🤖 6. Context-Aware AI Tutor (SSE Streaming)
- Integrated real-time AI tutor powered by Gemini 2.5 with Server-Sent Events (SSE) streaming.
- **Context-aware intelligence**: The tutor automatically knows your active goal and diagnosed weak skills.
- **3 Specialized Pedagogical Modes**:
  - 💡 **Hint Mode**: Socratic guidance—provides nudges and hints without revealing complete answers.
  - 📘 **Explain Mode**: Deep-dive theoretical breakdowns, analogies, and code snippets.
  - 🎯 **Practice Mode**: Generates targeted practice problems and quiz scenarios.
- Multi-session chat management with title auto-generation, session renaming, history persistence, and deletion.

### 🔐 7. Secure Dual-Auth Architecture
- Email/Password authentication with salted **Bcrypt** hashing.
- Google OAuth 2.0 integration via **Firebase Client SDK** and server-side token validation with **Firebase Admin SDK**.
- Session handling through JWTs stored in secure, `httpOnly` cookies.
- Comprehensive route protection (`ProtectedRoute`, `PublicOnlyRoute`, and `OnboardedRoute`).

---

## 🏗️ System Architecture & Workflow

```mermaid
flowchart TD
    A[User Enters SkillSynapse] --> B{Authenticated?}
    B -- No --> C[Login / Signup (Email or Google OAuth)]
    C --> B
    B -- Yes --> D{Onboarded?}
    D -- No --> E[Set Goal, Experience & Timeline]
    E --> F[Generate Quick Preliminary Roadmap]
    F --> G[Take AI-Generated Skill Assessment (6 MCQs)]
    G --> H[AI Analyzes Responses & Detects Gaps]
    H --> I[Generate Final Gap-Focused Roadmap & Confidence Score]
    I --> J[Mark User as Onboarded]
    D -- Yes --> K[Career Dashboard]
    J --> K
    K --> L[Multi-Goal Management & Progress Tracking]
    K --> M[Interactive Roadmap & Checklists]
    K --> N[Context-Aware AI Tutor (Hint / Explain / Practice)]
    K --> O[Retake Assessment / Add New Goals]
```

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/) (`rolldown-vite`)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Data Visualization**: [Recharts](https://recharts.org/)
- **Markdown Rendering**: [React Markdown](https://github.com/remarkjs/react-markdown) + [Remark GFM](https://github.com/remarkjs/remark-gfm)
- **Authentication**: [Firebase Client SDK v12](https://firebase.google.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)

### Backend
- **Runtime & Framework**: [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/) (ES Modules)
- **Database**: [MongoDB](https://www.mongodb.com/) via [Mongoose ODM](https://mongoosejs.com/)
- **Generative AI**: [Google Gemini GenAI SDK](https://www.npmjs.com/package/@google/genai) (`gemini-2.5-flash`)
- **Authentication & Security**: [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup), [JSON Web Tokens (JWT)](https://jwt.io/), [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- **Streaming**: Server-Sent Events (SSE) for AI tutor chat responses
- **Cookies & Middleware**: `cookie-parser`, `cors`

---

## 📂 Project Directory Structure

```plaintext
SkillSynapse/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js                 # MongoDB connection logic
│   │   │   └── gemini.js             # Google GenAI SDK configuration & streaming helper
│   │   ├── controllers/
│   │   │   ├── auth/                 # Email signup/login, Google OAuth, session validation
│   │   │   ├── onboarding.controller.js # Multi-goal roadmap, stats, and assessment logic
│   │   │   └── tutor.controller.js   # SSE chat streaming & session management
│   │   ├── firebase/
│   │   │   └── admin.js              # Firebase Admin SDK initialization
│   │   ├── middlewares/
│   │   │   └── authMiddleware.js     # JWT verification & role authorization
│   │   ├── models/
│   │   │   ├── onboarding.js         # Goal, assessment, roadmap, and score schema
│   │   │   ├── tutorSession.js       # Tutor chat history schema
│   │   │   └── user.js               # User authentication schema
│   │   ├── routes/
│   │   │   ├── auth.route.js         # /api/auth endpoints
│   │   │   ├── onboarding.route.js   # /api/onboarding endpoints
│   │   │   └── tutor.route.js        # /api/tutor endpoints
│   │   ├── services/
│   │   │   └── geminiService.js      # Structured AI prompt engineering & JSON parsers
│   │   ├── utils/
│   │   │   └── parseTime.js          # Time formatting utilities
│   │   └── index.js                  # Express application entrypoint
│   ├── .env.example                  # Backend environment variable template
│   └── package.json
│
├── frontend/
│   ├── public/                       # Static assets
│   ├── src/
│   │   ├── Components/
│   │   │   ├── common/               # Loader, ProtectedRoute, PublicOnlyRoute
│   │   │   └── layouts/              # Navbar, Footer
│   │   ├── Pages/
│   │   │   ├── assessment/           # SkillAssessment (Quiz) & SkillGapReport
│   │   │   ├── auth/                 # Login & Signup pages
│   │   │   ├── dashboard/            # Dashboard, GoalDetail, and Roadmap views
│   │   │   ├── home/                 # Landing page & feature showcases
│   │   │   ├── onboarding/           # GoalPersonalization & RoadmapPreview
│   │   │   ├── tutor/                # Full-featured SSE Tutor Chat interface
│   │   │   └── NotFound.jsx          # 404 handler
│   │   ├── services/
│   │   │   ├── auth/                 # Firebase client auth handlers
│   │   │   ├── axios/                # Configured Axios instance with credentials
│   │   │   └── config/               # Firebase app initialization
│   │   ├── store/
│   │   │   └── useAuthStore.js       # Zustand authentication store
│   │   ├── App.jsx                   # Route declarations & route guards
│   │   ├── index.css                 # Global styles & Tailwind CSS entry
│   │   └── main.jsx                  # React application entrypoint
│   ├── .env.example                  # Frontend environment variable template
│   ├── netlify.toml                  # Netlify deployment configuration
│   └── package.json
│
├── .gitignore
├── package.json                      # Root workspace scripts (concurrently)
└── README.md
```

---

## 🔌 API Reference

### Authentication (`/api/auth`)
| Method | Endpoint | Description | Auth Required |
|---|---|---|:---:|
| `POST` | `/api/auth/emailPass` | Register with name, email, and password | No |
| `POST` | `/api/auth/emailLogin` | Log in with email and password | No |
| `POST` | `/api/auth/google` | Verify Firebase Google ID token and log in / register | No |
| `GET` | `/api/auth/me` | Fetch currently authenticated user profile | **Yes** |
| `POST` | `/api/auth/logout` | Clear authentication session cookie | No |

### Onboarding & Goals (`/api/onboarding`)
| Method | Endpoint | Description | Auth Required |
|---|---|---|:---:|
| `POST` | `/api/onboarding/goal` | Create and initialize a new career goal | **Yes** |
| `POST` | `/api/onboarding/roadmap` | Generate an initial quick roadmap via Gemini | **Yes** |
| `GET` | `/api/onboarding/questions` | Generate 6 dynamic assessment MCQs for the goal | **Yes** |
| `POST` | `/api/onboarding/assessment` | Submit assessment answers | **Yes** |
| `POST` | `/api/onboarding/result` | Calculate confidence score & generate gap report + final roadmap | **Yes** |
| `GET` | `/api/onboarding/data` | Get full roadmap & assessment details for a specific goal | **Yes** |
| `GET` | `/api/onboarding/goals` | List all goals created by the authenticated user | **Yes** |
| `GET` | `/api/onboarding/stats` | Aggregated user stats (streak, average score, goals summary) | **Yes** |
| `PATCH`| `/api/onboarding/goal/:goalId/complete` | Toggle goal status between active and completed | **Yes** |
| `PATCH`| `/api/onboarding/goal/:goalId/roadmap-item` | Toggle checklist completion of a specific roadmap item | **Yes** |

### AI Tutor (`/api/tutor`)
| Method | Endpoint | Description | Auth Required |
|---|---|---|:---:|
| `POST` | `/api/tutor/chat` | Send prompt to AI tutor and receive SSE stream (`text/event-stream`) | **Yes** |
| `GET` | `/api/tutor/sessions` | Retrieve all chat sessions for the user | **Yes** |
| `GET` | `/api/tutor/history/:sessionId` | Retrieve message history for a given session | **Yes** |
| `PATCH`| `/api/tutor/sessions/:sessionId` | Rename a chat session | **Yes** |
| `DELETE`| `/api/tutor/sessions/:sessionId` | Delete a chat session | **Yes** |

---

## ⚙️ Environment Configuration

### Backend (`backend/.env`)
Create a `.env` file in the `backend/` directory based on `backend/.env.example`:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/skillsynapse
JWT_SECRET=your_jwt_secret_key_here
GEMINI_API_KEY=your_gemini_api_key_here
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nyour_private_key_here\n-----END PRIVATE KEY-----\n"
```

### Frontend (`frontend/.env`)
Create a `.env` file in the `frontend/` directory based on `frontend/.env.example`:

```env
VITE_BACKEND_URL=http://localhost:5000/api
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (Local server or MongoDB Atlas cluster)
- [Google AI Studio API Key](https://aistudio.google.com/) (for Gemini 2.5 Flash)
- [Firebase Project](https://console.firebase.google.com/) (Authentication enabled with Google sign-in provider + Service Account credentials)

### 1. Clone the Repository
```bash
git clone https://github.com/Ankita15k/SkillSynapse.git
cd SkillSynapse
```

### 2. Install Dependencies

You can install all dependencies for both frontend, backend, and the root workspace:

```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend && npm install

# Install frontend dependencies
cd ../frontend && npm install

# Return to root
cd ..
```

### 3. Configure Environment Variables
Set up both `backend/.env` and `frontend/.env` as detailed in the [Environment Configuration](#️-environment-configuration) section above.

### 4. Run the Application

From the root directory, run both frontend and backend concurrently:

```bash
npm run dev
```

Or run each service individually:

```bash
# Run backend only (runs on http://localhost:5000)
npm run server

# Run frontend only (runs on http://localhost:5173)
npm run client
```

Open [http://localhost:5173](http://localhost:5173) in your browser to start using SkillSynapse.

---

## 🚢 Deployment

### Frontend (Netlify / Vercel)
The frontend includes a pre-configured `netlify.toml` file to ensure client-side routing works seamlessly:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

1. Connect your repository to Netlify / Vercel.
2. Set the base directory to `frontend`.
3. Set build command to `npm run build` and publish directory to `dist`.
4. Configure environment variables (`VITE_BACKEND_URL`, `VITE_FIREBASE_*`).

### Backend (Render / Railway / VPS)
1. Deploy the `backend/` directory to any Node.js hosting platform.
2. Set `start` script: `npm start`.
3. Ensure CORS origin in `backend/src/index.js` includes your deployed frontend domain.
4. Add all production environment variables into your provider's dashboard.

---

## 🤝 Contributing

Contributions, bug reports, and feature requests are welcome!

1. Fork the Project.
2. Create your Feature Branch:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your Changes:
   ```bash
   git commit -m "Add some AmazingFeature"
   ```
4. Push to the Branch:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request.

---

## 📄 License

Distributed under the **ISC License**. See `package.json` for more details.
