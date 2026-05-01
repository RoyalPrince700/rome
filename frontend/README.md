# Rome Frontend

Rome is a modern real estate storefront for showcasing buildings and their compartments so users can compare, buy, rent, or book inspections with confidence.

## What It Includes
- A premium React landing experience inspired by clean Apple/Tesla-style product storytelling
- Property discovery for flats, duplexes, bedrooms, kitchens, and living rooms
- Listing detail pages with building images, room-level previews, pricing, and inspection CTAs
- Cart-style saved listings, order/history flows, notifications, and account screens inherited from the marketplace foundation
- Admin-connected frontend views for managing uploaded buildings and operational workflows

## Design Direction
- Minimal real estate styling inspired by premium technology and automotive landing pages
- A restrained visual system built around neutral surfaces, large typography, immersive property imagery, and confident CTAs
- Global `Inter` typography for a cleaner, more modern storefront feel

## Tech Stack
- React + Vite
- Tailwind CSS
- React Router
- Redux
- Backend API from `backend/`

## Getting Started
1. Install frontend dependencies with `npm install`
2. Start the frontend dev server with `npm run dev`

Create a `frontend/.env` file and configure the backend base URL:

```env
VITE_APP_BACKEND_URI=https://your-backend-url
```

The backend lives in `backend/` and should be running for authenticated flows, saved listings, checkout-style actions, and order/booking data.

## Branding
- Product name: `Rome`
- Storefront direction: premium real estate marketplace
- Text logo: `Rome`

## License
Proprietary. All rights reserved by Rome.
