import { PhonebookBlock, PhoneBookDot, PhoneBookBtn } from './PhoneBook.style';

function Phonebook({ contact, id, listDel }) {
  return (
    <PhonebookBlock>
      <PhoneBookDot></PhoneBookDot>
      <p>
        {contact.name}:{contact.number}
      </p>
      <PhoneBookBtn
        type={'button'}
        onClick={() => {
          listDel(id);
        }}
      >
        delete
      </PhoneBookBtn>
    </PhonebookBlock>
  );
}

export default Phonebook;
