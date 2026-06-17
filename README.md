# Vocational Training Platform 🚀

A high-performance digital storefront and automated registration engine designed for technical and industrial training programs. 

This Single Page Application (SPA) digitizes the entire student onboarding workflow—completely automating course registration, identity tracking, secure payment collection, and instant admission provisioning without requiring manual administrative intervention.

## 🛠 Tech Stack
* **Core:** React.js (v19)
* **Database & Auth:** Supabase (PostgreSQL Backend-as-a-Service)
* **Automation:** Make.com (Serverless Webhooks) & Gmail API
* **Styling:** Tailwind CSS
* **State Management:** Zustand
* **Routing:** React Router
* **Payment Gateway:** Paystack API integration
* **Error Handling:** React-Error-Boundary

## ⚙️ Core Architecture & Features

* **Secure Fintech Data Pipeline:** Integrated the Paystack API to handle real-time transactions. Adhered to strict financial data rules by calculating transactions in the lowest denomination (Kobo) to prevent floating-point math errors.
* **Event-Driven Automation:** Engineered a post-payment data hook utilizing Supabase webhooks. This captures transaction payloads and triggers a Make.com serverless pipeline to dispatch a formal Physical Admission Letter directly to the student's inbox the exact millisecond a payment is logged.
* **Protected Admin Dashboard:** Built an internal `/admin` portal utilizing React Router protected routes. It features a real-time data table and search engine, allowing venue staff to securely verify student registration tokens and manage live check-ins at the physical venue door.
* **Global State Management:** Implemented Zustand to create a highly optimized data bridge. User selections securely persist across isolated routing layers, ensuring zero data loss between the landing page and the checkout gateway.
* **Defensive UI & Fault Tolerance:** Engineered a robust `ErrorBoundary` wrapper to catch fatal JavaScript runtime errors, guaranteeing the application degrades gracefully. Utilized Optional Chaining (`?.`) to prevent null-state rendering crashes.

## 🔒 Testing the Admin Dashboard
For recruitment and code-review purposes, the `/admin` route is guarded by a session-based protected route.
* **Navigation:** Visit `/admin`
* **Test Password:** `paul2026`

## 🗺 Future Roadmap

* **Enterprise Identity Security:** Migrate the current session-based routing gate to complete Supabase Authentication with PostgreSQL Row Level Security (RLS). This will enforce strict, role-based backend access control, ensuring database mutations can only be executed by cryptographically verified administrative staff.

## 🚀 Local Setup

1. Clone the repository.
2. Run `npm install` (Note: Use `npm install --legacy-peer-deps` to handle React 19 / Paystack peer requirements or configure `.npmrc` with `legacy-peer-deps=true`).
3. Create a `.env` file in the root directory and add your environment variables:
   ```text
   VITE_PAYSTACK_PUBLIC_KEY=your_test_key_here
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_publishable_key