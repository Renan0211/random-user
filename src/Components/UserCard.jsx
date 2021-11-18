import PropTypes from 'prop-types';
import React from 'react';
import {
  Badge, Card, Container, Button,
} from 'react-bootstrap';

const UserCard = function ({ userInfo }) {
  const { picture, name, gender } = userInfo;
  return (
    <Card style={{ width: '18rem' }} className="m-3">
      <Card.Img variant="top" src={picture.large} />
      <Card.Body>
        <Card.Title>
          {`${name.first} ${name.last}`}
        </Card.Title>
        <Container className="d-flex justify-content-between align-items-center">
          <Badge bg="info">{gender}</Badge>
          <Button variant="primary" className="text-white">Saiba mais</Button>
        </Container>
      </Card.Body>
    </Card>
  );
};

UserCard.propTypes = {
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
};

export default UserCard;
