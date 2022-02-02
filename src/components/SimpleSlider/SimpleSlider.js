import React from 'react';
import Slider from 'react-slick';
import { pageTextContent } from '../../data/pageTextContent';
import SliderItem from '../SliderItem/SliderItem';
import { StyledPaginationItem, Wrapper } from './SimpleSlider.styles';

const SimpleSlider = () => {
  const { sliderItems } = pageTextContent;

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    customPaging: (i) => <StyledPaginationItem>0{i + 1}</StyledPaginationItem>,
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        {sliderItems.map((sliderItem) => {
          return <SliderItem sliderItem={sliderItem} key={sliderItem.id} />;
        })}
      </Slider>
    </Wrapper>
  );
};

export default SimpleSlider;
