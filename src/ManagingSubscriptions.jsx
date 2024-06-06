import React, { useState, useEffect } from 'react';

const SubscriptionEffect = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const socket = new WebSocket('wss://echo.websocket.org');

    socket.onmessage = (event) => {
      setMessage(event.data);
    };

    // Cleanup function to close the WebSocket connection when the component unmounts
    return () => {
      socket.close();
    };
  }, []); // Empty dependency array means this effect runs only on mount and unmount

  return <div>Message: {message}</div>;
};

export default SubscriptionEffect;
