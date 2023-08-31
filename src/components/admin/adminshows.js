import React, { useState } from 'react';

//import './ManageShows.css'; // Add your custom CSS for styling

import { Button, Table, Modal, Form } from 'react-bootstrap'; // Import Bootstrap components

const ManageShows = () => {

 const [shows, setShows] = useState([

  // Dummy data for movie shows

  {

   id: 1,

   movie: 'Movie A',

   cinemaHall: 'Cinema Hall 1',

   date: '2023-09-01',

   time: '10:00 AM',

   language: 'English',

   availableSeats: 150,

   ticketPrice: 10.99,

   showType: '2D',

   status: 'Upcoming',

   notes: 'Special screening',

  },

  // Add more show data as needed

 ]);

 const [editShow, setEditShow] = useState(null);

 const [showModal, setShowModal] = useState(false);

 const handleEdit = (show) => {

  setEditShow(show);

  setShowModal(true);

 };

 const handleSave = () => {

  // Update the show details in the state or make an API call

  // Clear the editShow and close the modal

  setEditShow(null);

  setShowModal(false);

 };

 return (

  <div className="container manage-shows">

   <h2>Manage Shows</h2>

   <Table striped bordered hover>

    <thead>

     <tr>

      <th>Movie</th>

      <th>Cinema Hall</th>

      <th>Date</th>

      <th>Time</th>

      <th>Language</th>

      <th>Available Seats</th>

      <th>Ticket Price</th>

      <th>Show Type</th>

      <th>Status</th>

      <th>Actions</th>

     </tr>

    </thead>

    <tbody>

     {shows.map((show) => (

      <tr key={show.id}>

       <td>{show.movie}</td>

       <td>{show.cinemaHall}</td>

       <td>{show.date}</td>

       <td>{show.time}</td>

       <td>{show.language}</td>

       <td>{show.availableSeats}</td>

       <td>${show.ticketPrice}</td>

       <td>{show.showType}</td>

       <td>{show.status}</td>

       <td>

        <Button variant="primary" onClick={() => handleEdit(show)}>

         Edit

        </Button>

        {/* Add a Delete button and logic if needed */}

       </td>

      </tr>

     ))}

    </tbody>

   </Table>

   {/* Modal for editing shows */}

   <Modal show={showModal} onHide={() => setShowModal(false)}>

    <Modal.Header closeButton>

     <Modal.Title>Edit Show</Modal.Title>

    </Modal.Header>

    <Modal.Body>

     {editShow && (

      <Form>

       {/* Add form fields for editing show details */}

       {/* For example: */}

       <Form.Group controlId="formMovie">

        <Form.Label>Movie</Form.Label>

        <Form.Control

         type="text"

         value={editShow.movie}

         onChange={(e) =>

          setEditShow({ ...editShow, movie: e.target.value })

         }

        />

       </Form.Group>

       {/* Add more form fields as needed */}

      </Form>

     )}

    </Modal.Body>

    <Modal.Footer>

     <Button variant="secondary" onClick={() => setShowModal(false)}>

      Close

     </Button>

     <Button variant="primary" onClick={handleSave}>

      Save Changes

     </Button>

    </Modal.Footer>

   </Modal>

  </div>

 );

};

export default ManageShows;















