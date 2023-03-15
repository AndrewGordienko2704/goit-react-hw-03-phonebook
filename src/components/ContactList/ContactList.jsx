import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactListWrapper,
  ListItem,
  DeleteButton,
} from './ContactList.styled';

const ContactList = ({ contacts, onClick }) => {
  return (
    <ContactListWrapper>
      {contacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <span>{name}</span>
            <span>{number}</span>
            <DeleteButton type="button" onClick={() => onClick(id)}>
              Delete
            </DeleteButton>
          </ListItem>
        );
      })}
    </ContactListWrapper>
  );
};

export { ContactList };

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
