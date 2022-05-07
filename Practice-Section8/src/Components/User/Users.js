import React from "react";
import Card from "../UI/Card";


import classes from "./Users.module.css";

const Users = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.userName} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Users;
