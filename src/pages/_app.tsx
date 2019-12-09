import App from 'next/app';
import Layout from '@src/components/Layout';
import GlobalStyle from '@src/style/globalStyle';
import {ThemeProvider} from 'styled-components';

import theme from '@src/style/theme';

export default class MyApp extends App {
  render() {
    const {Component, ...other} = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <GlobalStyle />
          <Component {...other} />
        </Layout>
      </ThemeProvider>
    );
  }
}
