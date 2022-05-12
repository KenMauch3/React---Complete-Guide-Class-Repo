// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import UserForm from "./Components/User/UserForm";
import Users from "./Components/User/Users";

function App() {
  const [users, setUsers] = useState([]);

  const addNewUser = (newUser) => {
    const userData = {
      ...newUser,
      id: Math.random().toString(),
    };
    setUsers((prevState) => {
      return [...prevState, userData];
    });
  };

  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <UserForm onAddUser={addNewUser} />
          {users.length > 0 && <Users users={users} />}
        </header>
      </div>
    </React.Fragment>
  );
}

export default App;
