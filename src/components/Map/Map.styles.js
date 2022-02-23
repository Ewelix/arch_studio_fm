import styled from 'styled-components';

export const MapWrapper = styled.div`
  margin: ${({ theme }) => theme.sectionMargin} 0;

  .leaflet-container {
    z-index: 1;
    min-height: 360px;
    width: 100%;

    @media (${({ theme }) => theme.device.m}) {
      min-height: 560px;
    }
  }

  .leaflet-popup-content-wrapper li {
    line-height: 25px;
  }

  .leaflet-control-attribution {
    display: none;
  }
`;
