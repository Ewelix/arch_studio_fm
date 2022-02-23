import styled from 'styled-components';
import sliderImg1S from '../../assets/sliderImages/image-hero-1S.jpg';
import sliderImg1M from '../../assets/sliderImages/image-hero-1M.jpg';
import sliderImg1L from '../../assets/sliderImages/image-hero-1L.jpg';

import sliderImg2S from '../../assets/sliderImages/image-hero-2S.jpg';
import sliderImg2M from '../../assets/sliderImages/image-hero-2M.jpg';
import sliderImg2L from '../../assets/sliderImages/image-hero-2L.jpg';

import sliderImg3S from '../../assets/sliderImages/image-hero-3S.jpg';
import sliderImg3M from '../../assets/sliderImages/image-hero-3M.jpg';
import sliderImg3L from '../../assets/sliderImages/image-hero-3L.jpg';

import sliderImg4S from '../../assets/sliderImages/image-hero-4S.jpg';
import sliderImg4M from '../../assets/sliderImages/image-hero-4M.jpg';
import sliderImg4L from '../../assets/sliderImages/image-hero-4L.jpg';

export const Wrapper = styled.div`
  ::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    right: 0;
    bottom: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 7%);
  }

  .slider-img {
    overflow: hidden;
    min-height: 560px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;

    @media (${({ theme }) => theme.device.m}) {
      min-height: 720px;
    }
  }

  .slider-img-1 {
    background-image: url(${sliderImg1S});
  }

  @media (${({ theme }) => theme.device.m}) {
    .slider-img-1 {
      background-image: url(${sliderImg1M});
    }
  }
  @media (${({ theme }) => theme.device.l}) {
    .slider-img-1 {
      background-image: url(${sliderImg1L});
    }
  }

  .slider-img-2 {
    background-image: url(${sliderImg2S});
  }

  @media (${({ theme }) => theme.device.m}) {
    .slider-img-2 {
      background-image: url(${sliderImg2M});
    }
  }
  @media (${({ theme }) => theme.device.l}) {
    .slider-img-2 {
      background-image: url(${sliderImg2L});
    }
  }

  .slider-img-3 {
    background-image: url(${sliderImg3S});
  }

  @media (${({ theme }) => theme.device.m}) {
    .slider-img-3 {
      background-image: url(${sliderImg3M});
    }
  }
  @media (${({ theme }) => theme.device.l}) {
    .slider-img-3 {
      background-image: url(${sliderImg3L});
    }
  }

  .slider-img-4 {
    background-image: url(${sliderImg4S});
  }

  @media (${({ theme }) => theme.device.m}) {
    .slider-img-4 {
      background-image: url(${sliderImg4M});
    }
  }
  @media (${({ theme }) => theme.device.l}) {
    .slider-img-4 {
      background-image: url(${sliderImg4L});
    }
  }
`;

export const SectionContent = styled.div`
  position: absolute;
  top: calc((700px - 350px) / 2);
  z-index: 4;
  margin-left: 1%;
  color: ${({ theme }) => theme.colors.white};

  @media (${({ theme }) => theme.device.m}) {
    margin-left: 1.5%;
  }

  h2 {
    margin: 20px 0;
    font-size: ${({ theme }) => theme.fontSize.m};
    white-space: pre-line;

    @media (${({ theme }) => theme.device.m}) {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }

  p {
    max-width: 350px;
    color: ${({ theme }) => theme.colors.white};

    @media (${({ theme }) => theme.device.m}) {
      max-width: 445px;
    }
  }
`;
