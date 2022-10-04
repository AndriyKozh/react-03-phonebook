import Phonebook from 'components/Phonebook/Phonebook';

function Contacts({ contacts, listDel }) {
  return (
    <div>
      {contacts.map((contact, ind) => (
        <Phonebook
          key={contact.id}
          id={ind}
          contact={contact}
          listDel={listDel}
        />
      ))}
    </div>
  );
}

export default Contacts;
