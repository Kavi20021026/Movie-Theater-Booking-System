# 🎬 Popcorn Place - Movie Theater Booking System

[![Project Stage](https://img.shields.io/badge/Project-Academic%20(1st%20Year%202nd%20Sem)-blue.svg)](#)
[![Technologies](https://img.shields.io/badge/Tech-HTML5%20%7C%20CSS3%20%7C%20JS-orange.svg)](#)
[![Design Style](https://img.shields.io/badge/Design-Premium%20Glassmorphism-purple.svg)](#)

Popcorn Place is an immersive, premium, and fully responsive web application designed for a movie theater booking experience. Built as a **1st Year 2nd Semester project**, it showcases modern web aesthetics (including dark mode, gradient overlays, glassmorphic panels, and smooth micro-animations) combined with local browser session management.

---

## 🌟 Core Features

- **🌐 Dynamic Landing Page**:
  - Automatically checks the user session state (`localStorage`).
  - Seamlessly toggles calls-to-action between "Login Now" and "Go to Dashboard" / "Book Tickets".
  - Shows movie genre classifications with visual category cards.

- **🔒 Secure Authentication Flow**:
  - Responsive register and login forms with real-time feedback.
  - Custom glassmorphic success modals that animate transitions.
  - Seamless session handling to restrict or grant access to booking tools.

- **🖥️ Recommended Movies Dashboard**:
  - Features high-quality card graphics with translate-hover effects.
  - Graceful degradation: displays custom-built glassmorphic fallback placeholders if movie poster images fail to load.

- **🎟️ Interactive Seat Selection & Ticket Booking**:
  - Live seat-grid layouts with color-coded states (Available, Booked, Selected).
  - Real-time total price calculation.
  - Embedded cinematic trailer support.
  - Dynamic ticket receipt generation with printing options.

- **🍿 Amenities & Facilities Pages**:
  - **Services**: Showcases theater technology (2D, 3D, IMAX, VIP suites).
  - **Food & Beverages**: Aesthetic menu selection of popcorn, drinks, and snacks.
  - **Facilities**: Details about premium restrooms, luxury lounges, and waiting areas.

---

## 📂 Project Architecture

The directory tree is structured logically for separation of client-side logic:

```text
movie_Theater_Booking/
├── mainhome.html                    # Root landing page
├── home.css                         # Global CSS stylesheet
├── image/                           # Shared landing page graphic assets
│   ├── background.jpg
│   ├── logo.png
│   └── [movie_category_images]
├── Screen_Shots/                    # UI / UX Showcase screenshots
│   ├── Home_page.png
│   ├── Login.png
│   ├── Register.png
│   ├── dashboard.png
│   ├── Time&Date.png
│   ├── Booking.png
│   ├── Bookingcomfirm.png
│   ├── Services.png
│   ├── Facilities.png
│   ├── Contact.png
│   └── Gallery.png
└── login/                           # Authentication and user-gated portal
    ├── login.html                   # Login portal
    ├── register.html                # Signup portal
    ├── css/                         # Auth specific style resources
    └── after_loging_home/           # Authenticated user scope
        ├── booknow.html             # Logged-in landing homepage
        ├── home.css                 # Logged-in home layout CSS
        ├── navbar.css               # Shared navigation styles
        ├── images/                  # Logged-in specific image assets
        ├── contact/                 # Contact form
        │   └── new 1.html
        ├── dashboard/               # Seat selectors and movie catalogs
        │   ├── dashboard.html       # Movie list catalog
        │   ├── book.html            # Seat booking and receipt logic
        │   └── style.css            # Seat grid/receipt CSS styles
        ├── facilities/              # Food, Beverage, and Restroom showcases
        │   ├── Food.html
        │   └── Rest rooms.html
        ├── Gallery/                 # Visual cinematic gallery
        │   └── gallary .html
        └── services/                # Screen format descriptions
            └── 2D 3D.html
```

---

## 🛠️ Technical Stack

- **Markup**: `HTML5` for semantic structuring and accessibility.
- **Styling**: `Vanilla CSS3` incorporating modern HSL colors, variable gradients, glassmorphism (`backdrop-filter`), animations, and media queries for responsiveness.
- **Interactions**: `JavaScript (ES6)` for dynamic DOM rendering, session state management via `window.localStorage`, and client-side page routing.
- **Icons**: `Bootstrap Icons` (imported via CDN).

---

## 📸 UI / UX Visual Walkthrough

Here is a look at the user experience flows within Popcorn Place:

### 1. Root Landing Page (`mainhome.html`)
The gateway page featuring dynamic user-session buttons and genre categories.
![Home Page](Screen_Shots/Home_page.png)

### 2. Authentication System (`login.html` & `register.html`)
Glassmorphic user registration and login screens.
<table>
  <tr>
    <td><b>Sign In Screen</b></td>
    <td><b>Registration Screen</b></td>
  </tr>
  <tr>
    <td><img src="Screen_Shots/Login.png" width="400"></td>
    <td><img src="Screen_Shots/Register.png" width="400"></td>
  </tr>
</table>

### 3. Movie Discovery Dashboard (`dashboard.html`)
Browse available movies with hover cards and missing-poster image fallbacks.
![Dashboard Showcase](Screen_Shots/dashboard.png)

### 4. Interactive Booking Engine (`book.html`)
Select seat availability in real-time, view live showtimes, and watch movie trailers.
![Seat Grid and Showtime Selectors](Screen_Shots/Time&Date.png)
![Seat Grid Layout](Screen_Shots/Booking.png)

### 5. Ticket Issuance & Receipts (`book.html`)
Receive print-ready digital receipts after booking verification.
![Booking Confirmation Receipt](Screen_Shots/Bookingcomfirm.png)

### 6. Services & Amenities (`2D 3D.html` & `Food.html` / `Rest rooms.html`)
Check available cinema screening setups and browse the concessions menu.
<table>
  <tr>
    <td><b>Screening Tech & Pricing</b></td>
    <td><b>Premium Snacks Selection</b></td>
  </tr>
  <tr>
    <td><img src="Screen_Shots/Services.png" width="400"></td>
    <td><img src="Screen_Shots/Facilities.png" width="400"></td>
  </tr>
</table>

---

## 🚀 Getting Started

Since this is a client-side architecture using standard web technologies, there are no databases or server installations required!

1. Clone or download this project folder.
2. Double-click [mainhome.html](mainhome.html) or run it using a local developer web server (like VS Code's **Live Server** extension).
3. Register a temporary user account and log in.
4. Browse the cinema, select a movie, choose your showtime, click your seats, and generate a print ticket!
