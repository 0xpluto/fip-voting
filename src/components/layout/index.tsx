import React, { FunctionComponent, PropsWithChildren } from "react";
import { Inter } from "next/font/google";

import Header from "./Header";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={inter.className}>
        <div className="container mx-auto py-3 min-h-screen">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
