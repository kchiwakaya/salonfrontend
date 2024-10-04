import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Import stylist data (assuming it's available)
// import stylistsData from './path/to/stylistsData'; // Adjust the path as necessary

const StylistsList = () => {
  const [stylistsData, setStylistsData] = useState([]);

  useEffect(() => {
    const fetchStylists = async () => {
      try {
        const response = await fetch('http://localhost:8000/users/');
        const data = await response.json();
        setStylistsData(data);
      } catch (error) {
        console.error('Error fetching stylists:', error);
      }
    };

    fetchStylists();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {stylistsData.map((stylist) => (
          <div className="col-md-4 mb-4" key={stylist.id}>
            <div className="card">
              <div className="card-body">
                <img src="https://via.placeholder.com/150" alt={`${stylist.salon_name} logo`} className="card-img-top" />
                <h5 className="card-title">{stylist.salon_name}</h5>
                <p className="card-text">Name: {stylist.username}</p>
                <p className="card-text">Address: {stylist.address}</p>
                <p className="card-text">City: {stylist.city}</p>
                <p className="card-text">Phone4444: {stylist.phone_number}</p>
                <Link to="/load" className="btn btn-primary">View Offers</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StylistsList;
