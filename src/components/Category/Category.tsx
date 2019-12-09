import React from 'react';
import styled from 'styled-components';
import Link from '@src/components/common/Link';
import LinkList from '../common/LinkList';

const Nav = styled.nav``;

const Category = () => {
  return (
    <Nav>
      <LinkList title="포지션별">
        <Link href="/list/[category]" as="/list/top">
          탑
        </Link>
        <Link href="/list/[category]" as="/list/jungle">
          정글
        </Link>
        <Link href="/list/[category]" as="/list/mid">
          미드
        </Link>
        <Link href="/list/[category]" as="/list/ad">
          원딜
        </Link>
        <Link href="/list/[category]" as="/list/supporter">
          서폿
        </Link>
      </LinkList>
    </Nav>
  );
};

export default Category;
