# Vocational Academy Training Platform 🚀

A high-performance digital storefront and automated revenue pipeline designed for technical and industrial training programs. 

This Single Page Application (SPA) digitizes the student onboarding process, completely automating course selection, data bridging, and secure payment collection without requiring manual administrative intervention.

## 🛠 Tech Stack
*   **Core:** React.js (v19)
*   **Styling:** Tailwind CSS
*   **State Management:** Zustand
*   **Routing:** React Router
*   **Payment Gateway:** Paystack API integration
*   **Error Handling:** React-Error-Boundary

## ⚙️ Core Architecture & Features (MVP)

*   **Secure Fintech Data Pipeline:** Integrated the Paystack API to handle real-time transactions. Adhered to strict financial data rules by calculating transactions in the lowest denomination (Kobo) to prevent floating-point math errors.
*   **Global State Management:** Implemented Zustand to create a highly optimized data bridge. User selections securely persist across isolated routing layers, ensuring zero data loss between the landing page and the checkout gateway.
*   **Defensive UI & Fault Tolerance:** Engineered a robust `ErrorBoundary` wrapper to catch fatal JavaScript runtime errors, guaranteeing the application degrades gracefully instead of presenting a broken interface to users. utilized Optional Chaining (`?.`) to prevent null-state rendering crashes.
*   **Smart Cross-Page Navigation:** Combined React Router's `useLocation` with native Web APIs (`scrollIntoView`) to build context-aware navigation, ensuring users are intelligently routed and scrolled to specific DOM elements regardless of their current page state.

## 🗺 Future Roadmap: Enterprise Integration

The platform is currently an MVP with a functioning revenue engine. The upcoming phases will transition the architecture into a fully gated, full-stack learning management system:

*   **Phase 4: Identity & Security (In Progress):** Integrating Backend-as-a-Service (BaaS) for secure user authentication (Sign Up / Log In) and session management.
*   **Phase 5: Protected Routes & Dashboard:** Architecting a private `/dashboard` restricted by auth guards, delivering personalized course access only to verified, paying users.
*   **Phase 6: Admin Revenue Panel:** Building an internal `/admin` dashboard featuring data visualization to track daily student enrollment and transaction volume.

## 🚀 Local Setup

1. Clone the repository.
2. Run `npm install` (Note: Use `npm install --legacy-peer-deps` to handle React 19 / Paystack peer requirements).
3. Create a `.env` file in the root directory and add your Paystack Public Key: `VITE_PAYSTACK_PUBLIC_KEY=your_test_key_here`
4. Run `npm run dev` to start the local development server.