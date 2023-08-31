import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const ManageMovies = () => {

 const [movies, setMovies] = useState([]);

 const [newMovie, setNewMovie] = useState('');

 const handleAddMovie = () => {

  if (newMovie) {

   setMovies([...movies, newMovie]);

   setNewMovie('');

  }

 };

 const handleDeleteMovie = (index) => {

  const updatedMovies = movies.filter((_, i) => i !== index);

  setMovies(updatedMovies);

 };

 return (

  <div className="container">

   <h2 className="my-4">Manage Movies (Admin)</h2>

   {/* Add Movie Form */}

   <div className="mb-3">

    <input

     type="text"

     className="form-control"

     placeholder="Enter Movie Title"

     value={newMovie}

     onChange={(e) => setNewMovie(e.target.value)}

    />

    <button className="btn btn-primary mt-2" onClick={handleAddMovie}>

     Add Movie

    </button>

   </div>

   {/* Movie Listings */}

   <ul className="list-group">

    {movies.map((movie, index) => (

     <li key={index} className="list-group-item d-flex justify-content-between align-items-center">

      {movie}

      <button

       className="btn btn-danger btn-sm"

       onClick={() => handleDeleteMovie(index)}

      >

       Delete

      </button>

     </li>

    ))}

   </ul>

  </div>

 );

};

export default ManageMovies;















