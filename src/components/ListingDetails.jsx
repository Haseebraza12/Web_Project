import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ListingDetails = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    fetch(`/api/listings/${id}`)
      .then(response => response.json())
      .then(data => setListing(data))
      .catch(error => console.error('Error fetching listing:', error));
  }, [id]);

  if (!listing) return <div>Loading...</div>;

  return (
    <div>
      <h1>{listing.title}</h1>
      <img src={listing.img} alt={listing.title} />
      <p>Type: {listing.type}</p>
      <p>Amenities: {listing.amenities.join(', ')}</p>
      <p>Guests: {listing.guests}</p>
      <p>Bedrooms: {listing.bedrooms}</p>
      <p>Bathrooms: {listing.bathrooms}</p>
      <p>Price per night: ${listing.price}</p>
      <button>Book Now</button>
    </div>
  );
};

export default ListingDetails; 