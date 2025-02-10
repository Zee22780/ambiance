import React, { useState, useEffect } from 'react';
import PageLayout from '../components/PageLayout';
import LocationCard from '../components/LocationCard';


const HomePage = () => {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/api/locations')
    .then(response => response.json())
    .then(data => setLocations(data))
    .catch(error => console.error('Error Fetching Locations:', error))
  }, [])


  return (
    <div style={{margin: '10px'}}>
      <PageLayout />
      <h1>All Locations</h1>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        {locations.map(location => (
          <LocationCard key={location._id} location={location}/>
        ))}
      </div>
    </div>
  );
};

export default HomePage;