const express = require('express');
const { getAvailableBuses, createBus } = require('./busController'); // Adjust the path if necessary

const busRoute = express.Router();

// Get available buses based on from, to, and date
busRoute.get('/available', getAvailableBuses);

// Create a new bus
busRoute.post("/", createBus);

// Other routes (get all buses, update, delete, etc.) can go here...

module.exports = busRoute;
