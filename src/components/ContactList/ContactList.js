import React from 'react';

import { pageTextContent } from '../../data/pageTextContent';
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = () => {
  const { contactDetails } = pageTextContent;

  return (
    <>
      {contactDetails.map((userData, index) => {
        return <ContactListItem userData={userData} key={index} index={index} isButtonRequired />;
      })}
    </>
  );
};

export default ContactList;
