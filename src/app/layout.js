"use client";
import Header from "@/components/layout/Header";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import "./globals.scss";
import Head from "next/head";

// export const metadata = {
//   title: "Portfolio by Next",
//   description: "create portfolio by Next",
// };

export default function RootLayout({ children }) {
  const lenis = useLenis(({ scroll }) => {});
  return (
    <>
      <Head>
        <title>Portfolio by Next</title>
        <meta name="description" content="Create portfolio by Next" />
      </Head>
      <html lang="ko">
        <ReactLenis root>
          <body>
            <Header />
            {children}
          </body>
        </ReactLenis>
      </html>
    </>
  );
}
