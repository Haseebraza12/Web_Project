const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const listings = require('./data/listings.json');

// Get all listings
app.get('/api/listings', (req, res) => {
  res.json(listings);
});

// Get listing details by ID
app.get('/api/listings/:id', (req, res) => {
  const listing = listings.find(l => l.id === parseInt(req.params.id));
  if (listing) {
    res.json(listing);
  } else {
    res.status(404).send('Listing not found');
  }
});

// Mock booking creation
app.post('/api/bookings', (req, res) => {
  // Here you would handle booking logic
  res.status(201).send('Booking created successfully');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 