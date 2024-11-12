import React, { useState } from 'react';
import Navbar from './Navbar';

const LocationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: {
      country: '',
      city: '',
      streetAddress: '',
      neighborhood: ''
    },
    amenities: {
      laptop: false,
      outlets: false,
      freeWifi: false,
      tables: false,
      decor: false,
      music: false,
      price: '$',
      food: false
    },
    rating: 0
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      address: {
        ...prevState.address,
        [name]: value
      }
    }));
  };

  const handleAmenitiesChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      amenities: {
        ...prevState.amenities,
        [name]: type === 'checkbox' ? checked : value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);  // You can pass this data to a backend API or other handler
  };

  return (
    <>
    <Navbar />
    <form onSubmit={handleSubmit}>
      <h2>Add New Location</h2>
      
      {/* Name */}
      <label>
        Location Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
      </label>

      {/* Address */}
      <h3>Address</h3>
      <label>
        Country:
        <input type="text" name="country" value={formData.address.country} onChange={handleAddressChange} required />
      </label>
      <label>
        City:
        <input type="text" name="city" value={formData.address.city} onChange={handleAddressChange} required />
      </label>
      <label>
        Street Address:
        <input type="text" name="streetAddress" value={formData.address.streetAddress} onChange={handleAddressChange} required />
      </label>
      <label>
        Neighborhood (optional):
        <input type="text" name="neighborhood" value={formData.address.neighborhood} onChange={handleAddressChange} />
      </label>

      {/* Amenities */}
      <h3>Amenities</h3>
      <label>
        Laptop-friendly:
        <input type="checkbox" name="laptop" checked={formData.amenities.laptop} onChange={handleAmenitiesChange} />
      </label>
      <label>
        Outlets:
        <input type="checkbox" name="outlets" checked={formData.amenities.outlets} onChange={handleAmenitiesChange} />
      </label>
      <label>
        Free WiFi:
        <input type="checkbox" name="freeWifi" checked={formData.amenities.freeWifi} onChange={handleAmenitiesChange} />
      </label>
      <label>
        Tables:
        <input type="checkbox" name="tables" checked={formData.amenities.tables} onChange={handleAmenitiesChange} />
      </label>
      <label>
        Decor:
        <input type="checkbox" name="decor" checked={formData.amenities.decor} onChange={handleAmenitiesChange} />
      </label>
      <label>
        Music:
        <input type="checkbox" name="music" checked={formData.amenities.music} onChange={handleAmenitiesChange} />
      </label>

      {/* Price */}
      <label>
        Price:
        <select name="price" value={formData.amenities.price} onChange={handleAmenitiesChange}>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
        </select>
      </label>

      {/* Rating */}
      <label>
        Rating:
        <input type="number" name="rating" value={formData.rating} onChange={handleInputChange} min="0" max="5" step="0.1" required />
      </label>

      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default LocationForm;
