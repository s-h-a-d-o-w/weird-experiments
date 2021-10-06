import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import { Head } from '../components/Head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
