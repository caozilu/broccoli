import React from "react";
import Head from "next/head";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function Home() {
  const siteName = "Broccoli & Co.";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
      </div>

      <Head>
        <title>{siteName} | An upcoming online service company</title>
        <meta
          name="description"
          content="A popular online service company to help you enjoy every day in a better way."
        ></meta>
        <meta name="robots" content="index, follow" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1"
        />
      </Head>

      <Header siteName={siteName} />

      <Main />

      <Footer siteName={siteName} />
    </div>
  );
}
