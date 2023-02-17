import type { AppProps } from "next/app";

import { atom } from "jotai";

import { Layout } from "@/Layout";

import "@/styles/globals.css";

export const imageListAtom = atom<string[]>([]);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
