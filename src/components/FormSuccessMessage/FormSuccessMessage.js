import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  color: #0eb67d;
`;

const FormSuccessMessage = () => {
  return <Text>Thank you for your message. We will contact you soon!</Text>;
};

export default FormSuccessMessage;
