import React from 'react';
import MapButton from '../MapButton/MapButton';
import { Wrapper, StyledList } from './ContactListItem.styles';

const showIndex = (index) => {
  console.log(`index nr ${index+1}`)
}

const ContactListItem = ({ userData: { office, mail, address, phone }, index }) => {
  return (
    <Wrapper>
      <h6>{office}</h6>
      <StyledList>
        <li>Mail : {mail}</li>
        <li>Address : {address}</li>
        <li>Phone : {phone}</li>
      </StyledList>
      <MapButton onClick={() => showIndex(index)}/>
    </Wrapper>
  );
};

export default ContactListItem;
