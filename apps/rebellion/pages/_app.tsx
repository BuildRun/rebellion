import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to Rebellion CMS!</title>
      </Head>
      <div className="app">
        <header className="flex">
          <h1>Welcome to Rebellion CMS!</h1>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
