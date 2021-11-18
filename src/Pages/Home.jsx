import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import fetchUsers from '../Util/api';

const Home = function () {
  const [usersState, setUsersState] = useState([]);
  useEffect(() => {
    fetchUsers(100).then((data) => setUsersState(data));
  }, [usersState]);
  console.log(usersState);
  return (
    <Container />
  );
};

export default Home;
