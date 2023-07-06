"use client";
import Header from "@/components/layout/Header";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import "./globals.scss";

export const metadata = {
  title: "Portfolio by Next",
  description: "create portfolio by Next",
};

export default function RootLayout({ children }) {
  const lenis = useLenis(({ scroll }) => {});
  return (
    <html lang="ko">
      <ReactLenis root>
        <body>
          <Header />
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
