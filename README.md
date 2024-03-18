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
├── src
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── components
│   │   ├── AlbumView
│   │   ├── Error
│   │   ├── GalleryView
│   │   ├── GridItem
│   │   ├── Header
│   │   ├── Loader
│   │   ├── NotFound
│   │   ├── PhotoGrid
│   │   └── PhotoView
│   ├── constants.ts
│   ├── hooks
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   ├── react-app-env.d.ts
│   └── types.ts
└── tsconfig.json

```