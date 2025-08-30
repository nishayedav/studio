# Tech with Neesha - Personal Portfolio's

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

### Running the Development Server

1.  **Install dependencies**:
    ```bash
    npm install
    ```
2.  **Run the development server**:
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

## Making Future Changes

- **Adding a New Page**: Create a new folder inside `src/app` with a `page.tsx` file.
- **Modifying UI Components**: The UI is built with ShadCN. You can customize existing components in `src/components/ui` or add new ones.
- **Changing Colors & Theme**: The color palette and theme variables are defined in `src/app/globals.css`. You can modify the HSL values there to change the site's appearance. The font is configured in `tailwind.config.ts`.
- **Adding Blog Posts**: New blog posts can be added to the `blogPosts` array in `src/lib/data.ts`.
- **Updating AI Prompts**: The prompt for the AI summarizer can be modified in `src/ai/flows/blogpost-summarization.ts`.
