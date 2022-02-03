import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@next/styles/global';
import theme from '@next/styles/theme';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default CustomApp;
