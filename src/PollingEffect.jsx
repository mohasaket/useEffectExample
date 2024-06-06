import React, { useState, useEffect } from 'react';

const PollingEffect = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/5');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.toString());
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 5000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : data ? (
        <div>
          <h3>{data.title}</h3>
          <b>{data.id}:{data.body}</b>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PollingEffect;
