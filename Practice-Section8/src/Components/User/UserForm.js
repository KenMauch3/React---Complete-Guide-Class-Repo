import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ModalAlert from "../UI/ModalAlert";

import classes from "./UserForm.module.css";

const UserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
    const [error, setError] = useState();
  const handleClose = () => setError(null);
  
  const UserNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const AgeChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      userName: userName,
      age: age,
    };

    if (userName.length === 0 && age.length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)."
      });
    } else if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0)."
      });
    } else {
      props.onAddUser(userData);
      setUserName("");
      setAge("");
    }
  };

  return (
    <div>
      {error && <ModalAlert title={error.title} message={error.message} handleClose={handleClose} />}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
              <label htmlFor="username">UserName</label>
              <input
                id="username"
                type="text"
                value={userName}
                onChange={UserNameChangeHandler}
              />
              <label htmlFor="age">Age (Years)</label>
              <input
                id="age"
                type="number"
                min="1"
                step="1"
                value={age}
                onChange={AgeChangeHandler}
              />
            <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
