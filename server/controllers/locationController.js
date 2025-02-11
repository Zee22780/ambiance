import { Location } from '../models/location.js'

// Create a location
const createLocation = async (req, res) => {
  const { name, address, amenities, rating, images } = req.body;
  try {
    const newLocation = new Location({
      name,
      address,
      amenities,
      rating,
      images
    });
    await newLocation.save();
    res.status(201).json(newLocation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read all locations
const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find(); // get all the locations and store them in a variable called locations
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a location by ID
const updateLocation = async (req, res) => {
  const { id } = req.params; // Get the location ID from the request parameters
  const updates = req.body; // Get the updated data from the request body

  try {
    // Find the location by ID and update it
    const updatedLocation = await Location.findByIdAndUpdate(id, updates, { new: true });
    
    if (!updatedLocation) {
      return res.status(404).json({ message: 'Location not found' });
    }

    res.status(200).json(updatedLocation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a location by ID
const deleteLocation = async (req, res) => {
  const { id } = req.params; // Get the location ID from the request parameters

  try {
    const deletedLocation = await Location.findByIdAndDelete(id);

    if (!deletedLocation) {
      return res.status(404).json({ message: 'Location not found' });
    }

    res.status(200).json({ message: 'Location deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  createLocation,
  getAllLocations,
  updateLocation,
  deleteLocation
}