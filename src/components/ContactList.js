import ContactCard from "./ContactCard";

const ContactList = (props) => {

  return (
    <div>
      {props.data.map((contact) => (
        <ContactCard name={contact.name} designation={contact.designation} key={contact.id} handleDelete={props.delete} />
      ))}
    </div>
  );
};

export default ContactList;
