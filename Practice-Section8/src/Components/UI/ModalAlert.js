import React from "react";
import ReactDOM from "react-dom";

import Button from "./Button";
import Card from "./Card";

import classes from "./ModalAlert.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.handleClose} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.handleClose}>Okay</Button>
      </footer>
    </Card>
  );
};

const ModalAlert = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop handleClose={props.handleClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          handleClose={props.handleClose}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ModalAlert;
