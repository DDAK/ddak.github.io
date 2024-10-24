import { React, Component } from "react";
import Head from "next/head";

import "../styles/global.styles.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Maven+Pro&family=Share+Tech+Mono&family=Source+Sans+Pro&family=Ubuntu&display=swap"
          rel="stylesheet"
        />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="android-chrome-icon" sizes="512x512" href="/android-chrome-512x152.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      </Head>

      <Component {...pageProps} />
    </>
  );
}
