import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import UserCard from '../Components/UserCard';
import API from '../Util/api';

const Home = function () {
  const [usersState, setUsersState] = useState([]);
  useEffect(() => {
    API.fetchUsers(100).then((data) => setUsersState(data));
  }, []);
  return (
    <Container>
      {usersState.map((user) => <UserCard userInfo={user} key={user.id.value} />)}
    </Container>
  );
};

export default Home;
