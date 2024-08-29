import express from 'express';
import { createLocation, getAllLocations, updateLocation, deleteLocation } from '../controllers/locationController.js';

const router = express.Router();

// Route for creating a location
router.post('/', createLocation)
// Route for getting all the locations that have been created
router.get('/', getAllLocations)
// Route for updating a specific location by ID
router.put('/:id', updateLocation)
// Route for deleting a specific location by ID
router.delete('/:id', deleteLocation);

export default router;