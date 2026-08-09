# Vocational Training Platform 🚀

A high-performance digital storefront and automated registration engine designed for technical and industrial training programs. 

This Single Page Application (SPA) digitizes the entire student onboarding workflow—completely automating course registration, identity tracking, secure payment collection, and instant admission provisioning without requiring manual administrative intervention.

## 🛠 Tech Stack
* **Core:** React 19 (Strict TypeScript)
* **Database & Auth:** Supabase (PostgreSQL Backend-as-a-Service)
* **Automation:** Make.com (Serverless Webhooks) & Gmail API
* **Styling:** Tailwind CSS
* **State Management:** Zustand
* **Routing:** React Router
* **Payment Gateway:** Paystack API integration
* **Error Handling:** React-Error-Boundary

## ⚙️ Core Architecture & Features
* **Enterprise-Grade Security (RLS):** Upgraded from frontend session gates to full Supabase Authentication. Enforced PostgreSQL Row Level Security (RLS) to ensure database mutations and queries are cryptographically protected and restricted strictly to verified administrative identities.
* **Enterprise-Grade Type Safety:** Completely migrated the codebase to strict TypeScript. Engineered custom interfaces for the Zustand global store, applied exhaustive type narrowing for error handling, and enforced strict form event typing to eliminate runtime data crashes.
* **Secure Fintech Data Pipeline:** Integrated the Paystack API to handle real-time transactions. Adhered to strict financial data rules by calculating transactions in the lowest denomination (Kobo) to prevent floating-point math errors.
* **Event-Driven Automation:** Engineered a post-payment data hook utilizing Supabase webhooks. This captures transaction payloads and triggers a Make.com serverless pipeline to dispatch a formal Physical Admission Letter directly to the student's inbox the exact millisecond a payment is logged.
* **Protected Admin Dashboard:** Built an internal `/admin` portal utilizing React Router protected routes. It features a real-time data table and search engine, allowing venue staff to securely verify student registration tokens and manage live check-ins at the physical venue door.
* **Global State Management:** Implemented Zustand to create a highly optimized data bridge. User selections securely persist across isolated routing layers, ensuring zero data loss between the landing page and the checkout gateway.
* **Defensive UI & Fault Tolerance:** Engineered a robust `ErrorBoundary` wrapper to catch fatal JavaScript runtime errors, guaranteeing the application degrades gracefully. Utilized Optional Chaining (`?.`) to prevent null-state rendering crashes.

## 🔒 Testing the Admin Dashboard
For testing and code-review purposes, the `/admin` route is cryptographically guarded by Supabase Authentication and RLS. 
* **Navigation:** Visit `/admin` (Unauthenticated users will be routed to `/login`)
* **Demo Email:** `tester@vocationalplatform.com`
* **Demo Password:** `123456`

*(Note: These are read-only demo credentials provided for portfolio review.)*

## 🗺 Future Roadmap
* **Data Visualization & Analytics:** Integrate Recharts to provide the admin dashboard with real-time graphical insights into enrollment trends, revenue aggregation, and course popularity metrics.

## 🚀 Local Setup
1. Clone the repository.
2. Run `npm install` (Note: Use `npm install --legacy-peer-deps` to handle React 19 / Paystack peer requirements or configure `.npmrc` with `legacy-peer-deps=true`).
3. Create a `.env` file in the root directory and add your environment variables:
   ```text
   VITE_PAYSTACK_PUBLIC_KEY=your_test_key_here
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_publishable_key