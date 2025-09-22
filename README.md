# Task Viewer App - README

## Project Overview
This project is a **Task Viewer Web Application** built as part of the Frontend Developer Intern Technical Test. It allows users to view tasks fetched from a Supabase REST API,
filter them by category, and mark tasks as complete or incomplete.

Live-Demo: https://task-management-delta-azure.vercel.app/

## Features
* Display tasks in a **table/list** with:
  * Title
  * Category (with color badge)
  * Priority indicator
  * Task image
* Filter tasks by category using a dropdown.
* Mark tasks as complete/incomplete using a PATCH request.
* Handle loading states and errors.
* Responsive design for mobile and desktop.

## Tech Stack
* **React.js** - Frontend framework for building UI components.
* **Axios** - HTTP client for API requests.
* **Flowbite-React** - UI component library (Tables, Checkbox).
* **Tailwind CSS** - Utility-first CSS framework for styling.
* **Vite / CRA** - React app setup (used Vite for fast dev server).

## Installation

1. Clone the repository:
(bash)
git clone https://github.com/yourusername/task-viewer-app.git
cd task-viewer-app

2. Install dependencies:
(bash)
npm install


3. Create a `.env` file in the root:
   env
VITE_SUPABASE_URL=https://kbybdtacoqvgcijrkzkv.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... (your ANON_KEY)


4. Run the app:

(bash)
npm run dev

The app should be running on `http://localhost:5173` (Vite default).

## Project Structure

```
/src
  /components  - React reusable components (Table at Home Component, Table of tasks using specificCategory, navbar, footer)
  /styles      - Tailwind configuration and custom CSS
  App.jsx      - Main app entry
```

## API Usage
**Supabase REST API Base URL:**
https://kbybdtacoqvgcijrkzkv.supabase.co/rest/v1/

**Headers Required for Requests:**
headers: {
  apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
  Prefer: 'return=representation', //------> For PATCH/UPDATE responses
}


### Endpoints Used
* **Get All Categories:** `GET /categories?order=name.asc`
* **Get All Tasks:** `GET /tasks?order=created_at.desc&limit=20&offset=0`
* **Update Task Completed Status:** `PATCH /tasks?id=eq.{taskId}`

## Components & Libraries
* **Flowbite-React:** `Table`, `TableHead`, `TableBody`, `TableRow`, `TableCell`, `Checkbox`
* **Axios:** For making HTTP GET and PATCH requests.
* **Tailwind CSS:** Responsive styling for table, buttons, and layout.
* **React useState & useEffect:** State management and fetching data on component mount.

## Error Handling

* Loading states handled using `isLoading` state.
* API errors logged using `console.error()` and optionally displayed using `alert()`.
* Lazy-loading for images to optimize performance (`loading="lazy"`).

## Challenges Faced
* Ensuring PATCH requests returned the updated task correctly using `Prefer: return=representation`.
* Mapping category colors dynamically from API.
* Pagination logic using `limit` and `offset`.

## Running the Project

(bash)
npm run dev  # starts Vite development server

Visit the browser at `http://localhost:5173` to see the Task Viewer App.


## Author

Frontend Developer Intern - Mariam Hesham Ramadan

## Contact

Email: mariam.hesham.ramadan@gmail.com
Phone: 01066135369
