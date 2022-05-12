import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ModalAlert from "../UI/ModalAlert";
import Wrapper from "../Helpers/Wrapper";

import classes from "./UserForm.module.css";

const UserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();
  const handleClose = () => setError(null);
  
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const userData = {
      userName: enteredName,
      age: enteredAge,
    };

    if (enteredName.length === 0 && enteredAge.length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)."
      });
    } else if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0)."
      });
    } else {
      props.onAddUser(userData);
      nameInputRef.current.value = '';
      ageInputRef.current.value = ''
    }
  };

  return (
    <Wrapper>
      {error && <ModalAlert title={error.title} message={error.message} handleClose={handleClose} />}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
              <label htmlFor="username">UserName</label>
              <input
                id="username"
                type="text"
                ref={nameInputRef}
              />
              <label htmlFor="age">Age (Years)</label>
              <input
                id="age"
                type="number"
                min="1"
                step="1"
                ref={ageInputRef}
              />
            <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default UserForm;
