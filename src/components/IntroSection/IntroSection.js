import React from 'react';

import PageTitle from '../PageTitle/PageTitle';
import SectionTitle from '../SectionTitle/SectionTitle';
import aboutImgL from './../../assets/desktop/image-hero.jpg';
import contactImgL from './../../assets/desktop/phone.jpg';
import aboutImgS from './../../assets/mobile/image-hero.jpg';
import contactImgS from './../../assets/mobile/phone.jpg';
import aboutImgM from './../../assets/tablet/image-hero.jpg';
import contactImgM from './../../assets/tablet/phone.jpg';
import { Wrapper, ImageWrapper, SectionWrapper } from './IntroSection.styles';
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen';

const IntroSection = ({ header, title, text, type }) => {
  const checkMobileScreen = useCheckMobileScreen();
  return (
    <Wrapper>
      <ImageWrapper>
        {type === 'about' ? (
          <img
            srcSet={`${aboutImgS} 360w, ${aboutImgM} 720w, ${aboutImgL} 1400w`}
            alt=""
          />
        ) : (
          <img
            srcSet={`${contactImgS} 360w, ${contactImgM} 720w, ${contactImgL} 1400w`}
            alt=""
          />
        )}
      </ImageWrapper>
      <SectionWrapper>
        {!checkMobileScreen && <PageTitle title={header} />}
        <SectionTitle title={title} />
        <p>{text}</p>
      </SectionWrapper>
    </Wrapper>
  );
};

export default IntroSection;
