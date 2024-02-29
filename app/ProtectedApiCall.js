// components/ProtectedApiCall.js
import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

function ProtectedApiCall() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const token = Cookies.get('authToken');
    
    if (!token) {
      alert('No authentication token found');
      return;
    }

    try {
      const response = await axios.get('https://postman-echo.com/post?test=123', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setData(response.data);
    } catch (error) {
      console.error('Error making API call:', error);
      alert('Failed to fetch protected data');
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Protected Data</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default ProtectedApiCall;
