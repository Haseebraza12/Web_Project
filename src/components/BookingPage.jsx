import { useState } from 'react';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    checkin: '',
    checkout: '',
    guests: 1
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock booking submission
    console.log('Booking data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Check-in:
        <input type="date" name="checkin" value={formData.checkin} onChange={handleChange} />
      </label>
      <label>
        Check-out:
        <input type="date" name="checkout" value={formData.checkout} onChange={handleChange} />
      </label>
      <label>
        Guests:
        <input type="number" name="guests" value={formData.guests} onChange={handleChange} min="1" />
      </label>
      <button type="submit">Confirm Booking</button>
    </form>
  );
};

export default BookingPage; 