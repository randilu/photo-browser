# Photo Browser

## Description

Allows users to browse photos.

[Visit the deployed version](https://randilu.github.io/photo-browser/)

## Features
- Users can see all the photos.
- User can see details of the individual photo.
- User can navigate to the Album view and see all the photos in that album.

## Installation and Setup Instructions

Checkout the repository. You will need node and npm installed globally on your machine.

**Installation:**

```npm install```

**To Run Test Suite:**

```npm test```

(Follow the interactive CLI - `> Press 'a' to run all tests.`)

**To Start Server:**

```npm start```

**To Visit App Locally:**

Open http://localhost:3000 to view it in your browser.


## Folder Structure
```
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── components
│   │   ├── AlbumView
│   │   │   ├── index.test.tsx
│   │   │   ├── index.tsx
│   │   │   └── styles.css
│   │   ├── Error
│   │   │   ├── index.test.tsx
│   │   │   ├── index.tsx
│   │   │   └── styles.css
│   │   ├── GalleryView
│   │   │   ├── index.test.tsx
│   │   │   ├── index.tsx
│   │   │   └── styles.css
│   │   ├── GridItem
│   │   │   ├── index.test.tsx
│   │   │   ├── index.tsx
│   │   │   └── styles.css
│   │   ├── Header
│   │   │   ├── index.test.tsx
│   │   │   ├── index.tsx
│   │   │   └── styles.css
│   │   ├── Loader
│   │   │   ├── index.test.tsx
│   │   │   ├── index.tsx
│   │   │   └── styles.css
│   │   ├── NotFound
│   │   │   ├── index.test.tsx
│   │   │   ├── index.tsx
│   │   │   └── styles.css
│   │   ├── PhotoGrid
│   │   │   ├── index.test.tsx
│   │   │   ├── index.tsx
│   │   │   └── styles.css
│   │   └── PhotoView
│   │       ├── index.test.tsx
│   │       ├── index.tsx
│   │       └── styles.css
│   ├── constants.ts
│   ├── hooks
│   │   ├── useFetch.test.tsx
│   │   ├── useFetch.tsx
│   │   ├── useLazyLoader.test.tsx
│   │   └── useLazyLoader.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   ├── react-app-env.d.ts
│   └── types.ts
└── tsconfig.json

```