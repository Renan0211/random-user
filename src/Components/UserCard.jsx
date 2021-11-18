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

export default UserCard;
