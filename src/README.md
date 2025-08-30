# Tech with Neesha - Personal Portfolio

This is the personal portfolio website for Nisha Yadav, a Cloud Engineer and IT Professional based in Kathmandu, Nepal. The site is designed to showcase her skills, services, and professional insights through a clean, modern interface. It was built using Firebase Studio.

## Features

- **Responsive Design**: Fully responsive layout that looks great on desktops, tablets, and mobile devices.
- **Home Page**: A comprehensive single-page layout including:
    - A dynamic hero section to welcome visitors.
    - An "About Me" section detailing professional background and skills.
    - A "Services" section outlining the professional services offered.
    - A "Testimonials" section with a carousel for client and colleague feedback.
    - A "Blog Preview" section to showcase the most recent articles.
    - A functional "Contact" form for inquiries.
- **Blog**: A dedicated blog section with individual pages for each article, showcasing insights on cloud technology, DevOps, and professional growth.
- **AI-Powered Summarizer**: An interactive component that uses Generative AI (via Genkit) to summarize any blog post text pasted by the user.
- **Accessibility**: Built with accessibility in mind, following best practices for screen reader users and keyboard navigation.

## Technology Stack

This project is built with a modern, production-ready tech stack:

- **Framework**: [Next.js](https://nextjs.org/) (with App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Generative AI**: [Genkit](https://firebase.google.com/docs/genkit)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) for validation.

## Project Structure

The project follows a standard Next.js App Router structure. Here's an overview of the key directories:

```
.
├── src
│   ├── ai                 # Genkit AI flows and configuration
│   │   ├── flows          # AI flow definitions (e.g., blog summarizer)
│   │   └── genkit.ts      # Genkit initialization
│   ├── app                # Next.js App Router pages and layouts
│   │   ├── blog           # Blog list and individual post pages
│   │   ├── (home)         # Components for the home page sections
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page entry point
│   ├── components         # Reusable React components
│   │   ├── home           # Components specific to the home page
│   │   ├── layout         # Site-wide layout components (Header, Footer)
│   │   └── ui             # ShadCN UI components
│   ├── hooks              # Custom React hooks
│   ├── lib                # Core logic, data, and utilities
│   │   ├── actions.ts     # Server Actions (e.g., for form submissions)
│   │   ├── data.ts        # Static data for the site (skills, posts, etc.)
│   │   └── utils.ts       # Utility functions (e.g., cn for classnames)
├── public                 # Static assets (images, fonts, etc.)
├── package.json           # Project dependencies and scripts
└── tailwind.config.ts     # Tailwind CSS configuration
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A Git client (like [Git](https://git-scm.com/))

### Running the Development Server

1.  **Install dependencies**:
    ```bash
    npm install
    ```
2.  **Set up Environment Variables**:
    This project uses Genkit for AI features, which requires a Google AI API key.
    - Create a file named `.env.local` in the root of the project.
    - Add your API key to this file:
      ```
      GEMINI_API_KEY=your_google_ai_api_key_here
      ```
    - You can get a key from [Google AI Studio](https://aistudio.google.com/app/apikey).

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:9002`.

### Running Genkit Flows

To run the Genkit flows locally for development and testing:

```bash
npm run genkit:dev
```

This will start the Genkit development server, allowing you to interact with your AI flows.

## Deployment

This Next.js application is ready for production and can be deployed to various platforms that support Node.js. Below are guides for popular free-tier hosting providers.

**First Step: Push to a Git Repository**
Before deploying, your project must be in a Git repository (e.g., on GitHub, GitLab, or Bitbucket).
1. Initialize a Git repository: `git init`
2. Add all files: `git add .`
3. Commit your changes: `git commit -m "Initial commit"`
4. Create a new repository on your preferred Git provider and follow their instructions to push your local repository.

---

### Option 1: Deploying to Vercel (Recommended)

Vercel is the creator of Next.js and provides a seamless, zero-configuration deployment experience.

1.  **Sign Up**: Create an account on [Vercel](https://vercel.com/) using your GitHub, GitLab, or Bitbucket account.
2.  **Import Project**: From your Vercel dashboard, click "Add New... -> Project" and import the Git repository you just pushed.
3.  **Configure Project**:
    - Vercel will automatically detect that this is a Next.js project and configure the build settings for you.
    - **Environment Variables**: You'll need to add your `GEMINI_API_KEY`. Go to the project's "Settings" tab, then "Environment Variables". Add the key and its value.
4.  **Deploy**: Click the "Deploy" button. Vercel will build and deploy your site.
5.  **Custom Domain**: Once deployed, you can go to the "Domains" tab in your project settings to add your own custom domain for free.

---

### Option 2: Deploying to Cloudflare Pages

Cloudflare Pages offers a robust free tier with excellent performance and security features.

1.  **Sign Up**: Create a [Cloudflare account](https://dash.cloudflare.com/sign-up).
2.  **Connect Git**: In your dashboard, go to "Workers & Pages" -> "Create application" -> "Pages" -> "Connect to Git".
3.  **Select Repository**: Choose the Git repository for your portfolio.
4.  **Build Settings**:
    - In the "Set up builds and deployments" section, select **Next.js** from the "Framework preset" dropdown. This will configure the correct build command and output directory automatically.
    - **Environment Variables**: Expand the "Environment variables (advanced)" section. Add a new variable with the name `GEMINI_API_KEY` and paste your key as the value.
5.  **Deploy**: Click "Save and Deploy". Cloudflare will build and deploy your application.
6.  **Custom Domain**: After the first deployment, you can go to the "Custom domains" tab to set up your domain.

---

### Option 3: Deploying to Firebase Hosting

Firebase Hosting provides a generous free tier and is a great option if you plan to use other Firebase services.

1.  **Firebase Project**: Make sure you have a Firebase project. If not, create one in the [Firebase Console](https://console.firebase.google.com/).
2.  **Install Firebase CLI**: If you don't have it, install the Firebase command-line tools:
    ```bash
    npm install -g firebase-tools
    ```
3.  **Login to Firebase**:
    ```bash
    firebase login
    ```
4.  **Initialize Firebase**: In your project's root directory, run:
    ```bash
    firebase init hosting
    ```
5.  **Configure Initialization**:
    - Select "Use an existing project" and choose your Firebase project.
    - When asked for your public directory, type `.next`. **This is important!**
    - Configure as a single-page app: Answer **Yes**.
    - Set up automatic builds and deploys with GitHub: Answer **No** for now to keep it simple. You can set this up later if you wish.
6.  **Build Your Project**: Run the Next.js build command:
    ```bash
    npm run build
    ```
7.  **Deploy**:
    ```bash
    firebase deploy --only hosting
    ```
8.  **Custom Domain**: Open your Firebase project in the console, go to the "Hosting" section, and click "Add custom domain" to connect your domain. The free tier includes a free SSL certificate.

## Making Future Changes

- **Adding a New Page**: Create a new folder inside `src/app` with a `page.tsx` file.
- **Modifying UI Components**: The UI is built with ShadCN. You can customize existing components in `src/components/ui` or add new ones.
- **Changing Colors & Theme**: The color palette and theme variables are defined in `src/app/globals.css`. You can modify the HSL values there to change the site's appearance. The font is configured in `tailwind.config.ts`.
- **Adding Blog Posts**: New blog posts can be added to the `blogPosts` array in `src/lib/data.ts`.
- **Updating AI Prompts**: The prompt for the AI summarizer can be modified in `src/ai/flows/blogpost-summarization.ts`.
```