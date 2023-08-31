import React, { useState } from 'react';

import './css/SeatingBookingPage.css'; // Add custom CSS for styling

const MovieBooking = () => {

 const [movieTitle, setMovieTitle] = useState('');

 const [selectedDate, setSelectedDate] = useState('');

 const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

 const [selectedLanguage, setSelectedLanguage] = useState('');

 const [selectedCity, setSelectedCity] = useState('');

 const [selectedCinemaHall, setSelectedCinemaHall] = useState('');

 const [numSeats, setNumSeats] = useState(1);

 const [userName, setUserName] = useState('');

 const [contactInfo, setContactInfo] = useState('');

 const usr=localStorage.getItem('username');

 const handleSubmit = (e) => {

  e.preventDefault();

  // Handle booking logic here

  console.log('Booking submitted:', {

   movieTitle,

   selectedDate,

   selectedTimeSlot,

   selectedLanguage,

   selectedCity,

   selectedCinemaHall,

   numSeats,

   userName,

   contactInfo,

  });

 };

 const timeSlots = [

  '10:00 AM',

  '2:00 PM',

  '6:00 PM',

  // Add more time slots as needed

 ];

 const cities = [

  'Mumbai',

  'Delhi',

  'Bangalore',

  // Add more cities

 ];

 const cinemaHalls = [

  'PVR Cinemas',

  'INOX',

  'Cinepolis',

  // Add more cinema halls

 ];

 return (

  <div className="container movie-booking-page">

   <h2>Movie Ticket Booking</h2>

   <form onSubmit={handleSubmit}>

    {/* Movie Selection */}

    <div className="form-group">

     <label>Movie Title</label>

     <input

      type="text"

      className="form-control"

      value={movieTitle}

      onChange={(e) => setMovieTitle(e.target.value)}

      required

     />

    </div>

    <div className="form-group">

     <label>Movie Poster/Image</label>

     {/* Add your image upload/input component here */}

    </div>

    {/* Date and Time Selection */}

    <div className="form-group">

     <label>Date</label>

     <input

      type="date"

      className="form-control"

      value={selectedDate}

      onChange={(e) => setSelectedDate(e.target.value)}

      required

     />

    </div>

    <div className="form-group">

     <label>Time Slot</label>

     <select

      className="form-control"

      value={selectedTimeSlot}

      onChange={(e) => setSelectedTimeSlot(e.target.value)}

      required

     >

      <option value="">Select Time Slot</option>

      {timeSlots.map((slot) => (

       <option key={slot} value={slot}>

        {slot}

       </option>

      ))}

     </select>

    </div>

    {/* Language Selection */}

    <div className="form-group">

     <label>Language</label>

     <select

      className="form-control"

      value={selectedLanguage}

      onChange={(e) => setSelectedLanguage(e.target.value)}

      required

     >

      <option value="">Select Language</option>

      <option value="Hindi">Hindi</option>

      <option value="English">English</option>

      {/* Add more language options */}

     </select>

    </div>

    {/* City and Cinema Hall Selection */}

    <div className="form-group">

     <label>City</label>

     <select

      className="form-control"

      value={selectedCity}

      onChange={(e) => setSelectedCity(e.target.value)}

      required

     >

      <option value="">Select City</option>

      {cities.map((city) => (

       <option key={city} value={city}>

        {city}

       </option>

      ))}

     </select>

    </div>

    <div className="form-group">

     <label>Cinema Hall Name</label>

     <select

      className="form-control"

      value={selectedCinemaHall}

      onChange={(e) => setSelectedCinemaHall(e.target.value)}

      required

     >

      <option value="">Select Cinema Hall</option>

      {cinemaHalls.map((hall) => (

       <option key={hall} value={hall}>

        {hall}

       </option>

      ))}

     </select>

    </div>

    {/* Seat Selection */}

    <div className="form-group">

     <label>Number of Seats to Book</label>

     <input

      type="number"

      className="form-control"

      value={numSeats}

      onChange={(e) => setNumSeats(e.target.value)}

      required

     />

    </div>

    {/* Display seat availability */}

    <p className="availability-info">Seats Available: X | Seats Booked: Y</p>

    {/* User Information */}

    <div className="form-group">

     <label>User Name</label>

     <input

      type="text"

      className="form-control"

      value={usr}

      onChange={(e) => setUserName(e.target.value)}

      required

     />

    </div>

    <div className="form-group">

     <label>Contact Information</label>

     <input

      type="text"

      className="form-control"

      value={contactInfo}

      onChange={(e) => setContactInfo(e.target.value)}

      required

     />

    </div>

    <button type="submit" className="btn btn-primary">Book Now</button>

   </form>

  </div>

 );

};

export default MovieBooking;





