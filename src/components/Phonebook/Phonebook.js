import { PhonebookBlock, PhoneBookDot, PhoneBookBtn } from './PhoneBook.style';
import PropTypes from 'prop-types';
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
Phonebook.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string).isRequired,
  listDel: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Phonebook;
