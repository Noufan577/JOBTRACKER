# 📋 Job Application Tracker

A full-stack, responsive job application tracking application built with **Next.js 16 (App Router)**, **TypeScript**, **MongoDB**, and **Better Auth**. Features an interactive Kanban board with drag-and-drop capabilities to streamline and organize your job search journey.

---

## ✨ Features

- **📊 Interactive Kanban Board**: Visualize job applications across customizable stages: *Wish List*, *Applied*, *Interviewing*, *Offer*, and *Rejected*.
- **🎯 Drag & Drop**: Seamlessly move job cards between columns or reorder them within a column using `@dnd-kit`, with persistent order saved directly to the database.
- **📝 Full CRUD Operations**:
  - Add new job applications with comprehensive metadata (company, position, location, salary range, job URL, tags, description, notes).
  - Edit application details via an intuitive modal.
  - Delete applications or quick-move them between columns via dropdown action menus.
- **🔐 Secure Authentication**: Powered by **Better Auth** with email and password, cookie caching, and an interactive password visibility toggle.
- **⚡ Automatic Board Initialization**: New users automatically receive a pre-configured "Job Hunt" board with default columns on signup.
- **🌱 Database Seeding**: Pre-built script to populate the database with realistic sample job application data.
- **🎨 Modern UI**: Clean, responsive design built with **Tailwind CSS 4** and modern UI primitives.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, Partial Prerendering)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Frontend**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Drag & Drop**: [@dnd-kit/core](https://dndkit.com/), [@dnd-kit/sortable](https://dndkit.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) via [Mongoose](https://mongoosejs.com/)
- **Authentication**: [Better Auth](https://www.better-auth.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 18.18+ or later)
- [npm](https://www.npmjs.com/) (or yarn / pnpm)
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster or local MongoDB instance

---

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd job-application
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory by copying `.env.example`:
   ```bash
   cp .env.example .env.local
   ```
   Update `.env.local` with your database credentials:
   ```env
   # MongoDB Atlas Connection String
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/job-tracker?retryWrites=true&w=majority

   # Better Auth Configuration
   BETTER_AUTH_SECRET=your_better_auth_secret_here
   BETTER_AUTH_URL=http://localhost:3000
   NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
   ```

   > **Note on MongoDB Atlas Network Access**: Ensure your IP address is whitelisted in MongoDB Atlas under **Security > Network Access** (or add `0.0.0.0/0` to allow access from anywhere during development).

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🌱 Database Seeding (Optional)

To seed your database with realistic sample job applications:

1. Update the `USER_ID` in `scripts/seed.ts` with your registered user's ID (found in MongoDB after signing up).
2. Run the seed script:
   ```bash
   npm run seed:jobs
   ```

---

## 📁 Project Structure

```
job-application/
├── app/                              # Next.js App Router
│   ├── api/auth/[...all]/route.tsx   # Better Auth API handler
│   ├── dashboard/page.tsx            # Protected dashboard with Kanban board
│   ├── sign-in/page.tsx              # Sign-in page
│   ├── sign-up/page.tsx              # Registration page
│   ├── layout.tsx                    # Root layout with navigation
│   └── page.tsx                      # Landing page
├── components/                       # React components
│   ├── ui/                           # Reusable UI component primitives
│   ├── create-job-dialog.tsx         # Modal for adding job applications
│   ├── image-tabs.tsx                # Landing page hero tab showcase
│   ├── job-application-card.tsx      # Draggable job card with actions
│   ├── Kanban-board.tsx              # Core Kanban board container with dnd-kit
│   ├── navbar.tsx                    # Header with user avatar and sign-out
│   └── sign-out-btn.tsx              # Sign-out dropdown trigger
├── lib/
│   ├── actions/job-applications.ts   # Server Actions for CRUD & ordering
│   ├── auth/                         # Better Auth client & server configs
│   ├── hooks/useBoards.ts            # Optimistic state hook for Kanban moves
│   ├── models/                       # Mongoose schemas (Board, Column, JobApplication)
│   ├── db.tsx                        # Cached Mongoose connection helper
│   ├── init-user-board.ts            # Default board/columns creator
│   └── utils.ts                      # Tailwind clsx/twMerge helper (cn)
├── public/                           # Static assets & hero images
├── scripts/
│   └── seed.ts                       # Database sample data seeder
├── .env.example                      # Template for environment variables
├── package.json                      # Dependencies and scripts
└── tsconfig.json                     # TypeScript configuration
```

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server at `localhost:3000` |
| `npm run build` | Compiles the production build with type checking |
| `npm run start` | Runs the compiled production server |
| `npm run lint` | Runs ESLint to verify code quality |
| `npm run seed:jobs` | Seeds sample job applications into MongoDB Atlas |

---

## 📄 License

This project is licensed under the MIT License.
