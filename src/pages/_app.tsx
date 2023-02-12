/* eslint-disable react/jsx-props-no-spreading */
import '@/styles/globals.css';
import 'regenerator-runtime/runtime';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
