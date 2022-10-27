import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px 30px;
`;

export const Section = styled.section`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const TitleH1 = styled.h1`
  margin-bottom: 15px;
  font-size: 32px;
  font-weight: normal;
  text-shadow: 2px 2px 4px darkviolet;
`;

export const TitleH2 = styled.h2`
  margin-bottom: 15px;
  font-size: 26px;
  font-weight: normal;
  text-shadow: 2px 2px 4px darkviolet;
`;
