import React from 'react';
import twitter from '../../../assets/icons/icon-twitter.svg';
import linkedin from '../../../assets/icons/icon-linkedin.svg';
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../../../assets/avatars', false, /\.(png|jpe?g|svg)$/));

const LeadersListItem = ({name, position, i}) => {
  return (
    <div>
      <img src={images[i]} alt='Leader portrait' />
      <p>{name}</p>
      <p>{position}</p>
      <div>
        <img src={linkedin} alt='Linkedin' />
        <img src={twitter} alt='Twitter' />
      </div>
    </div>
  );
};

export default LeadersListItem;