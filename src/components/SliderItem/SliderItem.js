import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LinkButton from '../LinkButton/LinkButton';
import { Wrapper, SectionContent } from './SliderItem.styles';

const SliderItem = ({ sliderItem: { id, title, description } }) => {
  return (
    <Wrapper>
      <div className={`slider-img slider-img-${id}`}>
        <SectionContent>
          <h2>{title}</h2>
          <p>{description}</p>
          <LinkButton text="See Our Portfolio" to="/portfolio" />
        </SectionContent>
      </div>
    </Wrapper>
  );
};

export default SliderItem;
