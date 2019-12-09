import React, {ReactNode, FC} from 'react';
import styled from 'styled-components';

import Category from '@src/components/Category';
import MyInfo from '@src/components/MyInfo';

const MainWrapper = styled.main`
  display: flex;
  max-width: 80rem;
  min-height: 100vh;
  margin: 0 auto;
`;
const Aside = styled.aside`
  width: 25%;
  margin-top: 0.4rem;
  margin-right: 0.2rem;
  border: 1px solid green;
`;
const Section = styled.section`
  flex: 1;
  margin-top: 0.4rem;
  margin-left: 0.2rem;
  border: 1px solid red;
`;

interface IProps {
  children: ReactNode;
}

const Main: FC<IProps> = ({children}) => {
  return (
    <MainWrapper>
      <Aside>
        <MyInfo />
        <Category />
      </Aside>
      <Section>{children}</Section>
    </MainWrapper>
  );
};

export default Main;
