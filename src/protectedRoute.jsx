import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  // 1. Strict Memory State: Defaults to false every time the component mounts (on refresh)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState(false);

  const ADMIN_PASSWORD = "paul2026"; 

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      // 2. We only change the React state. No sessionStorage used.
      setIsAuthenticated(true);
    } else {
      setError(true);
      setPasswordInput('');
    }
  };

  if (isAuthenticated) {
    return <Outlet />;
  }

  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }} className='my-32'>
      <h2>🔒 Restricted Area</h2>
      <p>Please enter the admin password to view the command center.</p>
      
      <form onSubmit={handleLogin} style={{ marginTop: '20px' }}>
        <input 
          type="password" 
          placeholder="Enter Password" 
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          style={{ padding: '10px', width: '250px', marginRight: '10px', border : '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer', color : 'green', fontWeight : 'bold' }}>
          Unlock
        </button>
      </form>

      {error && (
        <p style={{ color: 'red', marginTop: '15px' }}>
          Incorrect password. Check the README!
        </p>
      )}
    </div>
  );
};

export default ProtectedRoute;

  