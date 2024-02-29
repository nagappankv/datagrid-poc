// components/Login.js
import React from 'react';
import Cookies from 'js-cookie';

function Login() {
  const handleLogin = () => {
    // Simulate authentication and set a cookie
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';  // In real scenario, you should receive this token from your authentication API.
    Cookies.set('authToken', token, { expires: 1 }); // Expires in 1 day
    alert('Logged in and cookie set');
  };

  return (
    <button onClick={handleLogin}>Login</button>
  );
}

export default Login;
