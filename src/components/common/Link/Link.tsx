import React, {FC, ReactNode} from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';

const Link_li = styled.li``;

interface IProps {
  children: ReactNode;
  href: string;
  as?: string;
}

const Link: FC<IProps> = ({children, href, as}) => {
  return (
    <Link_li>
      <NextLink href={href} as={as}>
        <a>{children}</a>
      </NextLink>
    </Link_li>
  );
};

export default Link;
