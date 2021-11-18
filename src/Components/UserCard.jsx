import PropTypes from 'prop-types';
import React from 'react';
import { Badge, Card } from 'react-bootstrap';

const UserCard = function ({ userInfo }) {
  const { picture, name, gender } = userInfo;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={picture.large} />
      <Card.Body>
        <Card.Title>
          {name.title + name.first + name.last}
        </Card.Title>
        <Badge bg="primary">{gender}</Badge>
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
