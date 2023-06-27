"use client";

import React, { FunctionComponent, PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";

import Header from "./Header";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={inter.className}>
        <div className="container mx-auto py-3 min-h-screen">{children}</div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
