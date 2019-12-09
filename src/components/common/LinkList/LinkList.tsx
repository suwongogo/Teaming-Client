import React, {FC, ReactNode} from 'react';
import styled from 'styled-components';

const LinkListWrapper = styled.article``;

interface IProps {
  children: ReactNode;
  title?: string;
}
const LinkList: FC<IProps> = ({children, title}) => {
  return (
    <LinkListWrapper>
      <h1>{title}</h1>
      <ul>{children}</ul>
    </LinkListWrapper>
  );
};

export default LinkList;
