import React from 'react';
import styled from 'styled-components';
import Link from '@src/components/common/Link';
import LinkList from '../common/LinkList';
import theme from '@src/style/theme';

const Nav = styled.nav`
width: 90%;
margin-left: auto;
margin-right: auto;
margin-top: 1rem;


h1 {
  font-size: 1.4rem;
  padding-bottom: 0.4rem;
  border-bottom: 2px solid ${theme.grey};
}
ul {
  display: flex;
  flex-direction: column;
  margin-bottom: .5rem;
  
  a {
    width: 100%;
    display: inline-flex;
    align-items: center;
    padding: .4rem;

    &:hover {
      background-color: ${theme.grey};
    }
    
    img {
      justify-self: flex-start;
      width: 3rem;
    }
    
    P {
      margin: 0 auto;
    }
  }
}

`;

const Category = () => {
  return (
    <Nav>
      <LinkList title="포지션">
        <Link href="/list/[category]" as="/list/top">
          <img src="/static/images/position/Top.png" />
          <p>탑</p>
        </Link>
        <Link href="/list/[category]" as="/list/jungle">
         <img src="/static/images/position/Jungle.png" />
          <p>정글</p>
        </Link>
        <Link href="/list/[category]" as="/list/mid">
          <img src="/static/images/position/Mid.png" />
         <p>미드</p>
        </Link>
        <Link href="/list/[category]" as="/list/ad">
          <img src="/static/images/position/Bot.png" />
          <p>원딜</p>
        </Link>
        <Link href="/list/[category]" as="/list/supporter">
          <img src="/static/images/position/Support.png" />
          <p>서폿</p>
        </Link>
      </LinkList>
      <LinkList title="티어">
        <Link href="/list/[category]" as="/list/unrank">
          <img src="/static/images/rank/provisional.png" />
          <p>상관없음</p>
        </Link>
        <Link href="/list/[category]" as="/list/iron">
         <img src="/static/images/rank/Iron.png" />
          <p>아이언</p>
        </Link>
        <Link href="/list/[category]" as="/list/bronze">
          <img src="/static/images/rank/Bronze.png" />
         <p>브론즈</p>
        </Link>
        <Link href="/list/[category]" as="/list/silver">
          <img src="/static/images/rank/Silver.png" />
          <p>실버</p>
        </Link>
        <Link href="/list/[category]" as="/list/gold">
          <img src="/static/images/rank/Gold.png" />
          <p>골드</p>
        </Link>
        <Link href="/list/[category]" as="/list/platinum">
          <img src="/static/images/rank/Platinum.png" />
          <p>플레티넘</p>
        </Link>
        <Link href="/list/[category]" as="/list/diamond">
          <img src="/static/images/rank/Diamond.png" />
          <p>다이아</p>
        </Link>
        <Link href="/list/[category]" as="/list/master">
          <img src="/static/images/rank/Master.png" />
          <p>마스터</p>
        </Link>
        <Link href="/list/[category]" as="/list/supporter">
          <img src="/static/images/rank/GrandMaster.png" />
          <p>그랜드마스터</p>
        </Link>
        <Link href="/list/[category]" as="/list/supporter">
          <img src="/static/images/rank/Challenger.png" />
          <p>챌린져</p>
        </Link>
      </LinkList>
    </Nav>
  );
};

export default Category;
