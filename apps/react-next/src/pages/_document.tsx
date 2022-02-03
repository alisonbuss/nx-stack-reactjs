// import { ReactElement } from 'react';
// import Document, { Html, Head, Main, NextScript } from 'next/document';
// import { ServerStyleSheet } from 'styled-components';
// export default class CustomDocument extends Document<{
//   styleTags: ReactElement[];
// }> {
//   static getInitialProps({ renderPage }) {
//     const sheet = new ServerStyleSheet();
//     const page = renderPage(
//       App => props => sheet.collectStyles(<App {...props} />),
//     );
//     const styleTags = sheet.getStyleElement();
//     return { ...page, styleTags };
//   }
//   render() {
//     return (
//       <Html>
//         <Head>{this.props.styleTags}</Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }
import React from 'react';
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class CustomDocument extends Document {
  static async getInitialProps(
    context: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = context.renderPage;
    try {
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(context);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  public render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <base href="/" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
