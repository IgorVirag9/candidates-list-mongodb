import React, { useState, useEffect } from "react";
import axios from "axios";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3003/getCandidates")
      .then((response) => setUsersList(response.data))
      .catch((error) => console.error(error));
  }, []);

  const addUserHandler = (user) => {
    axios
      .post("http://localhost:3003/createCandidate", user)
      .then((response) =>
        setUsersList((prevUsersList) => [
          ...prevUsersList,
          { ...response.data, id: Math.random().toString() },
        ])
      )
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {usersList.length && <UsersList users={usersList} />}
    </div>
  );
};

export default App;