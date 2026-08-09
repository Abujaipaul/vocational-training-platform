import { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { supabase } from './supabaseClient';

const ProtectedRoute = () => {
  // 1. STATE: Start as 'null' so we know we are actively checking the database
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // 2. CHECK BADGE ON LOAD: Ask Supabase if a session exists right now
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthenticated(!!session);
    });

    // 3. LISTEN FOR CHANGES: If they log in or log out, update the state instantly
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
    });

    // Cleanup listener when component unmounts
    return () => subscription.unsubscribe();
  }, []);

  // 4. THE LOADING STATE
  if (isAuthenticated === null) {
    return (
      <div className="flex justify-center items-center my-32 font-bold text-2xl">
        Checking VIP Badge... 🛡️
      </div>
    );
  }

  // 5. THE SUCCESS STATE: They have the badge, let them see the Admin Dashboard
  if (isAuthenticated) {
    return <Outlet />;
  }

  // 6. THE REJECT STATE: No badge? Kick them straight to the Login page!
  return <Navigate to="/login" replace />;
};

export default ProtectedRoute;