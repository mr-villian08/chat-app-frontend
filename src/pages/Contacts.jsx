import ContactList from "../components/contacts/ContactList";
import Header from "../components/contacts/Header";

const Contacts = () => {
  return (
    <div className="p-7 flex flex-col">
      <Header />
      <ContactList />
    </div>
  );
};

export default Contacts;
