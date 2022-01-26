import React from 'react';
import { pageTextContent } from '../../data/pageTextContent';
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = ({ u }) => {
  const { contactDetails } = pageTextContent;

  return (
    <>
      {contactDetails.map((userData, i) => {
        return <ContactListItem userData={userData} key={i} />;
      })}
    </>
  );
};

export default ContactList;
