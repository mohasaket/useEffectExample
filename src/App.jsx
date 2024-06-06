import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // State to store the fetched data
  const [data, setData] = useState([]);
  // State to manage the loading state
  const [loading, setLoading] = useState(true);

  // useEffect hook to perform side effects
  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch data from the API
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const result = await response.json();
        // Update the data state with the fetched data
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      // Set loading to false after data is fetched
      setLoading(false);
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  // Display loading message while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }
  // Render the fetched data
  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
