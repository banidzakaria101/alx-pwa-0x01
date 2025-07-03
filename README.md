# alx-project-0x14

## 📘 API Overview
The MoviesDatabase API is a RESTful service that provides rich metadata about movies—including titles, overviews, posters, genres, cast & crew, release dates, and more. It supports filtering by year and genre, searching, and pagination, making it ideal for building film discovery apps.

## ✅ Version
**v1** (as specified in the current API documentation)

## 📌 Available Endpoints
- **`/titles`** – Fetch paginated movie listings.
- **`/titles/{title_id}`** – Get detailed metadata for a specific movie.
- **`/titles/{title_id}/credits`** – Retrieve cast and crew information.
- **`/titles/{title_id}/images`** – Fetch poster/backdrop images.
- **`/titles/{title_id}/videos`** – Access trailers and clips.
- **`/genres`** – List supported movie genres.

Each endpoint supports query params like `year=<YYYY>`, `genre=<genre_id>`, and `page=<n>` for filtering and pagination.

## 📤 Request and Response Format



- **Base URL:** `https://api.moviesdatabase.example.com/`
- **HTTP Method:** `GET`

**Request example:**
GET /titles?year=2023&genre=18&page=2
Authorization: Bearer <API_KEY>

css
Copier le code

**Response example:**

json
{
  "page": 2,
  "total_pages": 50,
  "total_results": 1000,
  "results": [
    {
      "id": 1234,
      "title": "Example Movie",
      "overview": "A brief summary...",
      "release_date": "2023-05-01",
      "genre_ids": [18, 35],
      "poster_path": "/xyz.jpg"
    },
  ]
}

## 🔐 Authentication
Uses API key via Bearer token in headers:

makefile
Copier le code
Authorization: Bearer YOUR_API_KEY
Store the key in .env.local (e.g., MOVIES_API_KEY=your_key_here).

Call the API via Next.js server-side route (/api/fetch-movies) to protect your key from client exposure.

## 🚨 Error Handling
4xx errors (e.g., 401, 404): Use response.ok or response.status, handle via try/catch and throw meaningful errors.

5xx errors: Catch unexpected server responses and surface general “Something went wrong” messages to users.

Implement retries or exponential backoff for rate-limit issues.

## 📈 Usage Limits and Best Practices
Rate limit: Check API docs for request-per-minute caps; throttle requests accordingly.

Paginate results and avoid over-fetching.

Use caching on Next.js routes to reduce repeat calls and improve performance.

Use loading states during fetches and Error components for graceful fallback.

Use TypeScript interfaces (interfaces/index.ts) to type all API responses and component props.

## 🧭 App Structure
bash
Copier le code
alx-movie-app/
├── components/
│   ├── commons/          # Buttons, Loading spinner, MovieCard
│   └── layouts/          # Header, Footer, Layout wrapper
├── interfaces/index.ts   # TS interfaces for API data
├── pages/
│   ├── api/
│   │   └── fetch-movies.ts  # Server-side API route
│   ├── movies/index.tsx     # Filtered & paginated movie listings
│   ├── _app.tsx
│   └── index.tsx            # Homepage and search UI
├── public/
├── styles/globals.css
├── .env.local              # MOVIES_API_KEY=...
├── .eslintrc.json
├── next.config.js
├── package.json
└── tsconfig.json
🛠️ Setup
Clone the repo:

bash
Copier le code
git clone https://github.com/yourusername/alx-project-0x14.git
Install dependencies:

bash
Copier le code
npm install
# or yarn install
Create .env.local:

ini
Copier le code
MOVIES_API_KEY=your_api_key_here
Run the development server:

bash
Copier le code
npm run dev
# or yarn dev
Visit http://localhost:3000 in your browser.