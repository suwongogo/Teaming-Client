import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  max-width: 80rem;
  margin: 0 auto;
  text-align: center;
  padding: 3rem 0;
  border: 1px solid black;
`;

const Header = () => {
  return <HeaderWrapper>Timing</HeaderWrapper>;
};

export default Header;
