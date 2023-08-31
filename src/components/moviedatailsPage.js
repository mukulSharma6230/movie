import React from 'react';

import { useParams } from 'react-router-dom';

const MovieDetails = () => {

 // Use useParams to get the movieId from the URL

 const { movieId } = useParams();

 // Fetch movie details based on movieId from your data source

 // For example, you can use your movie data array or fetch from an API

 // Replace this with your actual movie details fetching logic

 const movieDetails = {

  id: movieId,

  title: 'Movie Title',

  image: 'movie_image.jpg',

  genre: 'Action',

  cast: 'Actor A, Actor B, Actor C',

  production: 'Production Company',

  director: 'Director Name',

  cinema: 'Cinema Name, City',

  language: 'English',

  rating: '4.5',

  reviews: [

   { user: 'User 1', comment: 'Great movie!' },

   { user: 'User 2', comment: 'Loved it!' },

  ],

 };

 return (

  <div className="container">

   <h2>{movieDetails.title}</h2>

   <div className="row">

    <div className="col-md-6">

     <img src={movieDetails.image} alt={movieDetails.title} className="img-fluid" />

    </div>

    <div className="col-md-6">

     <p>Genre: {movieDetails.genre}</p>

     <p>Cast: {movieDetails.cast}</p>

     <p>Production: {movieDetails.production}</p>

     <p>Director: {movieDetails.director}</p>

     <p>Cinema: {movieDetails.cinema}</p>

     <p>Language: {movieDetails.language}</p>

     <p>Rating: {movieDetails.rating}</p>

     <h3>Reviews:</h3>

     <ul>

      {movieDetails.reviews.map((review, index) => (

       <li key={index}>

        <strong>{review.user}:</strong> {review.comment}

       </li>

      ))}

     </ul>

    </div>

   </div>

  </div>

 );

};

export default MovieDetails;











