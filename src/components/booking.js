import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import movieImage from './images/download.jpg'; // Replace with your actual image path

const Booking = () => {

    const [bookingHistory, setBookingHistory] = useState([]);

    // Simulated booking history data for demonstration

    const dummyBookingHistory = [

        {

            bookingId: 1,

            movieId: 101,

            showId: 201,

            bookingDate: '2023-08-15',

            transactionId: 12345,

            totalCost: 50.0,

            seatList: 'A1, A2, A3',

            ticket: 'Ticket123.pdf', // Replace with actual ticket PDF link

        },

        // Add more dummy data entries

    ];

    useEffect(() => {

        setBookingHistory(dummyBookingHistory);

    }, []);

    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-black bg-dark mt-1">

                <div className="container">

                    <a className="navbar-brand" href="#">

                        Movie Ticket System

                    </a>

                    <button

                        className="navbar-toggler"

                        type="button"

                        data-bs-toggle="collapse"

                        data-bs-target="#navbarNav"

                        aria-controls="navbarNav"

                        aria-expanded="false"

                        aria-label="Toggle navigation"

                    >

                        <span className="navbar-toggler-icon"></span>

                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav ml-auto">


                            {/* <li className="nav-item">

                                <Link to="/booking" className="nav-link">My Bookings</Link>

                            </li> */}

                            <li className="nav-item">

                            <Link to="/dashboard" className="nav-link">Home</Link>

                            </li>

                            <li className="nav-item">

                                <a className="nav-link" href="#">

                                    Logout

                                </a>

                            </li>

                        </ul>

                    </div>

                </div>

            </nav>

            <div className="container mt-5">

                <h2 className="mb-4">Booking History</h2>

                <table className="table table-bordered">

                    <thead>

                        <tr>

                            <th>Booking ID</th>

                            <th>Movie</th>

                            <th>Show ID</th>

                            <th>Booking Date</th>

                            <th>Transaction ID</th>

                            <th>Total Cost</th>

                            <th>Seat List</th>

                            <th>Ticket</th>

                        </tr>

                    </thead>

                    <tbody>

                        {bookingHistory.map((booking) => (

                            <tr key={booking.bookingId}>

                                <td>{booking.bookingId}</td>

                                <td>

                                    <img

                                        src={movieImage}

                                        alt="Movie"

                                        className="movie-image"

                                    />

                                </td>

                                <td>{booking.showId}</td>

                                <td>{booking.bookingDate}</td>

                                <td>{booking.transactionId}</td>

                                <td>${booking.totalCost}</td>

                                <td>{booking.seatList}</td>

                                <td>

                                    <a href={booking.ticket} target="_blank" rel="noopener noreferrer">

                                        View Ticket

                                    </a>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>
        </div>



    );

};

export default Booking;
