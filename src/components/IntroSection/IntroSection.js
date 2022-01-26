import React from 'react';
import { SectionWrapper } from '../AboutTab/About/About.styles';
import { ImageWrapper } from './IntroSection.styles';
import SectionTitle from '../SectionTitle/SectionTitle';
import aboutImgS from './../../assets/mobile/image-hero.jpg';
import aboutImgM from './../../assets/tablet/image-hero.jpg';
import aboutImgL from './../../assets/desktop/image-hero.jpg';
import contactImgS from './../../assets/mobile/phone.jpg';
import contactImgM from './../../assets/tablet/phone.jpg';
import contactImgL from './../../assets/desktop/phone.jpg';

const IntroSection = ({header, title, text, type}) => {
  return (
    <>
      <ImageWrapper>
        <h2>{header}</h2>
        {type === "about" ? (
          <img srcSet={`${aboutImgS} 300w, ${aboutImgM} 768w, ${aboutImgL} 1100w`} alt=""/>
        ) : (
          <img srcSet={`${contactImgS} 300w, ${contactImgM} 768w, ${contactImgL} 1100w`} alt=""/>
          )
        }
      </ImageWrapper>
      <SectionWrapper>
        <SectionTitle title={title} />
        <p>{text}</p>
      </SectionWrapper>
    </>
  );
};

export default IntroSection;