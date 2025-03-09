# Name PWA

A Progressive Web App built with Next.js and Dexie.js, designed to be hosted on GitHub Pages.

## Features

- ✅ Static site generation with Next.js
- ✅ Progressive Web App (PWA) capabilities
- ✅ Offline functionality
- ✅ IndexedDB storage using Dexie.js
- ✅ Authentication and data sync between devices
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling

## Development

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit http://localhost:3000 to see the app in action.

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run start` - Start the production server
- `npm run lint` - Lint the code
- `npm run format` - Format the code with Prettier
- `npm test` - Run tests

## CI/CD

This project uses GitHub Actions for CI/CD:

1. **CI Pipeline**: Runs on every push and pull request to the `main` branch

   - Linting
   - Type checking
   - Unit tests
   - Build verification

2. **Deployment Pipeline**: Runs when changes are merged to the `main` branch
   - Builds the app
   - Deploys to GitHub Pages

## Project Structure

```
name-pwa/
├── .github/            # GitHub Actions workflows
├── .husky/             # Git hooks
├── public/             # Static assets
│   ├── icons/          # PWA icons
│   └── manifest.json   # PWA manifest
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── page.tsx    # Home page
│   │   └── layout.tsx  # Root layout
│   └── lib/            # Utility functions
│       └── db.ts       # Dexie.js database
└── ...configuration files
```
