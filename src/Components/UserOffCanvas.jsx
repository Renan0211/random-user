import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Container, Offcanvas, Image, Accordion,
} from 'react-bootstrap';

const UserOffCanvas = function ({ userInfo, placement }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    picture, name, email, phone, cell, location,
  } = userInfo;
  console.log(picture);
  return (
    <div>
      <Button variant="primary" onClick={handleShow} className="me-2">
        Saiba mais
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement={placement}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{`${name.title} ${name.first} ${name.last}`}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex">
          <Container>
            <Image src={picture.large} />
          </Container>
          <Container>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Contato</Accordion.Header>
                <Accordion.Body>
                  <p>{`Email: ${email}`}</p>
                  <p>{`Telefone: ${phone}`}</p>
                  <p>{`Celular: ${cell}`}</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Localização</Accordion.Header>
                <Accordion.Body>
                  <p>{`${location.city}, ${location.country}`}</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Container>
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
    location: PropTypes.shape({
      city: PropTypes.string,
      country: PropTypes.string,
    }),
    gender: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    cell: PropTypes.string,
  }).isRequired,
  placement: PropTypes.string.isRequired,
};

export default UserOffCanvas;
