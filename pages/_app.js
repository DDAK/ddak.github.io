import { React, Component } from "react";
import Head from "next/head";
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { useRouter } from "next/router";
import { useEffect } from "react";

import "../styles/global.styles.css";

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
  })


export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(()=> {
    const handleRouteChange = () => posthog.capture("$pageview")
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])
  return (
    <>
    <PostHogProvider client={posthog}>
      <Head>
      <meta name="google-adsense-account" content="ca-pub-1570360577499483"/>
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
    </PostHogProvider>  
    </>
  );
}
