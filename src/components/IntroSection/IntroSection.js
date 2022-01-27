import React from 'react';
import { Wrapper, ImageWrapper, SectionWrapper } from './IntroSection.styles';
import SectionTitle from '../SectionTitle/SectionTitle';
import aboutImgS from './../../assets/mobile/image-hero.jpg';
import aboutImgM from './../../assets/tablet/image-hero.jpg';
import aboutImgL from './../../assets/desktop/image-hero.jpg';
import contactImgS from './../../assets/mobile/phone.jpg';
import contactImgM from './../../assets/tablet/phone.jpg';
import contactImgL from './../../assets/desktop/phone.jpg';
import PageTitle from '../PageTitle/PageTitle';

const IntroSection = ({header, title, text, type}) => {
  return (
    <Wrapper>
      <ImageWrapper>
        {type === "about" ? (
          <img srcSet={`${aboutImgS} 360w, ${aboutImgM} 720w, ${aboutImgL} 1400w`} alt=""/>
        ) : (
          <img srcSet={`${contactImgS} 360w, ${contactImgM} 728w, ${contactImgL} 1400w`} alt=""/>
          )
        }
      </ImageWrapper>
      <SectionWrapper>
        {/* if tablet */}
        <PageTitle title={header}/>
        <SectionTitle title={title} />
        <p>{text}</p>
      </SectionWrapper>
    </Wrapper>
  );
};

export default IntroSection;