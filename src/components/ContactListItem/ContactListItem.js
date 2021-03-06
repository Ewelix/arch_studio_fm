import React from 'react';

import MapButton from '../MapButton/MapButton';
import { Wrapper, StyledList } from './ContactListItem.styles';

const ContactListItem = ({ userData: { office, mail, address, phone }, isButtonRequired }) => {
  return (
    <Wrapper>
      <h6>{office}</h6>
      <StyledList>
        <li>Mail : {mail}</li>
        <li>Address : {address}</li>
        <li>Phone : {phone}</li>
      </StyledList>
      {isButtonRequired && <MapButton />}
    </Wrapper>
  );
};

export default ContactListItem;
