import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../featrues/userAuthSlice';

const LoginFormPopup = ({ show, handleClose, toggleSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const validateForm = () => {
    let valid = true;
    const regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (!username) {
      setUsernameError('Please enter your username!');
      valid = false;
    } else if (username.length < 6) {
      setUsernameError('Username must have at least 6 characters');
      valid = false;
    } else {
      setUsernameError('');
    }

    if (!password) {
      setPasswordError('Please enter your password!');
      valid = false;
    } else if (password.length < 8) {
      setPasswordError('Password must have at least 8 characters');
      valid = false;
    } else if (password.length > 15) {
      setPasswordError('Password is too long');
      valid = false;
    } else if (!regularExpression.test(password)) {
      setPasswordError('Password must contain at least one special character');
      valid = false;
    } else {
      setPasswordError('');
    }

    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoginError('');

    if (validateForm()) {
      dispatch(loginUser({ username, password }));
      // console.log( `username ,password ${username},${password}`)
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered backdrop="static">
      <Modal.Body className="d-flex gap-2 flex-column">
        <Button variant="close" aria-label="Close" onClick={handleClose} className="align-self-end"></Button>
        <div className="myform p-5">
          <h6 className="text-center fw-bold font-16 primary-color">Login Form</h6>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="Username" className="mb-3">
              <Form.Label className="font-14">Username</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Enter your username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  isInvalid={!!usernameError}
                />
                <Form.Control.Feedback type="invalid">
                  {usernameError}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="password" className="mb-3">
              <Form.Label className="font-14">Password</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  isInvalid={!!passwordError}
                />
                <Form.Control.Feedback type="invalid">
                  {passwordError}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            {loading && <p>Loading...</p>}
            {error && <div className="alert alert-danger mt-2">{error}</div>}
            <Button
              className="btn primary-background-color text-white w-100 btn-hover"
              type="submit"
              disabled={loading}
            >
              Login
            </Button>
            {loginError && <div className="alert alert-danger mt-2">{loginError}</div>}
          </Form>
          <p className='font-14 font-10'>
            Don't have an account?{' '}
            <span onClick={toggleSignup} className='text-primary signinpopup'>Sign Up</span> here
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

LoginFormPopup.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  toggleSignup: PropTypes.func.isRequired,
};

export default LoginFormPopup;