import type { Metadata } from "next";

import Header from "./Header/page"

import Footer from "./Footer/page"



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Header />
        {children}
        
      <Footer />

      </body>
    </html>
  );
}




