import React, {ReactNode, FC} from 'react';
import Head from 'next/head';

import Header from '@src/components/Layout/Header';
import Main from '@src/components/Layout/Main';

interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = ({children}) => {
  return (
    <>
      <Head>
        <title>티밍</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap"
          rel="stylesheet"
        ></link>
        <meta charSet="utf-8" />
      </Head>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
