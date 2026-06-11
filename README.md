# Vocational Academy Training Platform 🚀

A high-performance digital storefront and automated registration engine designed for technical and industrial training programs. 

This Single Page Application (SPA) digitizes the entire student onboarding workflow—completely automating course registration, identity tracking, secure payment collection, and instant admission provisioning without requiring manual administrative intervention.

## 🛠 Tech Stack
* **Core:** React.js (v19)
* **Database & Auth:** Supabase (PostgreSQL Backend-as-a-Service)
* **Styling:** Tailwind CSS
* **State Management:** Zustand
* **Routing:** React Router
* **Payment Gateway:** Paystack API integration
* **Error Handling:** React-Error-Boundary

## ⚙️ Core Architecture & Features (MVP)

* **Secure Fintech Data Pipeline:** Integrated the Paystack API to handle real-time transactions. Adhered to strict financial data rules by calculating transactions in the lowest denomination (Kobo) to prevent floating-point math errors.
* **Relational Authentication Engine:** Wired Supabase Auth to establish an encrypted user identity layer. Securely manages user session tokens on the client side while keeping password records salted and hashed inside a PostgreSQL database.
* **Global State Management:** Implemented Zustand to create a highly optimized data bridge. User selections and authentication tokens securely persist across isolated routing layers, ensuring zero data loss between the landing page and the checkout gateway.
* **Defensive UI & Fault Tolerance:** Engineered a robust `ErrorBoundary` wrapper to catch fatal JavaScript runtime errors, guaranteeing the application degrades gracefully instead of presenting a broken interface to users. Utilized Optional Chaining (`?.`) to prevent null-state rendering crashes.
* **Smart Cross-Page Navigation:** Combined React Router's `useLocation` with native Web APIs (`scrollIntoView`) to build context-aware navigation, ensuring users are intelligently routed and scrolled to specific DOM elements regardless of their current page state.

## 🗺 Production Roadmap: Enterprise Automation

The platform has a functioning revenue engine and authentication layer. The active and upcoming phases will finalize the app into a fully automated physical onboarding pipeline:

* **Phase 5: Automated Admission Engine (In Progress):** Constructing a post-payment data hook that captures transaction payloads, writes them to a relational Supabase `enrollments` table, and triggers EmailJS to dispatch a formal **Physical Admission Letter** (containing physical venue locations, batch schedules, and unique registration keys) directly to the student's inbox.
* **Phase 6: Admin Attendance & Verification Panel:** Building an internal `/admin` portal featuring data visualization to track enrollment volume, manage active student cohorts, and verify student registration tokens at the physical training venue door.

## 🚀 Local Setup

1. Clone the repository.
2. Run `npm install` (Note: Use `npm install --legacy-peer-deps` to handle React 19 / Paystack peer requirements or do .npmrc (legacy-peer-deps=true)).
3. Create a `.env` file in the root directory and add your environment variables:
   ```text
   VITE_PAYSTACK_PUBLIC_KEY=your_test_key_here
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_publishable_key