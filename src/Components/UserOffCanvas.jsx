import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Container, Offcanvas, Image, Accordion, Row, Col,
} from 'react-bootstrap';

const UserOffCanvas = function ({ userInfo, placement, scroll }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    picture, name, email, phone, cell, location, dob,
  } = userInfo;
  return (
    <div>
      <Button variant="primary" onClick={handleShow} className="me-2">
        Saiba mais
      </Button>
      <Offcanvas show={show} onHide={handleClose} scroll={scroll} placement={placement}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{`${name.title} ${name.first} ${name.last}, ${dob.age}`}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container fluid>
            <Row>

              <Col sm="1">
                <Image src={picture.large} className="m-auto" />
              </Col>
              <Col>
                <p>
                  &quot;Sou uma pessoa muito vehicula vitae sapien id, molestie
                  malesuada nisl. Integer viverra nibh ut pretium vestibulum. Fusce
                  molestie est non diam ornare, sed veneatis velit viverra. Nullam cursus comodo eni
                  nec vulputate. Morbi accumsan elit sit amet curus finibus. Vestibulum eu fringilla
                  magna. Sed convallis, enim et luctus vehicla, lectus elit hendrerit elit, a facili
                  leo nulla at erat. Morbi sed pora libero, vel lctus ex. Donec mollis magna ut port
                  ornare. Fusce ipsum velit, gravida in volutpat non, aliqm non odio. Nulla eget nib
                  suscipit, euismod odio in, tempus lectus. Nulla tincidunt, mauris vel commodo
                  ultrices, neque lacus consequt ante, non interdm libero augue feugiat lorem.&quot;

                </p>
              </Col>
              <Col>
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
                      <p>{`Rua ${location.street.name}, ${location.street.number}`}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
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
      street: PropTypes.shape({
        name: PropTypes.string,
        number: PropTypes.number,
      }),
    }),
    dob: PropTypes.shape({
      age: PropTypes.number,
    }),
    gender: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    cell: PropTypes.string,
  }).isRequired,
  placement: PropTypes.string.isRequired,
  scroll: PropTypes.bool.isRequired,
};

export default UserOffCanvas;
