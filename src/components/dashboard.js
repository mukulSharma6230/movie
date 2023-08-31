import React from 'react';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch, useSelector } from 'react-redux';
import blue from './images/blue.jpg';

import gadar2 from './images/gadar.png';

import omg2 from './images/omg2.png';

import jailer from './images/jailer.jpg';

import meg2 from './images/meg2.png';

import openheimer from './images/openheimer.jpg';

import { logout } from './authSlice';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
const Dashboard = () => {
    const dispatch=useDispatch();

    const loggedIn = localStorage.getItem("loggedIn");
    const username = localStorage.getItem("username");
    
 

 const handleLogout = () => {

  // Clear the user session and redirect to the login page

  console.log("logout called");
  localStorage.clear();
  dispatch(logout());
 history.push('/')

  // You can also redirect the user to the login page here

 };




    const [searchQuery, setSearchQuery] = useState('');

    const history = useHistory();

    const movies = [{ id: 1, title: 'Blue Beetle', image: blue },



    { id: 2, title: 'Gadar 2', image: gadar2 },

    { id: 3, title: 'OMG 2', image: omg2 },

    { id: 4, title: 'Jailer', image: jailer },

    { id: 5, title: 'Meg 2', image: meg2 },

    { id: 6, title: 'Oppenheimer', image: openheimer },











    ];

    const handleSearch = () => {

        // Find the movie details based on the movie title

        const matchedMovie = movies.find(movie => movie.title.toLowerCase() === searchQuery.toLowerCase());

        if (matchedMovie) {

            // Redirect to the movie details page with the matched movieId

            history.push(`/movie-details/${matchedMovie.id}`);

        } else {

            // Handle case when movie is not found

            console.log('Movie not found');

        }

    };
    console.log(loggedIn);
    if(loggedIn)
    {
    //const { id } = useParams();

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


                            <li className="nav-item">

                                <Link to="/booking" className="nav-link">My Bookings</Link>

                            </li>

                            <li className="nav-item">

                            <button className='nav-link' onClick={handleLogout}>Logout</button>

                            </li>

                            {/* <li className="nav-item">

                                <a className="nav-link" href="#">

                                    Logout

                                </a>

                            </li> */}

                        </ul>

                    </div>

                </div>

            </nav>

            <div className="container mt-4">

                <div className="row justify-content-center">

                    <div className="col-md-8">

                        <div className="input-group mb-3">

                            <input

                                type="text"

                                className="form-control"

                                placeholder="Search for a movie..."

                                aria-label="Search for a movie..."

                                aria-describedby="button-addon2"
                                value={searchQuery}

                                onChange={e => setSearchQuery(e.target.value)}


                            />

                            <div className="input-group-append">

                                <button onClick={handleSearch}

                                    className="btn btn-outline-secondary"

                                    type="button"

                                    id="button-addon2"

                                >

                                    Search Movie

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="container mt-4">

                <div className="row justify-content-center">

                    <div className="col-md-8">

                        <h2>Welcome to Cinemas--{username}</h2>

                        {/* List of bookings can be added here */}

                    </div>

                </div>

            </div>
            <div className="container mt-5">

                <h2 className="mb-4">Movie Dashboard</h2>

                <div className="row">

                    {movies.map((movie) => (

                        <div key={movie.id} className="col-md-4 mb-4">

                            <div className="card">

                                <img src={movie.image} className="card-img-top" alt={movie.title} />

                                <div className="card-body">

                                    <h5 className="card-title">{movie.title}</h5>

                                    <Link to={`/moviebooking/${movie.id}`} className="btn btn-primary">
                                        Book Ticket
                                    </Link>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>

    );
}
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


                        <li className="nav-item">

                            <Link to="/login" className="nav-link">Login</Link>

                        </li>
                        <li className="nav-item">

                            <Link to="/sign-up" className="nav-link">Register</Link>

                        </li>

                        
                       

                        

                    </ul>

                </div>

            </div>

        </nav>

        <div className="container mt-4">

            <div className="row justify-content-center">

                <div className="col-md-8">

                    <div className="input-group mb-3">

                        <input

                            type="text"

                            className="form-control"

                            placeholder="Search for a movie..."

                            aria-label="Search for a movie..."

                            aria-describedby="button-addon2"
                            value={searchQuery}

                            onChange={e => setSearchQuery(e.target.value)}


                        />

                        <div className="input-group-append">

                            <button onClick={handleSearch}

                                className="btn btn-outline-secondary"

                                type="button"

                                id="button-addon2"

                            >

                                Search Movie

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

        <div className="container mt-4">

            <div className="row justify-content-center">

                <div className="col-md-8">

                    <h2>Welcome to Cinemas</h2>

                    {/* List of bookings can be added here */}

                </div>

            </div>

        </div>
        <div className="container mt-5">

            <h2 className="mb-4">Movie Dashboard</h2>

            <div className="row">

                {movies.map((movie) => (

                    <div key={movie.id} className="col-md-4 mb-4">

                        <div className="card">

                            <img src={movie.image} className="card-img-top" alt={movie.title} />

                            <div className="card-body">

                                <h5 className="card-title">{movie.title}</h5>

                                <Link to={`/login`} className="btn btn-primary">
                                    Book Ticket
                                </Link>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    </div>

);

};

export default Dashboard;







