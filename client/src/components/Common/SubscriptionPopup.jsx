import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const SubscriptionModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered backdrop="static" fade={true}>
      <Modal.Body className="text-center d-flex gap-2 flex-column">
        <div className="d-flex justify-content-end">
          <Button variant="close" aria-label="Close" onClick={handleClose}></Button>
        </div>
        <span className="rounded-circle">
          <i className="bi bi-check2 text-white select-green-bg p-2 rounded-circle"></i>
        </span>
        <p className="fw-bold heading-1 font-16 primary-color">Thank you!</p>
        <p className="text-muted fw-bold heading-1 font-14">
          Your free trial has been <br />
          successfully started. Thanks!
        </p>
        <Button
          className="btn primary-background-color text-white pl-5 pr-5 pt-2 pb-2 font-14 fw-bold btn-hover"
          onClick={handleClose}
        >
          Ok
        </Button>
      </Modal.Body>
    </Modal>
  );
};

SubscriptionModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
