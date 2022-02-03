import React from 'react';
import Head from 'next/head';

import { Container } from '@next/styles/pages/Index';

export function Index() {
  return (
    <Container data-cy="content-main">
      <Head>
        <title>Home</title>
      </Head>
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure.</p>
    </Container>
  );
}

export default Index;
