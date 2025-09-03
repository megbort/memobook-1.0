# MemoBook v1.0

Welcome to MemoBook, a creative and intuitive address book application that transforms the way we store and interact with our contacts! Built with modern Vue.js, MemoBook offers a fresh take on contact management with a focus on personal connections and meaningful descriptions.

This is the first version of the project, featuring a clean, modern interface powered by Vue and enhanced with PrimeVue components for a polished user experience.

Visit the live site at [memobook.megankrenbrink.com]("https://memobook.megankrenbrink.com")

Enjoy exploring!

— Megan Krenbrink

## <br>

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run unit tests
npm run test:unit

# Run e2e tests
npm run test:e2e

# Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

## Tech Stack

- **Vue** with **TypeScript**
- **Vite** for fast development and building
- **PrimeVue** for UI components
- **Tailwind CSS** for styling
- **Pinia** for state management
- **Vue Router** for navigation
- **Vitest** for unit testing
- **Cypress** for e2e testing

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── ContactView.vue # Individual contact display
│   ├── MainBanner.vue  # Main header banner
│   └── SidePanel.vue   # Navigation side panel
├── views/              # Route-based pages
│   └── DashboardView.vue # Main dashboard page
├── models/             # TypeScript interfaces and types
│   └── contact.ts      # Contact data model
├── mocks/              # Mock data for development
│   └── contacts.ts     # Sample contact data
├── router/             # Vue Router configuration
│   └── index.ts        # Route definitions
├── assets/             # Static assets and styles
│   ├── base.scss       # Base styling
│   ├── main.scss       # Main styles
│   └── typographic.scss # Typography styles
└── ...                 # Other app logic
```

## Data Integration

This application currently uses mock data for contact information, but is designed to be easily adapted for any backend API or database (this will soon be implemented by me!). The contact model provides a flexible foundation for expanding functionality.
