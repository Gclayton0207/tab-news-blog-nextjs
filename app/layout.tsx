import React from "react";
import 'thon-ui/core/base.css';
type Props={
    children:React.ReactNode;
}
export default function RootLayout({children}:Props) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale 1.0"></meta>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
