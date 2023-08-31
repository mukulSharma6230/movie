import React from 'react';

import { Link } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const AdminDashboard = () => {

    return (

        <div className="container mt-5" >

            <h2 className="mb-4">Movie Booking System Dashboard</h2>

            <div className="row">

                <div className="col-md-3">

                    <div className="list-group">

                        <Link to="/dashboard" className="list-group-item list-group-item-action active">

                            Dashboard

                        </Link>

                        <Link to="/manageMovies" className="list-group-item list-group-item-action">

                            movies

                        </Link>

                        <Link to="/adminshows" className="list-group-item list-group-item-action">

                             Shows

                        </Link>


                        <Link to="/adminCinema" className="list-group-item list-group-item-action">

                            Cinema Halls

                        </Link>

                        {/* Add more navigation links here */}

                    </div>

                </div>

                <div className="col-md-9">

                    {/* Content area for dashboard sections */}

                </div>

            </div>

        </div>

    );

};

export default AdminDashboard;





