import { useEffect, useState } from "react";


export default function RootLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {


  return (
    <html >
      <body style={{
        // backgroundColor: 'white',
        maxHeight: '100vh',
      }}>

        {children}


      </body>
    </html>
  );
};