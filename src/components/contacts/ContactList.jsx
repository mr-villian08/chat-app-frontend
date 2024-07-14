import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import ContactListItem from "./ContactListItem";

const ContactList = () => {
  const { contacts } = useLoaderData();

  return (
    <div
      className="mt-2 flex flex-col gap-6 h-[570px] overflow-y-auto"
      style={{ scrollbarWidth: "none" }}
    >
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={contacts}>
          {(loadedContacts) =>
            Object.keys(loadedContacts).length > 0 ? (
              Object.keys(loadedContacts).map((letter, index) => (
                <ContactListItem
                  key={index}
                  contacts={loadedContacts}
                  letter={letter}
                />
              ))
            ) : (
              <p className="text-center">No Contacts founds</p>
            )
          }
        </Await>
      </Suspense>
    </div>
  );
};

export default ContactList;
