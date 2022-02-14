import styled from 'styled-components';
import project1S from '../../assets/portfolio/mobile/image-seraph.jpg';
import project1M from '../../assets/portfolio/tablet/image-seraph.jpg';
import project1L from '../../assets/portfolio/desktop/image-seraph.jpg';

import project2S from '../../assets/portfolio/mobile/image-eebox.jpg';
import project2M from '../../assets/portfolio/tablet/image-eebox.jpg';
import project2L from '../../assets/portfolio/desktop/image-eebox.jpg';

import project3S from '../../assets/portfolio/mobile/image-federal.jpg';
import project3M from '../../assets/portfolio/tablet/image-federal.jpg';
import project3L from '../../assets/portfolio/desktop/image-federal.jpg';

import project4S from '../../assets/portfolio/mobile/image-del-sol.jpg';
import project4M from '../../assets/portfolio/tablet/image-del-sol.jpg';
import project4L from '../../assets/portfolio/desktop/image-del-sol.jpg';

import project5S from '../../assets/portfolio/mobile/image-prototype.jpg';
import project5M from '../../assets/portfolio/tablet/image-prototype.jpg';
import project5L from '../../assets/portfolio/desktop/image-prototype.jpg';

import project6S from '../../assets/portfolio/mobile/image-228b.jpg';
import project6M from '../../assets/portfolio/tablet/image-228b.jpg';
import project6L from '../../assets/portfolio/desktop/image-228b.jpg';

import project7S from '../../assets/portfolio/mobile/image-edelweiss.jpg';
import project7M from '../../assets/portfolio/tablet/image-edelweiss.jpg';
import project7L from '../../assets/portfolio/desktop/image-edelweiss.jpg';

import project8S from '../../assets/portfolio/mobile/image-netcry.jpg';
import project8M from '../../assets/portfolio/tablet/image-netcry.jpg';
import project8L from '../../assets/portfolio/desktop/image-netcry.jpg';

import project9S from '../../assets/portfolio/mobile/image-hypers.jpg';
import project9M from '../../assets/portfolio/tablet/image-hypers.jpg';
import project9L from '../../assets/portfolio/desktop/image-hypers.jpg';

import project10S from '../../assets/portfolio/mobile/image-sxiv.jpg';
import project10M from '../../assets/portfolio/tablet/image-sxiv.jpg';
import project10L from '../../assets/portfolio/desktop/image-sxiv.jpg';

import project11S from '../../assets/portfolio/mobile/image-trinity.jpg';
import project11M from '../../assets/portfolio/tablet/image-trinity.jpg';
import project11L from '../../assets/portfolio/desktop/image-trinity.jpg';

import project12S from '../../assets/portfolio/mobile/image-paramour.jpg';
import project12M from '../../assets/portfolio/tablet/image-paramour.jpg';
import project12L from '../../assets/portfolio/desktop/image-paramour.jpg';

// przedrostek Styled dla generycznych elementow

export const StyledList = styled.ul`
  width: 100%;
  padding: 0 20px 30px;
  list-style: none;
  margin: 0;

  @media (${({ theme }) => theme.device.m}) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 0;
  }

  @media (${({ theme }) => theme.device.l}) {
    justify-content: space-between;
  }

  .project {
    position: relative;
    height: 14rem;
    margin-top: 20px;
    color: ${({ theme }) => theme.colors.white};
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 1;

    @media (${({ theme }) => theme.device.m}) {
      width: 100%;
    }

    @media (${({ theme }) => theme.device.l}) {
      width: unset;
      min-width: calc((900px / 3) - 20px);
      height: 560px;
      margin-top: 0;
    }

    @media (${({ theme }) => theme.device.xl}) {
      min-width: 350px;
    }

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      content: '';
      background-color: rgba(0, 0, 0, 20%);
    }
    
    &:hover {
      opacity: 0.7;
      cursor: pointer;
      transition: opacity 0.5s;
    }

    &__name,
    &__date {
      position: absolute;
      left: 20px;
      color: ${({ theme }) => theme.colors.white};
    }

    &__name {
      bottom: 30px;
      z-index: 1;
      font-size: ${({ theme }) => theme.fontSize.xs};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }

    &__date {
      bottom: 10px;
      z-index: 2;
      font-size: ${({ theme }) => theme.fontSize.xxs};
      font-weight: ${({ theme }) => theme.fontWeight.medium};
    }
  }

  .project-1 {
    background-image: url(${project1S});
  }

  @media (${({ theme }) => theme.device.s}) {
    .project-1 {
      background-image: url(${project1M});
    }
  }
  @media (${({ theme }) => theme.device.l}) {
    .project-1 {
      background-image: url(${project1L});
    }
  }

  .project-2 {
    background-image: url(${project2S});
  }

  @media (${({ theme }) => theme.device.s}) {
    .project-2 {
      background-image: url(${project2M});
    }
  }
  @media (${({ theme }) => theme.device.l}) {
    .project-2 {
      background-image: url(${project2L});
    }
  }

  .project-3 {
    background-image: url(${project3S});
  }

  @media (${({ theme }) => theme.device.s}) {
    .project-3 {
      background-image: url(${project3M});
    }
  }
  @media (${({ theme }) => theme.device.l}) {
    .project-3 {
      background-image: url(${project3L});
    }
  }

  .project-4 {
    background-image: url(${project4S});
  }

  @media (${({ theme }) => theme.device.s}) {
    .project-4 {
      background-image: url(${project4M});
    }
  }
  @media (${({ theme }) => theme.device.l}) {
    .project-4 {
      background-image: url(${project4L});
    }
  }

  .project-5 {
    background-image: url(${project5S});
  }

  @media (${({ theme }) => theme.device.s}) {
    .project-5 {
      background-image: url(${project5M});
    }
  }
  @media (${({ theme }) => theme.device.l}) {
    .project-5 {
      background-image: url(${project5L});
    }
  }

  .project-6 {
    background-image: url(${project6S});
  }

  @media (${({ theme }) => theme.device.s}) {
    .project-6 {
      background-image: url(${project6M});
    }
  }
  @media (${({ theme }) => theme.device.l}) {
    .project-6 {
      background-image: url(${project6L});
    }
  }

  .project-7 {
    background-image: url(${project7S});
  }

  @media (${({ theme }) => theme.device.s}) {
    .project-7 {
      background-image: url(${project7M});
    }
  }
  @media (${({ theme }) => theme.device.l}) {
    .project-7 {
      background-image: url(${project7L});
    }
  }

  .project-8 {
    background-image: url(${project8S});
  }

  @media (${({ theme }) => theme.device.s}) {
    .project-8 {
      background-image: url(${project8M});
    }
  }
  @media (${({ theme }) => theme.device.l}) {
    .project-8 {
      background-image: url(${project8L});
    }
  }

  .project-9 {
    background-image: url(${project9S});
  }

  @media (${({ theme }) => theme.device.s}) {
    .project-9 {
      background-image: url(${project9M});
    }
  }
  @media (${({ theme }) => theme.device.l}) {
    .project-9 {
      background-image: url(${project9L});
    }
  }

  .project-10 {
    background-image: url(${project10S});
  }

  @media (${({ theme }) => theme.device.s}) {
    .project-10 {
      background-image: url(${project10M});
    }
  }
  @media (${({ theme }) => theme.device.l}) {
    .project-10 {
      background-image: url(${project10L});
    }
  }

  .project-11 {
    background-image: url(${project11S});
  }

  @media (${({ theme }) => theme.device.s}) {
    .project-11 {
      background-image: url(${project11M});
    }
  }
  @media (${({ theme }) => theme.device.l}) {
    .project-11 {
      background-image: url(${project11L});
    }
  }

  .project-12 {
    background-image: url(${project12S});
  }

  @media (${({ theme }) => theme.device.s}) {
    .project-12 {
      background-image: url(${project12M});
    }
  }
  @media (${({ theme }) => theme.device.l}) {
    .project-12 {
      background-image: url(${project12L});
    }
  }
`;
