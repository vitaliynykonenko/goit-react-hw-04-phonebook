import PropTypes from 'prop-types';
import {
  Item,
    ContactIcon,
    ContactName,
    ContactNumber,
    Button,
} from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onClick }) => {
  return (
      <Item key={id}>
          <ContactIcon />
      <ContactName>{name}: </ContactName>
      <ContactNumber>{number}</ContactNumber>
      <Button type="button" onClick={() => onClick(id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
