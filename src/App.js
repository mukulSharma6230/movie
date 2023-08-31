import logo from './logo.svg';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Signup from './components/Signup';
import Login from './components/login';
import { BrowserRouter as Router,Switch, Routes,Route, Link } from 'react-router-dom';
import Booking from './components/booking';
import Dashboard from './components/dashboard';
import MovieBooking from './components/movieBooking';
import MovieDetails from './components/moviedatailsPage';
import AdminLogin from './components/admin/adminLogin';
import AdminDashboard from './components/admin/adminDashboard';
import ManageMovies from './components/admin/manageMovie';
import ManageCinemaHalls from './components/admin/adminCinema';
import ManageShows from './components/admin/adminshows';
function App() {
  return (
    <Router>

          <Link className="nav-link" to={'/login'}>
          </Link>

         <Link className="nav-link" to={'/sign-up'}>


         </Link>
         <Link className="nav-link" to={'/dashboard'}>
          </Link>



    
      <Switch>

       <Route exact path="/"><Dashboard></Dashboard></Route>

       <Route exact path="/login"><Login></Login></Route>

       <Route path="/sign-up"><Signup></Signup></Route>

       <Route path="/booking"><Booking></Booking></Route>
       <Route path="/dashboard"><Dashboard></Dashboard></Route>
       <Route path="/movieBooking/:movieId"
       render={(props) => (
        <MovieBooking id={props.match.params.id}/>
    )} />
        <Route path="/movie-details/:movieId"><MovieDetails></MovieDetails></Route>
        <Route path="/admin"><AdminLogin></AdminLogin></Route>
        <Route path="/adminDashboard"><AdminDashboard></AdminDashboard></Route>
        <Route path="/manageMovies"><ManageMovies></ManageMovies></Route>
        <Route path="/adminCinema"><ManageCinemaHalls></ManageCinemaHalls></Route>
        <Route path="/adminshows"><ManageShows></ManageShows></Route>
       
       


      </Switch>

     


  </Router>
  );
}

export default App;
