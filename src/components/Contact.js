import React, { useState } from "react";
import "./Contact.css";


const Contact = (props) => {

  const [userName, setUserName] = useState('');
  const [userDesignation, setUserDesignation] = useState('');

  const nameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const designationChangeHandler = (event) => {
    setUserDesignation(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddUser(userName, userDesignation);

    setUserName("");
    setUserDesignation("");
  };

  
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="contact">
          <h3>Customer Success Managers</h3>
          <input
            type="text"
            placeholder="Name"
            value={userName}
            onChange={nameChangeHandler}
          />
          <input
            type="text"
            placeholder="Designation"
            value={userDesignation}
            onChange={designationChangeHandler}
          />
          <br />
          <button type="submit">Add CSM</button>
        </div>
      </form>
    </>
  );
};

export default Contact;
