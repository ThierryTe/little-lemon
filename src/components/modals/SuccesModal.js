import  Modal from 'react-modal'
import React from 'react'
import '../../App.css'
export default function SuccesModal({ isOpen, closeModal }) {
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    className="modal-content"
    >
    <h2 className="success-heading">Booking Successful!</h2>
    <p>Your table has been successfully booked.</p>
    <button className="success-button" onClick={closeModal}>Close</button>
    </Modal>

  )
}
