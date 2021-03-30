import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, phone, onRemove }) => {
  return (
    <li>
      {name}: {phone} <button onClick={() => onRemove(id)}>Delete</button>
    </li>
  );
};

const ContactsList = ({ contacts, onRemove }) => {
  if (contacts.length === 0) return null;
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem {...contact} onRemove={onRemove} />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }),
  ),
  onRemove: PropTypes.func.isRequired,
};
export default ContactsList;
