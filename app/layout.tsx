/* eslint-disable @next/next/no-page-custom-font */
import MainHeader from "@/shared/components/MainHeader/MainHeader";
import React from "react";
import "thon-ui/core/base.css";
type Props = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale 1.0"
        ></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="crossorigin"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
