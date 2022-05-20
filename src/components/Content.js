import React, { useState } from "react";
import Header from "./Header";
import Contact from "./Contact";
import "./Content.css";
import ContactList from "./ContactList";

// const dummyContacts = [
//   { id: "1", name: "Nitin Sinha", designation: "Software Developer" },
//   { id: "2", name: "Piyush Mishra", designation: "Web Developer" },
//   { id: "3", name: "Rahul Pathak", designation: "Software Developer" },
//   { id: "4", name: "Aryan Sharma", designation: "Machine Learning" },
// ];


const Content = () => {

  const [contacts, setContacts] = useState([]);

  const addContact = (uName, uDesignation) => {
    setContacts((prevContact) => {
      return [...prevContact, {name: uName, designation: uDesignation, id: Math.random().toString()}];
    });
  };

  const deleteContact = (index) => {
    const contact = contacts;
    contact.splice(index,1);
    setContacts([...contact]);
  };
  
    return (
      <div className="content">
        <Header />
        <Contact onAddUser={addContact}  />
        <ContactList data={contacts} delete={deleteContact} />
      </div>
    );
  };

export default Content;
