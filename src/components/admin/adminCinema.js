import React, { useState } from 'react';

// import './ManageCinemaHalls.css'; // Add custom CSS for styling

import { Button, Table, Modal, Form } from 'react-bootstrap'; // Import Bootstrap components

const ManageCinemaHalls = () => {

 const [cinemaHalls, setCinemaHalls] = useState([

  // Example data

  {

   id: 1,

   name: 'Cineplex Cinemas',

   location: '123 Main St, City',

   screens: 5,

   seatingCapacity: 150,

   facilities: ['3D Screens', 'Snack Bar'],

   contact: 'info@cineplex.com',

  },

  // Add more cinema hall entries

 ]);

 const [showEditModal, setShowEditModal] = useState(false);

 const [selectedCinemaHall, setSelectedCinemaHall] = useState(null);

 const handleEdit = (cinemaHall) => {

  setSelectedCinemaHall(cinemaHall);

  setShowEditModal(true);

 };

 const handleSave = (updatedCinemaHall) => {

  const updatedHalls = cinemaHalls.map((hall) =>

   hall.id === updatedCinemaHall.id ? updatedCinemaHall : hall

  );

  setCinemaHalls(updatedHalls);

  setShowEditModal(false);

 };

 return (

  <div className="container mt-4">

   <h2>Manage Cinema Halls</h2>

   <Table striped bordered hover>

    <thead>

     <tr>

      <th>Name</th>

      <th>Location</th>

      <th>Screens</th>

      <th>Seating Capacity</th>

      <th>Facilities</th>

      <th>Contact</th>

      <th>Action</th>

     </tr>

    </thead>

    <tbody>

     {cinemaHalls.map((cinemaHall) => (

      <tr key={cinemaHall.id}>

       <td>{cinemaHall.name}</td>

       <td>{cinemaHall.location}</td>

       <td>{cinemaHall.screens}</td>

       <td>{cinemaHall.seatingCapacity}</td>

       <td>{cinemaHall.facilities.join(', ')}</td>

       <td>{cinemaHall.contact}</td>

       <td>

        <Button onClick={() => handleEdit(cinemaHall)}>Edit</Button>

        {/* Add delete button and confirmation */}

       </td>

      </tr>

     ))}

    </tbody>

   </Table>

   <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>

    <Modal.Header closeButton>

     <Modal.Title>Edit Cinema Hall</Modal.Title>

    </Modal.Header>

    {selectedCinemaHall && (

     <Form onSubmit={() => handleSave(selectedCinemaHall)}>

      <Modal.Body>

       {/* Edit form fields here */}

       <Form.Group controlId="name">

        <Form.Label>Name</Form.Label>

        <Form.Control

         type="text"

         value={selectedCinemaHall.name}

         onChange={(e) =>

          setSelectedCinemaHall({

           ...selectedCinemaHall,

           name: e.target.value,

          })

         }

        />

       </Form.Group>

       {/* Add more form fields */}

      </Modal.Body>

      <Modal.Footer>

       <Button variant="secondary" onClick={() => setShowEditModal(false)}>

        Close

       </Button>

       <Button type="submit" variant="primary">

        Save Changes

       </Button>

      </Modal.Footer>

     </Form>

    )}

   </Modal>

  </div>

 );

};

export default ManageCinemaHalls;

