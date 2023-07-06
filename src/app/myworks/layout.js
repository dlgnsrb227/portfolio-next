import React from "react";

export const metadata = {
  title: "Portfolio by Next",
  description: "create portfolio by Next",
};

export default function MyworksLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
