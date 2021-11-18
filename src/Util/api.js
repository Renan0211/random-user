const BASE_URL = 'https://randomuser.me/api/';

const fetchUsers = async (numOfUsers) => {
  const users = await fetch(`${BASE_URL}?results=${numOfUsers}`).then((res) => res.json()).then((res) => res.results);
  return users;
};

export default { fetchUsers };
