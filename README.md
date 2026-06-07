# Login & CRUD Management App

A React (Vite) single-page application that provides **authentication (Register/Login)** and **User CRUD** (Create, View, Search, Update, Delete). The UI is built with **Tailwind CSS** and navigation is handled using **react-router-dom**.

> This project is designed for local development. Backend endpoints are expected to be available on `localhost` as documented below.

---

## Features

### Authentication
- **Register** a new user (POST)
- **Login** with email/password validation
- Password visibility toggle in the login/register forms

### CRUD (User Management)
- Create a user (first name, last name, age, city)
- View all users in a table
- Search users (search UI included in routing)
- Update a user via route param: `/edit/:id`
- Delete a user

### Application Layout
- Shared layout with a top navigation bar and a sidebar.

---

## Tech Stack

- **Frontend**: React 19, Vite
- **Routing**: react-router-dom
- **HTTP**: axios
- **Styling**: Tailwind CSS

---

## Project Structure

```text
src/
  App.jsx                      # Root component (RouterProvider)
  main.jsx                     # App entry
  index.css                    # Global styles

  authentication/
    Login.jsx                  # Login form + login logic
    Register.jsx               # Registration form + registration logic

  crud/
    CreateUser.jsx            # Create user form
    ViewAllUser.jsx           # Fetch & display users + delete
    UpdateUser.jsx           # Update user (edit route)
    SearchUser.jsx           # Search screen (search route)
    InputSearch.jsx          # Search input component
    DisplaySearch.jsx        # Search results display
    Navbar.jsx               # Top navigation
    Asidebar.jsx             # Sidebar
    PageNotFound.jsx         # 404 component

  routing/
    routing.jsx               # Route definitions
    Layout.jsx                # Layout component (Navbar + Sidebar + Outlet)
    axios.jsx                 # axios instance used by CRUD pages
backend/                       # Local backend mock/data (json files)
  register.json
  user.json
public/                         # Static assets
```

---

## Prerequisites

- Node.js (LTS recommended)
- A running backend service providing the endpoints below

---

## Setup & Installation (Frontend)

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the app in your browser (Vite will display the URL in the terminal).

---

## Backend Requirements

This React app expects backend services running on the following ports:

### Authentication Backend
- **Base URL**: `http://localhost:5000`
- **Register endpoint**:
  - `POST /register`
- **Login logic used in UI**:
  - `GET /register`
  - The UI fetches all registered records and matches `userEmail` + `userPassword` on the client side.

### CRUD Backend
CRUD requests are performed through the axios instance in:
- `src/routing/axios.jsx`

From the codebase, at least the following CRUD operation is used directly:
- **Create User**:
  - `POST http://localhost:4000/user`

Other CRUD operations use the configured axios base URL (in `src/routing/axios.jsx`) and include:
- `GET /user`
- `DELETE /user/:id`
- `GET /user/:id` and/or `PUT/PATCH /user/:id` (used in the update screen)

> If your backend uses different ports/paths, update `src/routing/axios.jsx` (and/or the hardcoded URLs) to match.

---

## Routes / Pages

| Route | Screen | Purpose |
|---|---|---|
| `/` | Layout (with nested routes) | Home layout shell |
| `/create` | `CreateUser` | Create a new user |
| `/viewall` | `ViewAllUser` | Display all users + delete |
| `/search` | `SearchUser` | Search users |
| `/edit/:id` | `UpdateUser` | Edit/update a user by id |
| `/register` | `Register` | Register a new account |
| `/login` | `Login` | Login to access user management |
| `*` | `PageNotFound` | 404 page |

---

## API Reference (As Used by the UI)

### Auth
- `POST http://localhost:5000/register`
  - Body: `{ userEmail, userPassword }`
- `GET http://localhost:5000/register`
  - Returns an array of users/records (UI filters client-side)

### Users CRUD (exact base URL depends on `src/routing/axios.jsx`)
- `GET /user` → list all users
- `POST /user` → create user
- `DELETE /user/:id` → delete user
- `GET /user/:id` → fetch user for edit (if implemented in UpdateUser)
- `PUT/PATCH /user/:id` → update user (if implemented in UpdateUser)

---

## Notes & Current Behavior

- **Login validation** is performed by fetching registration data and matching credentials in the frontend.
- For production-grade authentication, server-side credential verification and token-based auth are recommended.

---

## Available Scripts

From `package.json`:

- `npm run dev` — start Vite development server
- `npm run build` — build for production
- `npm run lint` — run eslint
- `npm run preview` — preview production build

---

## License

Add your project license here.

