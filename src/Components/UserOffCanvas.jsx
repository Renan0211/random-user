import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Offcanvas } from 'react-bootstrap';

const UserOffCanvas = function ({ userInfo, placement }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { picture, name, gender } = userInfo;
  console.log(picture);
  return (
    <div>
      <Button variant="primary" onClick={handleShow} className="me-2">
        Saiba mais
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement={placement}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{`${name.first} ${name.last}`}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {gender}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

UserOffCanvas.propTypes = {
  userInfo: PropTypes.shape({
    picture: PropTypes.shape({
      large: PropTypes.string,
      medium: PropTypes.string,
      thumbnail: PropTypes.string,
    }),
    name: PropTypes.shape({
      title: PropTypes.string,
      first: PropTypes.string,
      last: PropTypes.string,
    }),
    gender: PropTypes.string,
  }).isRequired,
  placement: PropTypes.string.isRequired,
};

export default UserOffCanvas;
