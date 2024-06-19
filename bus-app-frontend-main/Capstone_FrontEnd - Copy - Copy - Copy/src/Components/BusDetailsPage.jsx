import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Example: Importing Axios for making HTTP requests
import "../styles/BusDetailsPage.css";

const BusDetailsPage = () => {
  const [busRoutes, setBusRoutes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBusRoutes = async () => {
      try {
        const response = await fetch("https://authentication-9qlt.onrender.com");
        if (!response.ok) {
          throw new Error("Failed to fetch bus routes");
        }
        const data = await response.json();
        setBusRoutes(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching bus routes:", error);
        setLoading(false);
      }
    };

    fetchBusRoutes();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Bus Routes</h2>
      <ul>
        {busRoutes.map((route) => (
          <li key={route.id}>
            From: {route.source} - To: {route.destination}
            <Link to={`/details/${route.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusDetailsPage;
