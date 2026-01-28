# SATU ATAP Community Website

A fully static community website for SATU ATAP - a group of 11 college friends turned working professionals who maintain an active community.

## 🌟 Features

- **100% Static** - No backend, no database, no authentication
- **8 Pages** - Home, About, Members, Member Details, Announcements, Gallery, Contact, Wrapped
- **11 Member Profiles** - Each with unique styling and personalized content
- **Interactive Gallery** - Filterable grid with lightbox modal viewer
- **Wrapped Experience** - Spotify-style interactive slides
- **Fully Responsive** - Mobile, tablet, and desktop optimized

## 🛠️ Tech Stack

- **React 18** + TypeScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **React Router DOM** - Client-side routing
- **Static Data** - All content in TypeScript files

## 📁 Project Structure

```
src/
├── pages/           # All page components
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── MembersPage.tsx
│   ├── MemberDetailPage.tsx
│   ├── AnnouncementsPage.tsx
│   ├── GalleryPage.tsx
│   ├── ContactPage.tsx
│   └── WrappedPage.tsx
├── components/      # Reusable components
│   ├── Header.tsx
│   └── Footer.tsx
├── layouts/         # Layout wrappers
│   └── MainLayout.tsx
├── data/            # Static data files
│   ├── members.ts
│   ├── announcements.ts
│   ├── gallery.ts
│   └── wrapped.ts
└── assets/          # Images and static files
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Static Data Structure

All content is defined in TypeScript files under `src/data/`:

```typescript
// src/data/members.ts
export interface Member {
  id: number;
  slug: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
  background: string;
  customSections?: Array<{
    title: string;
    content: string;
  }>;
  photos?: string[];
  // ...
}
```

## 🎨 Key Design Principles

- **No Backend Dependencies** - Completely static, no Supabase, Firebase, or any backend service
- **Modular Components** - Clean separation of concerns
- **Type Safety** - Full TypeScript support
- **Performance** - Optimized for fast loading
- **Accessibility** - Semantic HTML and ARIA labels

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server on http://localhost:5173
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

### Adding Content

To add or modify content, edit the TypeScript files in `src/data/`:

1. **Members** - Edit `src/data/members.ts`
2. **Announcements** - Edit `src/data/announcements.ts`
3. **Gallery** - Edit `src/data/gallery.ts`
4. **Wrapped** - Edit `src/data/wrapped.ts`

## 📦 Build Output

The build creates a static site in the `dist/` directory:

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].css
│   └── index-[hash].js
└── vite.svg
```

This can be deployed to any static hosting service (Netlify, Vercel, GitHub Pages, etc.)

## 🚫 What's NOT Included

- ❌ Database (no MongoDB, PostgreSQL, Supabase, etc.)
- ❌ Authentication system
- ❌ CMS integration
- ❌ Backend API
- ❌ Server-side rendering
- ❌ Dynamic data fetching

All content is hardcoded in TypeScript files for simplicity and performance.

## 📄 License

Private project for SATU ATAP community.

## 🤝 Contributing

This is a private community website. For content updates, contact the community administrators.
