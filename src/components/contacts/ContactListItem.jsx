import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import ContactMenu from "./ContactMenu";

const ContactListItem = ({ contacts, letter }) => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-green-300 font-bold mt-4">{letter}</h2>
      {contacts[letter].map((contact) => (
        <div key={contact.id} className="flex items-center justify-between">
          {/* <form onSubmit={}></form> */}
          <NavLink
            to={`/chats`}
            className="flex justify-between items-center py-2"
          >
            <span>{contact.name}</span>
          </NavLink>
          <ContactMenu />
        </div>
      ))}
    </div>
  );
};

ContactListItem.propTypes = {};

export default ContactListItem;

ContactListItem.propTypes = {
  contacts: PropTypes.object.isRequired,
  letter: PropTypes.string.isRequired,
};
